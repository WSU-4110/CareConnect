import React, { useState } from "react";
import "./Post.css";
import ProfileImage from "../Images/profilepic1.jpeg";
import LikeIcon from "../Images/like.png";
import CommentIcon from "../Images/speech-bubble.png";
import Shareicon from "../Images/share.png";
import Moreoption from "../Images/more.png";
import anotherlikeicon from "../Images/setLike.png";

export default function Post() {
  const [Like, setLike] = useState(LikeIcon);
  const [count, setCount] = useState('0');
  const [Comments, setComments] = useState([]);
  const [commentwriting, setCommentwriting] = useState('');
  const [show, setshow] = useState(false);

  const handleLike = () => {
    if (Like === LikeIcon) {
      setLike(anotherlikeicon);
      setCount(count + 1);
    } else {
      setLike(LikeIcon);
      setCount(count - 1);
    }
  }

  const addComments = () => {
    const comments = {
      id: "4a4232342cs41312419012834",
      username: "user1",
      title: `${commentwriting}`
    };
    setComments(Comments.concat(comments));
  }

  const handleComment = () => {
    addComments();
  }

  console.log(Comments);

  const handleshow = () => {
    if (show === false) {
      setshow(true);
    } else {
      setshow(false);
    }
  }

  return (
    <div className='PostContainer'>
      <div className='SubPostContainer'>
        <div>
          <div style={{ display: 'flex', alignItems: "center" }}>
            <img src={`${ProfileImage}`} className="PostImage" alt="" />
            <div>
              <p style={{ marginLeft: '5px', textAlign: "start" }}>Chris</p>
              <p style={{ fontSize: "11px", textAlign: "start", marginLeft: 5, marginTop: -13, color: "#aaa" }}>Following by User1</p>
            </div>
            <img src={`${Moreoption}`} className="moreicons" alt="" />
          </div>
          <div>
            <p style={{ textAlign: "start", marginLeft: 10, width: "96%" }}>Hey everyone! First post on here!</p>
            <img src={`${ProfileImage}`} className="PostImages" alt="" />
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", marginLeft: "10px" }}>
              <div style={{ display: 'flex', alignItems: "center", cursor: "pointer" }}>
                <img src={`${Like}`} className="iconsforPost" onClick={handleLike} alt="" />
                <p style={{ marginLeft: "6px" }}>{count} likes </p>
              </div>
              <div style={{ display: 'flex', alignItems: "center", marginLeft: "20px", cursor: "pointer" }}>
                <img src={`${CommentIcon}`} className="iconsforPost" onClick={handleshow} alt="" />
                <p style={{ marginLeft: "6px" }}>100k comments</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: "center", marginLeft: "160px", cursor: "pointer" }}>
              <img src={`${Shareicon}`} className="iconsforPost" alt="" />
              <p style={{ marginLeft: "6px" }}>Share</p>
            </div>
          </div>
          {show === true ?
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={`${ProfileImage}`} className="PostImage" alt="" />
                <input type="text" className="commentinput" placeholder="write your comment" onChange={(e) => setCommentwriting(e.target.value)} />
                <button className="addCommentbtn" onClick={handleComment}>Comment</button>
              </div>
              {Comments.map((item) => (
                <div style={{ alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={`${ProfileImage}`} className="PostImage" alt="" />
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
