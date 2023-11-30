import React, { useState } from "react";
import "./Post.css";
import ProfileImage from "../Images/profilepic1.jpeg";
import LikeIcon from "../Images/like.png";
import CommentIcon from "../Images/speech-bubble.png";
import Shareicon from "../Images/share.png";
import Moreoption from "../Images/more.png";
import anotherlikeicon from "../Images/setLike.png";


function Post() {
    const [postData, setPostData] = useState({ title: '', content: '' });

    // Function to call the API to create a new post
    async function createPost(postData) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });
        return response.json();
    }

    // Form submission handler
    const handleSubmit = async (event) => {
        event.preventDefault();
        const newPost = await createPost(postData);
        // Handle the response (e.g., display a message, clear the form)
    };

    // Form rendering and other logic
    // ...
}

export default Post;
