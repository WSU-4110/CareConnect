import React, { useState } from 'react';

const DiscussionCommentForm = ({ addComment }) => {
  const [newComment, setNewComment] = useState('');

  const addNewComment = () => {
    if (newComment) {
      addComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="discussion-comment-form">
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment..."
      /><br></br> <br></br>
      <button onClick={addNewComment}>Add Comment</button>
    </div>
  );
};

export default DiscussionCommentForm;