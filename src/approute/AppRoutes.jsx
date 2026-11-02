import { Routes, Route } from "react-router-dom";
import Buyerform from "../components/Buyerform";
import Loginform from "../components/Loginform"
import Requestspage from "../components/Requestspage"

export default function AppRoutes() {
  return (
    
    <Routes>
      
        <Route path="/Login" element={<Login/>} />
      <Route path="/" element={<BuyerDashboard />} />
    </Routes>
  );
}
