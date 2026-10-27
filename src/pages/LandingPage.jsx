import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        
      </main>
    </div>
  );
};

export default LandingPage;
