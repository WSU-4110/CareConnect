import { Route, Routes } from "react-router-dom";
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
import ChangePassword from "./components/ChangePassword";
import Appointment from "./Pages/Appointment/Appointment/Appointment";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {/* Conditional route: if there's a user, go to Main; if not, to LandingPage */}
      <Route path="/" element={user ? <Main /> : <LandingPage />} />
      {/* Remove the duplicate route for "/" that redirects to "/landing" */}
      
      {/* Other routes */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
      <Route path="/viewProfile" element={<ViewProfile />} />
      <Route path="/editProfile" element={<EditProfile />} /> 
      <Route path="/Home" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/appointment" element={<Appointment />} />
    </Routes>
  );
}

export default App;
