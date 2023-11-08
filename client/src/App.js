import { Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from 'react';
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import EmailVerify from "./components/EmailVerify";
import ForgotPassword from "./components/ForgotPassword";
import PasswordReset from "./components/PasswordReset";
import LandingPage from "./components/LandingPage"; // Import your LandingPage component
import ViewProfile from "./components/ViewProfile"; // Import ViewProfile component
import EditProfile from "./components/EditProfile";
import Home from "../src/components/Home";
import DiscussionThreads from './components/DiscussionThreads/DiscussionThreads';
import DiscussionThread from './components/DiscussionThreads/DiscussionThread';
import Profile from "./components/Profilepage/Profile";

function App() {
  const user = localStorage.getItem("token");
  const [discussionThreads, setDiscussionThreads] = useState([
    {
      id: 1,
      title: ' How can I avoid stressful situations in life? ',
      comments: [],
      likes: 0,
    },
    {
      id: 2,
      title: ' CareConnect Community ',
      comments: [],
      likes: 1,
    },
  ]);


  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/landing" exact element={<LandingPage />} /> {/* Add a route for the landing page */}
      <Route path="/" element={<Navigate replace to="/landing" />} />
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
      <Route path="/viewProfile" element={<ViewProfile />} />
      <Route path="/editProfile" element={<EditProfile />} /> 
      <Route path="/Home" element={<Home/>} />
      <Route path="/Profile" element= {<Profile/>} />
      <Route path="/discussion-threads" element={<DiscussionThreads discussionThreads={discussionThreads} setDiscussionThreads={setDiscussionThreads}/>}/>
      <Route path="/discussion-threads/:threadId"element={<DiscussionThread discussionThreads={discussionThreads} setDiscussionThreads={setDiscussionThreads}/>}/>    </Routes>
    
    
  );
}

export default App;
