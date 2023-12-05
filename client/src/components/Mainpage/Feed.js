// Feed.js
import React, { useEffect, useState } from 'react';
import searchIcon from '../Images/search.png';
import PostComponent from './PostComponent';
import CreatePost from './CreatePost';
import "./Feed.css";

const Feed = ({ axios, profile }) => {
  const [posts, setPosts] = useState([]);
  const [serchedPosts, setSerchedPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from your server
    axios
      ?.get(`http://localhost:5001/api/posts`)
      .then((response) => setPosts(response.data.reverse()))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);
  const handlePostCreated = (newPost) => {
    // Add the new post to the existing posts
    setPosts([newPost, ...posts]);
  };
  const handlePostComment = (post) => {
    // Add the new post to the existing posts
    setPosts(
      posts.map((item) => {
        if (item._id === post._id) {
          return post;
        } else {
          return item;
        }
      })
    );
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    if (query === '') {
      setSerchedPosts([]);
      setSearchText('');
    } else {
      // Filter users based on firstName or lastName containing the query
      const filteredPosts = posts.filter(
        (post) =>
          post.content.toLowerCase().includes(query) ||
          post.user.firstName.toLowerCase().includes(query) ||
          post.user.lastName.toLowerCase().includes(query)
      );

      setSerchedPosts(filteredPosts);
      setSearchText(e.target.value);
    }
  };

  console.log('posts', posts);
  return (
    <div data-testid="feed" className="container mx-auto px-3 mt-8">
      {/* CreatePost component at the top */}
      <CreatePost
        axios={axios}
        onPostCreated={handlePostCreated}
        profile={profile}
      />

      

      {/* Render posts using PostComponent */}
      {serchedPosts.length > 0
        ? serchedPosts.map((post) => (
            <PostComponent
              axios={axios}
              key={post._id}
              post={post}
              profile={profile}
              handlePostComment={handlePostComment}
            />
          ))
        : posts.map((post) => (
            <PostComponent
              axios={axios}
              key={post._id}
              post={post}
              profile={profile}
              handlePostComment={handlePostComment}
            />
          ))}
    </div>
  );
};

export default Feed;
