require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const passwordResetRoutes = require("./routes/passwordReset");
const postRouter = require("./routes/post")




// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/password-reset", passwordResetRoutes);
app.use("/api/Post", postRouter)
app.post('/api/posts', async (req, res) => {
    try {
        const newPost = new Post(req.body);
        await newPost.save();
        res.status(201).send(newPost);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/api/posts', async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).send(posts);
    } catch (error) {
        res.status(500).send(error);
    }
});

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));