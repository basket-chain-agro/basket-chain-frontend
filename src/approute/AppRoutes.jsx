import { Routes, Route } from "react-router-dom";
import BuyerDashboard from "../pages/BuyerDashboard";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login"
import BuyerRegistration from "../components/buyer-registration";
import BuyerLogin from "../components/buyer-login";
import { ROUTES } from "../constants/routes";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<LandingPage />} />
      <Route path={ROUTES.dashboard} element={<BuyerDashboard />} />
      <Route path={ROUTES.login} element={<BuyerLogin />} />
      <Route path={ROUTES.register} element={<BuyerRegistration />} />
      <Route path="/login" element={<BuyerLogin />} />
      <Route path="/register" element={<BuyerRegistration />} />
      <Route path="/marketplace" element={<BuyerDashboard />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/Login" caseSensitive element={<Login />} />
      <Route path="/Buyerform" element={<BuyerRegistration />} />
      <Route path="/Loginform" element={<BuyerLogin />} />
    </Routes>
  );
}
