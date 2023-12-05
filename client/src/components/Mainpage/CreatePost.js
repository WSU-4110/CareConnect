// CreatePost.js
import React, { useState } from 'react';
import imageicon from '../Images/gallery.png';
import emojiicon from '../Images/cat-face.png';
import videoicon from '../Images/video.png';

const CreatePost = ({ axios, onPostCreated, profile }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:5001/api/posts`, {
        user: profile._id,
        content,
        image,
      });
      onPostCreated({ ...response.data, user: profile }); // Pass the new post to the parent component
      setContent('');
      setImage('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div
      data-testid="create-post"
      className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md mb-4"
    >
      <form onSubmit={handlePostSubmit} className="p-4">
        <textarea
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
          style={{ background: 'white' }}
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
          style={{ background: 'white' }}
        />

        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {/* Image upload icon */}
              <label htmlFor="image-upload">
                <img
                  src={`${imageicon}`}
                  className="icons"
                  alt="Upload Image"
                  style={{ cursor: 'pointer', marginTop: 0, marginLeft: 0 }}
                />
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => setImage(e.target.files[0])}
              />

              {/* Video upload icon */}
              <label htmlFor="video-upload">
                <img
                  src={`${videoicon}`}
                  className="icons"
                  alt="Upload Video"
                  style={{ cursor: 'pointer', marginTop: 0, marginLeft: 10 }}
                />
              </label>
              <input
                id="video-upload"
                type="file"
                accept="video/*"
                style={{ display: 'none' }}
                onChange={(e) => setVideo(e.target.files[0])}
              />

              <img
                src={`${emojiicon}`}
                className="icons ml-2"
                style={{ cursor: 'pointer', marginTop: 0, marginLeft: 10 }}
                alt=""
              />
            </div>
            <button
              type="submit"
              style={{
                border: 'none',
              }}
            >
              Post
            </button>
          </div>
        </div>

        {/* <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Post
        </button> */}
      </form>
    </div>
  );
};

export default CreatePost;
