import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import Cycle from "../components/cycle/Cycle";
import { TrustVerification } from "../components/trust/TrustVerification";
import { HowitWorks } from "../components/howitworks/HowitWorks";
import { SupplyChain } from "../components/supply/SupplyChain";
import Footer from "../components/footer/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Cycle />
        <TrustVerification />
        <div id="how-it-works">
          <HowitWorks />
        </div>
        <SupplyChain />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
