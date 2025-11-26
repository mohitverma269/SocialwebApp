import { Routes, Route } from "react-router-dom";

import Splash from "../pages/unauth/Splash";


import Login from "../pages/unauth/Login";
import Register from "../pages/unauth/Register";
import ForgotPassword from "../pages/unauth/ForgotPassword";
import ResetPassword from "../pages/unauth/ResetPassword";

import Home from "../pages/auth/Home";

export default function AppRoutes() {
  return (
    <Routes>
      {/* UnAuth */}
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Auth */}
      <Route path="/home" element={<Home />} />
      {/* <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      /> */}
    </Routes>
  );
}
