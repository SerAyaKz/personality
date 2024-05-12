import DataContainer from "./DataContainer";

const HowItWorksContainer = () => {
  return (
    <div className="self-stretch bg-background flex flex-col py-20 px-[195px] items-center justify-start gap-[48px] text-left text-19xl text-text font-h1-work-sans">
      <div className="flex flex-col items-start justify-start gap-[10px]">
        <div className="relative leading-[120%] capitalize font-semibold inline-block w-[1050px]">
          How it works
        </div>
        <div className="relative text-3xl leading-[160%] capitalize inline-block w-[1050px]">
          Find out how to get started
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[30px] text-center text-3xl">
        
      <DataContainer
          icon="/icon.svg"
          setupYourWallet="Real-Time Update Schedule: Keeping You Ahead Always"
          setUpYourWalletOfChoiceCo="Unlock unparalleled sophistication as OpenAI algorithms meticulously analyze candidate data, enriching profiles for strategic hiring decisions."
          propFlex="unset"
          propWidth="280px"
          propFlexShrink="0"
        />
        <DataContainer
          icon="/icon.svg"
          setupYourWallet="OpenAI Brilliance: Unprecedented level of sophistication"
          setUpYourWalletOfChoiceCo="Unlock unparalleled sophistication as OpenAI algorithms meticulously analyze candidate data, enriching profiles for strategic hiring decisions."
        />
       
        <DataContainer
          icon="/icon.svg"
          setupYourWallet="Effortless Integration: Streamlined Workflow Mastery          "
          setUpYourWalletOfChoiceCo="Effortlessly integrate candidate data with PersonaPerfect through user-friendly Airtable forms and automated CV-to-JSON conversion, streamlining the data processing journey for HR specialists."
          propFlex="unset"
          propWidth="330px"
          propFlexShrink="0"
        />
      </div>
    </div>
  );
};

export default HowItWorksContainer;
