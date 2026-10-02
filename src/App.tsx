import { Routes, Route, useLocation } from "react-router-dom";
import AuthLayout from "./features/auth/AuthLayout";
import LoginForm from "./features/auth/LoginForm";
import RegisterForm from "./features/auth/RegisterForm";
import EmailVerificationForm from "./features/auth/EmailVerificationForm";
import ResetForm from "./features/auth/ResetForm";
import ResetVerifyForm from "./features/auth/ResetVerifyForm";
import NewPasswordForm from "./features/auth/NewPasswordForm";
function App() {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/verify-email" element={<EmailVerificationForm />} />
        <Route path="/forgot-password" element={<ResetForm />} />
        <Route path="/forgot-password-verify" element={<ResetVerifyForm />} />
        <Route path="/reset-password" element={<NewPasswordForm />} />
      </Route>
    </Routes>
  );
}

export default App;
