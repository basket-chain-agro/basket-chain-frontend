import { Routes, Route } from "react-router-dom";
import BuyerDashboard from "../pages/BuyerDashboard";
import LandingPage from "../pages/LandingPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BuyerDashboard />} />
      <Route path="/home" element={<LandingPage />} />
    </Routes>
  );
}
