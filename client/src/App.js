// Import necessary components and modules
import { Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from 'react';
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import EmailVerify from "./components/EmailVerify";
import ForgotPassword from "./components/ForgotPassword";
import PasswordReset from "./components/PasswordReset";
import LandingPage from "./components/LandingPage";
import ViewProfile from "./components/ViewProfile";
import EditProfile from "./components/EditProfile";
import Home from "./components/Home";
import Profile from "./components/Profilepage/Profile";
import Appointment from './Pages/Appointment/Appointment/Appointment';
import FeedbackForm from './components/FeedbackForm';
import AdminDashboard from './components/AdminDashboard';
import ChangePassword from "./components/ChangePassword";
import DiscussionThreads from './components/DiscussionThreads/DiscussionThreads';
import DiscussionThread from './components/DiscussionThreads/DiscussionThread';
import MainHome from "./components/MainHome";
import { Toaster } from 'react-hot-toast';

// Define the App component
function App() {
  const user = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");

  // Example: Declare discussionThreads state
  const [discussionThreads, setDiscussionThreads] = useState([]);

  return (
    <>
      <Toaster />
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/landing" exact element={<LandingPage />} />
        <Route path="/" element={<Navigate replace to="/landing" />} />
        <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
        <Route path="/viewProfile" element={<ViewProfile />} />
        <Route path="/editProfile" element={<EditProfile />} /> 
        <Route path="/Home" element={<Home />} />
        <Route path="/feedbackForm" element={<FeedbackForm />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/Profile" element={<Profile />} />
        {isAdmin && <Route path="/AdminDashboard" element={<AdminDashboard />} />}
        <Route path="/changePassword" element={<ChangePassword />} />
        {/* Pass discussionThreads and setDiscussionThreads to DiscussionThreads component */}
        <Route path="/discussion-threads" element={<DiscussionThreads discussionThreads={discussionThreads} setDiscussionThreads={setDiscussionThreads}/>}/>
        {/* Pass discussionThreads and setDiscussionThreads to DiscussionThread component */}
        <Route path="/discussion-threads/:threadId" element={<DiscussionThread discussionThreads={discussionThreads} setDiscussionThreads={setDiscussionThreads}/>}/> 
        {user && <Route path="/MainHome" exact element={<MainHome />} />}
      </Routes>
    </>
  );
}

// Export the App component
export default App;