import React, { useState } from 'react';


const DiscussionComment = ({ comment, likeComment }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeComment = () => {
    if (!liked) {
      likeComment(); // Call the likeComment function passed from the parent
      setLiked(true);
    }
  };

  return (
 
    <div className="discussion-comment">
      <p>{comment.text}</p>
      <p>Date: {comment.timestamp}</p>
      <button onClick={handleLikeComment}> Likes ({comment.likes})</button>
    </div>
    
  );
};

export default DiscussionComment;
