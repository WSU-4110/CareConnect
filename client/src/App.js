import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import EmailVerify from "./components/EmailVerify";
import ForgotPassword from "./components/ForgotPassword";
import PasswordReset from "./components/PasswordReset";
import LandingPage from "./components/LandingPage";
import ViewProfile from "./components/ViewProfile";
import EditProfile from "./components/EditProfile";
import FeedbackForm from "./components/FeedbackForm";
import ChangePassword from "./components/ChangePassword";
import Appointment from "./Pages/Appointment/Appointment/Appointment";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {/* Use a nested route to handle the common part */}
      <Route
        path="/"
        element={
          <>
            {user ? (
              <Route path="/" element={<Main />} />
            ) : (
              <Route path="/" element={<LandingPage />} />
            )}
          </>
        }
      />

      {/* Other routes */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
      <Route path="/viewProfile" element={<ViewProfile />} />
      <Route path="/editProfile" element={<EditProfile />} />
      <Route path="/feedbackForm" element={<FeedbackForm />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/appointment" element={<Appointment />} />
    </Routes>
  );
}

export default App;
