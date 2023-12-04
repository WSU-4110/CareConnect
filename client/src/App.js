import { Route, Routes, Navigate } from "react-router-dom";
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
import { Toaster } from 'react-hot-toast';
import MainHome from "./components/MainHome"; // Remove duplicate import

function App() {
  const user = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");

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
        {user && <Route path="/MainHome" exact element={<MainHome />} />}
      </Routes>
    </>
  );
}

export default App;
