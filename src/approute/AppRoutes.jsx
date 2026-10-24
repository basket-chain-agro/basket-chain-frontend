import { Routes, Route } from "react-router-dom";
import BuyerDashboard from "../pages/BuyerDashboard";
import Login from "../pages/Login"
import Buyerform from "../components/Buyerform";
import Loginform from "../components/Loginform";


export default function AppRoutes() {
  return (
    
    <Routes>
      
        <Route path="/Login" element={<Login/>} />
      <Route path="/" element={<BuyerDashboard />} />
      <Route path="/Buyerform" element={<Buyerform />} />
      <Route path="/Loginform" element={<Loginform />} />
    </Routes>
  );
}
