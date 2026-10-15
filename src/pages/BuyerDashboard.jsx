import BuyerLayout from "../components/layout/BuyerLayout";
import WelcomeHeader from "../components/dashboard/WelcomeHeader";
import SummaryCard from "../components/dashboard/SummaryCard";
import FeaturedProduct from "../components/dashboard/FeaturedProduct";
import RecentActivity from "../components/dashboard/RecentActivity";

export default function BuyerDashboard() {
  return (
    <BuyerLayout>
      <WelcomeHeader name="Richie" />
      <SummaryCard />
      <FeaturedProduct />
      <RecentActivity />
    </BuyerLayout>
  );
}
