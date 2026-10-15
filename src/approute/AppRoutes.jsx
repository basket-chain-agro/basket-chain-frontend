import { Routes, Route } from "react-router-dom";
import BuyerDashboard from "../pages/BuyerDashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BuyerDashboard />} />
    </Routes>
  );
}
