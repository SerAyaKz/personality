import HeroContainer from "./HeroContainer";
import HeroImage from "./HeroImage";

const HeroSection = () => {
  return (
    <div className="self-stretch bg-background flex flex-row py-20 px-[195px] items-center justify-center text-left text-48xl text-text font-h1-work-sans">
      <div className="w-[1050px] shrink-0 flex flex-row items-start justify-start gap-[30px]">
        <HeroContainer />
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroSection;
