import React, { useState, useEffect } from "react";
import CommentList from "./CommentList";

// Function to sort comments by date in descending order
const sortCommentsByDate = (comments) => {
  return comments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

function CommentPopup({ info }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(sortCommentsByDate(info.subscription.comment));

  const authToken = localStorage.getItem("access_token");
  const apiUrl = `https://appsalabackend-p20y.onrender.com/comment/${info.obj_id._id}`;

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: comment }),
    };

    try {
      const response = await fetch(apiUrl, requestOptions);
      const data = await response.json();
      console.log("Response data:", data);

      if (data.status === true) { // Add the new comment to the top of the comments list with the current date
        const newComment = { ...data, createdAt: new Date().toISOString() };
        setComments((prevComments) => [newComment, ...prevComments]);
      }else{
        alert(data.message)
      }

      setComment("");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.warn(comment, comments)
  return (
    <div className="comment-popup">
      <form onSubmit={handleSubmit} className="comment-form">
        <textarea
          value={comment}
          onChange={handleChange}
          placeholder="Write your comment..."
          rows="4"
        />
        <button type="submit">Comment</button>
      </form>

      <div className="comments-section">
        <h3 className="comment-heading">Previous Comments</h3>
        {comments.map((comment, index) => (
          <CommentList key={comment._id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default CommentPopup;
