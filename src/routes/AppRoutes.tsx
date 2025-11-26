import { Routes, Route } from "react-router-dom";
import Home from "../pages/auth/Home";
import Login from "../pages/unauth/Login";
import Register from "../pages/unauth/Register";
import ForgotPassword from "../pages/unauth/ForgotPassword";
import ResetPassword from "../pages/unauth/ResetPassword";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Default Home Public */}
      <Route path="/" element={<Home />} />

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}
