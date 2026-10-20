import { Routes, Route } from "react-router-dom";
import BuyerDashboard from "../pages/BuyerDashboard";
import Login from "../pages/Login"

export default function AppRoutes() {
  return (
    
    <Routes>
      
        <Route path="/Login" element={<Login/>} />
      <Route path="/" element={<BuyerDashboard />} />
    </Routes>
  );
}
