import React, { useState, useEffect, useContext } from 'react';
import "./Contentpost.css"
import profilepic from "../Images/Profilepic.png"
import imageicon from "../Images/gallery.png"
import emojiicon from "../Images/cat-face.png"
import videoicon from "../Images/video.png"
import axios from 'axios';

const Contentpost = () => {
    const [postData, setPostData] = useState({ title: '', content: '' });
    const [postContent, setPostContent] = useState(''); // Define postContent state
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);

    
        // Function to call the API to create a new post
        async function createPost(postData) {
            const response = await fetch('http://localhost:8080/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });
            if (!response.ok) {
                const errorDetails = await response.json();
                console.error('Error creating post:', errorDetails);
                // Handle the error in your UI as appropriate
            }
        
            return response.json();
        }

        
    
        const handleSubmit = async (event) => {
            event.preventDefault();
            const formData = new FormData();
            formData.append('title', postData.title);
            formData.append('content', postContent);
            if (image) formData.append('image', image);
            if (video) formData.append('video', video);
        
            const response = await fetch('http://localhost:8080/api/users', {
                method: 'POST',
                body: formData // No need to set 'Content-Type' header, as FormData does it
            });
        
            if (response.ok) {
                const newPost = await response.json();
                console.log(newPost);
                // Additional logic for handling the response
            } else {
                // Handle errors
                console.error('Error submitting post');
            }
        };
        
    
    
     {
        return(
            <div className='ContentUploadContainer'>
            <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
                <img src={`${profilepic}`} className="profileimage" alt="" />
                    <input
                        type="text"
                        className='contentWritingpart'
                        placeholder='Write your real thought.....'
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                    />
                </div>
                <div style={{ display: "flex", marginLeft: "10px" }}>
                <div style={{ display: "flex", marginLeft: "10px" }}>
            <div>
                {/* Image upload icon */}
                <label htmlFor="image-upload">
                    <img src={`${imageicon}`} className="icons" alt="Upload Image" style={{ cursor: 'pointer' }} />
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
                    <img src={`${videoicon}`} className="icons" alt="Upload Video" style={{ cursor: 'pointer' }} />
                </label>
                <input 
                    id="video-upload"
                    type="file" 
                    accept="video/*" 
                    style={{ display: 'none' }}
                    onChange={(e) => setVideo(e.target.files[0])}
                />

                <img src={`${emojiicon}`} className="icons" alt="" />
                <button style={{ marginLeft: "280px", paddingLeft: "20px", paddingRight: "20px", marginBottom: "10px", border: "none" }} onClick={handleSubmit}>Post</button>
            </div>
        </div>
        </div>
            
        
    
            
            </div>
        )
    }
}

export default Contentpost;