const Post = require('../models/post'); // Adjust the path based on your project structure

const postController = {
  // Create a new post
  createPost: async (req, res) => {
    try {
      const newPost = await Post.create(req.body);
      res.status(201).json(newPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Get all posts
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.find()
        .populate('user')
        .populate('comments.user');
      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Get a specific post by ID
  getPostById: async (req, res) => {
    const postId = req.params.id;
    try {
      const post = await Post.findById(postId).populate('user', 'username');
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Update a post by ID
  updatePost: async (req, res) => {
    const postId = req.params.id;
    try {
      const updatedPost = await Post.findByIdAndUpdate(postId, req.body, {
        new: true,
      });
      if (!updatedPost) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.json(updatedPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Delete a post by ID
  deletePost: async (req, res) => {
    const postId = req.params.id;
    try {
      const deletedPost = await Post.findByIdAndDelete(postId);
      if (!deletedPost) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.json(deletedPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = postController;
