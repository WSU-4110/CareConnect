import { Route, Routes, Navigate } from "react-router-dom";
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
import Profile from "./components/Profilepage/Profile";
import Appointment from './Pages/Appointment/Appointment/Appointment';
import FeedbackForm from './components/FeedbackForm';
import AdminDashboard from './components/AdminDashboard'; // Import the AdminDashboard component
import DiscussionThreads from './components/DiscussionThreads/DiscussionThreads';
import DiscussionThread from './components/DiscussionThreads/DiscussionThread';
import ResourceLibraryPage from './components/ResourceLibrary/ResourceLibraryPage';
import VideosPage from './components/ResourceLibrary/VideosPage';
import ArticlesPage from './components/ResourceLibrary/ArticlesPage';
import OtherResourcesPage from './components/ResourceLibrary/OtherResourcesPage';
import AboutUs from './components/About/AboutUs';

function App() {
  const user = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");

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
      <Route path="/feedbackForm" element={<FeedbackForm />} />
      <Route path="/appointment" element={<Appointment />} />
      {isAdmin && <Route path="/AdminDashboard" element={<AdminDashboard />} />}
      <Route path="/Profile/:id" element= {<Profile/>} />
      <Route path="/resource-library" element={<ResourceLibraryPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/other-resources" element={<OtherResourcesPage />} />
          <Route path="/about-us" element={<AboutUs />} />
        <Route path="/discussion-threads" element={<DiscussionThreads discussionThreads={discussionThreads} setDiscussionThreads={setDiscussionThreads}/>}/>
        <Route path="/discussion-threads/:threadId" element={<DiscussionThread discussionThreads={discussionThreads} setDiscussionThreads={setDiscussionThreads}/>}/> 
      
    </Routes>
    
    
  );
}

export default App;