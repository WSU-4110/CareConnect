const router = require("express").Router();
const Post = require("../models/post");
const User = require("../models/user");
const Token = require("../models/token");

// Create Post
router.post("/user/post", async (req, res) => {
    try {
        let { title, image, video, userID } = req.body;
        let newpost = new Post({ title, image, video, user: userID });
        const post = await newpost.save();
        res.status(200).json(post);
    } catch (error) {
        console.log(error)
        res.status(500).json("Internal error occurred");
    }
});

// Get posts by a user
router.get("/get/post/:id", async (req, res) => {
    try {
        const mypost = await Post.find({ user: req.params.id });
        if (!mypost) {
            return res.status(200).json("You don't have any post");
        }
        res.status(200).json(mypost);
        console.log
    } catch (error) {
        console.log(error)
        res.status(500).json("Internal server error");
    }
});

// Update user post
router.put("/update/post/:id", async (req, res) => {
    try {
        let post = await Post.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json("Internal error occurred");
    }
});

// Like a post
router.put("/:id/like", async (req, res) => {
    const userId = req.body.userId; // Assuming user ID is passed in request body
    try {
        const post = await Post.findById(req.params.id);
        // ... Logic for liking the post using userId
        // Remember to handle the logic based on your application's need
        res.status(200).json("Post has been liked");
    } catch (error) {
        res.status(500).json("Internal server error");
    }
});

// Dislike a post
router.put("/:id/dislike", async (req, res) => {
    const userId = req.body.userId; // Assuming user ID is passed in request body
    try {
        const post = await Post.findById(req.params.id);
        // ... Logic for disliking the post using userId
        // Remember to handle the logic based on your application's need
        res.status(200).json("Post has been disliked");
    } catch (error) {
        res.status(500).json("Internal server error");
    }
});

// Comment on a post
router.put("/comment/post", async (req, res) => {
    const { comment, postid, profile, userId } = req.body;
    try {
        const post = await Post.findById(postid);
        post.comments.push({ user: userId, comment, profile });
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json("Internal server error");
    }
});

// Delete post
router.delete("/delete/post/:id", async (req, res) => {
    // This route is risky without authentication; consider keeping it protected
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Your post has been deleted");
    } catch (error) {
        res.status(500).json("Internal server error");
    }
});


module.exports = router;
