import { useState } from "react"
import CommentList from "./CommentList"
function CommentPopup({info, id}) {
  const [comment, setComment] = useState('')
  const comments = info.subscription.comment
  const applicationId = info._id
  const authToken = id
  console.log(id)
  const apiUrl = `https://appsalabackend-p20y.onrender.com/comment/${applicationId}`;  

  const handleChange = (e) => {
    setComment(e.target.value)

  }
  const handleSubmit = (e) => {
    e.preventDefault()
  const commentObj={
    comment: comment,
  }
    // Data to be sent in the POST request
  const postData = {
    comments: [...comments, commentObj],
  };
  // Configure the request
  const requestOptions = {
    method: 'POST',
    headers: {
    "Authorization": `Bearer ${authToken}`,
    "Content-Type": "application/json"
      // You can add other headers here if needed
    },
    body: JSON.stringify(postData),
  };
  
  // Perform the fetch request
  fetch(apiUrl, requestOptions)
    .then(response => {
      response.json()})
    .then(data => {
      console.log('Response data:', data);
      // Handle the response data here
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle errors here
    });
  }
  return (
    <>
    <div className="comment-popup">
      <div className="comment-heading">
        <h3>My Comments</h3>  
      <p>Tell us about your experience</p>
    </div>
    <div class="line"></div>
      <form action="" className="comment-form" onChange={handleChange} onSubmit={handleSubmit}>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button className="button">Comment</button>
      </form>
      <div className="comments-section">
      <h3 className="comment-heading">Previous Comments</h3>
   
  
       
        {
 comments?.map((comment)=>(   
  <CommentList comment={comment}/>
))
        }
        
    </div>
      </div>

    </>
  )
}

export default CommentPopup