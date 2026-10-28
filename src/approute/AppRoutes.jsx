import { Routes, Route } from "react-router-dom";

import BuyerDashboard from "../pages/BuyerDashboard";
import LandingPage from "../pages/LandingPage";
import AdminDashboard from "../pages/AdminDashboard";
import FarmerRegistration from "../pages/farmer-registration";
import BuyerForm from "../components/buyer-registration";
import BuyerLogin from "../components/buyer-login";
import { ROUTES } from "../constants/routes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/dashboard" element={<BuyerDashboard />} />
      <Route path="/marketplace" element={<BuyerDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path={ROUTES.home} element={<LandingPage />} />
      <Route path={ROUTES.dashboard} element={<BuyerDashboard />} />
      <Route path={ROUTES.login} element={<BuyerLogin />} />
      <Route path={ROUTES.register} element={<BuyerForm />} />
      <Route path="/buyer-login" element={<BuyerLogin />} />
      <Route path="/buyer-registration" element={<BuyerForm />} />
      <Route path="/login" element={<BuyerLogin />} />
      <Route path="/register" element={<BuyerForm />} />
      <Route path="/Login" caseSensitive element={<FarmerRegistration />} />
    </Routes>
  );
}
