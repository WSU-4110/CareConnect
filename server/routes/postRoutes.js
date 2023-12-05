const express = require('express');
const postController = require('../controllers/postController'); // Adjust the path based on your project structure

const router = express.Router();

// Routes for the Post model
router.post('/posts', postController.createPost);
router.get('/posts', postController.getAllPosts);
router.get('/posts/:id', postController.getPostById);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

module.exports = router;
