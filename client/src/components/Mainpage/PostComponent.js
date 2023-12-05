// PostComponent.js
import React, { useState } from 'react';
import Profileimage from '../Images/Profilepic.png';

const PostComponent = ({ axios, post, profile, handlePostComment }) => {
  const [comment, setComment] = useState('');
  const [likes, setLikes] = useState(post.likes || []);



  const handleLike = () => {
    // This function will be called when the like button is clicked
    // For simplicity, we're just toggling the like status for the current user
    const userId = profile._id; // Replace with the actual user ID
    const alreadyLiked = likes.includes(userId);

    if (alreadyLiked) {
      // Remove like
      setLikes(likes.filter(id => id !== userId));
    } else {
      // Add like
      setLikes([...likes, userId]);
    }
  }

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    // Implement your comment submission logic here
    try {
      const response = await axios.put(
        `http://localhost:5001/api/posts/${post._id}`,
        {
          ...post,
          comments: [
            {
              user: profile._id,
              comment,
            },
            ...post.comments,
          ],
        }
      );
      handlePostComment({
        ...post,
        comments: [
          {
            user: profile,
            comment,
          },
          ...post.comments,
        ],
      });
      setComment('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div
      data-testid="post-component"
      className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md mb-4"
    >
      {/* Post Header */}
      <div className="flex items-center p-4">
        <img
          src={post?.user?.profilePic ? post?.user?.profilePic : Profileimage}
          alt={post?.user?.firstName}
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <p className="font-semibold">
            {post?.user?.firstName + ' ' + post?.user?.lastName}
          </p>
          <p className="text-gray-500 text-sm">{post?.createdAt}</p>
        </div>
      </div>

      {/* Post Content */}
      <p className="p-4 text-gray-800">{post?.content}</p>

      {/* Post Image */}
      {post?.image && (
        <img
          src={post?.image}
          alt="Post"
          className="w-full object-cover"
          style={{ height: '200px' }}
        />
      )}

      {/* Comment Section */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">Comments</h2>

        {/* Render comments */}
        {post?.comments?.map((comment, index) => (
          <div key={index} className="mb-2">
            <p className="font-semibold">
              {comment?.user?.firstName + ' ' + comment?.user?.lastName}
            </p>
            <p>{comment?.comment}</p>
          </div>
        ))}

        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className="mt-2">
          <input
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <button
            type="submit"
            className="mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-300"
          >
            Comment
          </button>
        </form>

        {/* Like Button */}
      <div className="p-4">
        <button onClick={handleLike} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-300">
          {likes.includes(profile._id) ? 'Unlike' : 'Like'} {/* Toggle button text */}
        </button>
        <span>{likes.length} likes</span> {/* Display the number of likes */}
      </div>
      </div>
    </div>
  );
};

export default PostComponent;
