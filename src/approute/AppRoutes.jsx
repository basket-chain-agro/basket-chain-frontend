import { Routes, Route } from "react-router-dom";

import BuyerDashboard from "../pages/BuyerDashboard";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Buyerform from "../components/Buyerform";
import Loginform from "../components/Loginform";
import AdminDashboard from "../pages/AdminDashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<BuyerDashboard />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/Buyerform" element={<Buyerform />} />
      <Route path="/Loginform" element={<Loginform />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}
