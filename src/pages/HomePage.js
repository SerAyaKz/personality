import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import HowItWorksContainer from "../components/HowItWorksContainer";
import Footer from "../components/Footer";

const HomePage = () => {
 

  return (
    <div className="relative bg-background w-full flex flex-col items-start justify-start">
      <Header/>
      <HeroSection />
      <HowItWorksContainer />
      <Footer />
    </div>
  );
};

export default HomePage;
