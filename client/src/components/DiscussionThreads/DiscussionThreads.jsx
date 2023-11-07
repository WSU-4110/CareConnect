import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DiscussionThreads.css'; // Import the CSS file

const DiscussionThreads = ({ discussionThreads, setDiscussionThreads }) => {
  const [newThreadTitle, setNewThreadTitle] = useState('');
  const navigate = useNavigate();

  const [likedThreads, setLikedThreads] = useState([]);

  const handleThreadSubmit = () => {
    if (newThreadTitle) {
      const newThread = {
        id: discussionThreads.length + 1,
        title: newThreadTitle,
        comments: [],
        likes: 0,
      };

      const updatedThreads = [...discussionThreads, newThread];

      setDiscussionThreads(updatedThreads);

      navigate(`/discussion-threads/${newThread.id}`);
      setNewThreadTitle('');
    }
  };

  const likeThread = (threadId) => {
    if (!likedThreads.includes(threadId)) {
      // If the thread has not been liked in this session, proceed to like it.

      // Increment the likes count by 1 for the thread
      const updatedThreads = discussionThreads.map((thread) => {
        if (thread.id === threadId) {
          return { ...thread, likes: thread.likes + 1 };
        } else {
          return thread;
        }
      });

      // Update the discussionThreads state with the modified thread
      setDiscussionThreads(updatedThreads);

      // Update the likedThreads state to indicate that the user has liked this thread.
      setLikedThreads([...likedThreads, threadId]);
    }
  };

  return (
    <div className="discussion-threads-container">
      <h1 className="thread-header">Discussion Board</h1><br></br>
      <p> Our Discussion Board is created for our users to anonymously communicate with each-other, share their opinions on certain matters and come together as a community. We all face hardships in life, and there is no shame in talking about it with each-other. Social Support is one of the best ways for everyone to deal with elevated stress levels, anxiety and depression.<br></br>
      Feel free to explore existing threads created by other users, or create a thread of your own where you and other users may comment under. </p> <br></br> <br></br>
      <div className="tabloid">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="New Thread Title"
            value={newThreadTitle}
            onChange={(e) => setNewThreadTitle(e.target.value)}
          /><br></br> <br></br>
          <button type="submit" onClick={handleThreadSubmit}>
            Create New Thread
          </button>
          <br></br><br></br><br></br>
        </form>
        <ul className="thread-list">
          {discussionThreads.map((thread) => (
            <li key={thread.id} className="thread-item">
              <Link to={`/discussion-threads/${thread.id}`} className="thread-link">
                {thread.title}
              </Link><br></br><br></br>
              <button onClick={() => likeThread(thread.id)}>Likes ({thread.likes})</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DiscussionThreads;
