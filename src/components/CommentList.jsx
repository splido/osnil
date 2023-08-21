import { FaUser } from "react-icons/fa";
import { ImBin2 } from "react-icons/im";

function CommentList({comment}) {
// Convert the timestamp to a Date object
const date = new Date(comment.createdAt);

// Define options for formatting the date
const options = { year: 'numeric', month: 'long', day: 'numeric' };

// Format the date as "August 20, 2023"
const formattedDate = date.toLocaleDateString('en-US', options);
const DeleteComment = (id) => {}
  return (
    <div className="comments">
    <div className="useranddata">
    <FaUser className="bin"/>
    <p className="comment-time">{formattedDate}</p>
    </div>
    <div className="commentandbin">
<p className="user-comment">{comment.comment}</p>
  <ImBin2 className="bin" onClick={DeleteComment(comment._id)}/>
    </div>
   </div>
  )
}

export default CommentList