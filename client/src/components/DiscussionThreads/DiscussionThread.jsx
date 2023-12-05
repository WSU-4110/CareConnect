import React from 'react';
import DiscussionComment from './DiscussionComment';
import DiscussionCommentForm from './DiscussionCommentForm';
import { useParams } from 'react-router-dom';
import Main from "../Main";

const DiscussionThread = ({ discussionThreads, setDiscussionThreads }) => {
  const { threadId } = useParams();
  const threadIdInt = parseInt(threadId);
  const thread = discussionThreads.find((thread) => thread.id === threadIdInt);

  if (!thread) {
    return <div>Thread not found</div>;
  }

  const likeComment = (commentId) => {
    const updatedThreads = discussionThreads.map((thread) => {
      const updatedComments = thread.comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, likes: comment.likes + 1 };
        } else {
          return comment;
        }
      });
      return { ...thread, comments: updatedComments };
    });

    // Update the discussionThreads state with the modified comments
    setDiscussionThreads(updatedThreads);
  };

  const addComment = (text) => {
    const newComment = {
      text,
      timestamp: new Date().toLocaleString(),
      likes: 0,
    };
    const updatedThread = { ...thread, comments: [...thread.comments, newComment] };

    const updatedThreads = discussionThreads.map((thread) =>
      thread.id === updatedThread.id ? updatedThread : thread
    );

    setDiscussionThreads(updatedThreads);
  };

  return (
    <Main>
    <div>
      <h1>{thread.title}</h1>
      <ul>
        {thread.comments.map((comment) => (
          <li key={comment.id}>
            <DiscussionComment
              comment={comment}
              likeComment={() => likeComment(comment.id)}
            />
          </li>
        ))}
      </ul>
      <DiscussionCommentForm addComment={addComment} />
    </div>
    </Main>
  );
};

export default DiscussionThread;
