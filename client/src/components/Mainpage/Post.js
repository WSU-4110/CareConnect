import React, { useState } from "react";
import "./Post.css";
import ProfileImage from "../Images/profilepic1.jpeg";
import LikeIcon from "../Images/like.png";
import CommentIcon from "../Images/speech-bubble.png";
import Shareicon from "../Images/share.png";
import Moreoption from "../Images/more.png";
import anotherlikeicon from "../Images/setLike.png";

export const handleLike = (like, setLike, setCount) => {
  if (like === LikeIcon) {
    setLike(anotherlikeicon);
    setCount((prevCount) => prevCount + 1);
  } else {
    setLike(LikeIcon);
    setCount((prevCount) => prevCount - 1);
  }
};

export const addComments = (Comments, setComments, comment) => {
  const newComment = {
    id: "4a4232342cs41312419012834",
    username: "user1",
    title: comment
  };
  setComments([...Comments, newComment]);
};

export default function Post() {
  const [Like, setLike] = useState(LikeIcon);
  const [count, setCount] = useState(0);
  const [Comments, setComments] = useState([]);
  const [commentwriting, setCommentwriting] = useState('');
  const [show, setShow] = useState(false);

  const handleComment = () => {
    addComments(Comments, setComments, commentwriting);
    setCommentwriting('');
  };

  const toggleComments = () => {
    setShow(!show);
  }

  return (
    <div className='PostContainer'>
      <div className='SubPostContainer'>
        <div>
          <div style={{ display: 'flex', alignItems: "center" }}>
            <img src={ProfileImage} className="PostImage" alt="" />
            <div>
              <p style={{ marginLeft: '5px', textAlign: "start" }}>Chris</p>
              <p style={{ fontSize: "11px", textAlign: "start", marginLeft: 5, marginTop: -13, color: "#aaa" }}>Following by User1</p>
            </div>
            <img src={Moreoption} className="moreicons" alt="" />
          </div>
          <div>
            <p style={{ textAlign: "start", marginLeft: 10, width: "96%" }}>Hey everyone! First post on here!</p>
            <img src={ProfileImage} className="PostImages" alt="" />
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", marginLeft: "10px" }}>
              <div style={{ display: 'flex', alignItems: "center", cursor: "pointer" }}>
              <img src={Like} className="iconsforPost" onClick={() => handleLike(Like, setLike, setCount)} alt="Like" data-testid="like-button" />
      <p data-testid="like-count">{count} likes</p>
      {/* ... */}
              </div>
              <div data-testid="comment-section">
                <input type="text" className="commentinput" placeholder="write your comment" value={commentwriting} onChange={(e) => setCommentwriting(e.target.value)} data-testid="comment-input" />
                <button className="addCommentbtn" onClick={handleComment} data-testid="add-comment-button">Comment</button>
                {/* Comments map */}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: "center", marginLeft: "160px", cursor: "pointer" }}>
              <img src={Shareicon} className="iconsforPost" alt="" />
              <p style={{ marginLeft: "6px" }}>Share</p>
            </div>
          </div>
          {show === true ?
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={ProfileImage} className="PostImage" alt="" />
                <input type="text" className="commentinput" placeholder="write your comment" onChange={(e) => setCommentwriting(e.target.value)} />
                <button className="addCommentbtn" onClick={handleComment}>Comment</button>
              </div>
              {Comments.map((item) => (
                <div style={{ alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={ProfileImage} className="PostImage" alt="" />

                    <p style={{ marginLeft: "6px", fontSize: 18, marginTop: 6 }}>{item.username}</p>
                  </div>
                  <p style={{ marginLeft: "58px", textAlign: "start", marginTop: -13 }}>{item.title}</p>
                  <p style={{ marginLeft: "58px", textAlign: 'start', marginTop: -10, color: "#aaa", fontSize: 11 }}>Reply</p>
                </div>
              ))}
            </div> : ''
          }
        </div>
      </div>
    </div>
  );
}
