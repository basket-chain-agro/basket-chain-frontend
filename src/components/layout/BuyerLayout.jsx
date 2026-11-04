import TopBar from "./TopBar";
import BuyerNav from "./BuyerNav";

export default function BuyerLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <BuyerNav />
      <div className="pb-20 md:pb-0 md:pl-16">
        <TopBar />
        <main className="p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
