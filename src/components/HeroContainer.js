import { Link } from "react-router-dom";

const HeroContainer = () => {
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[30px] text-left text-48xl text-text font-h1-work-sans">
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <div className="flex-1 relative leading-[110%] capitalize font-semibold flex items-center w-[510px]">
        Discover the power of Automation
        </div>
        <div className="self-stretch relative text-3xl leading-[160%] capitalize">
          Sumer uses machine learning to analyze a person's resume and generate
          insights into their personality traits.
        </div>
      </div>
      
      <div>
    {ACCESS_TOKEN ? (
      <Link to="/list" style={{ textDecoration: 'none' }}>
        <div className="rounded-xl bg-call-to-action h-[60px] shrink-0 flex flex-row py-0 px-[50px] box-border items-center justify-center gap-[12px] cursor-pointer text-center text-base no-underline">
          <img className="relative w-5 h-5 shrink-0" alt="" src="/rocketlaunch.svg" />
          <div className="relative leading-[140%] font-semibold text-white">Go to List</div>
        </div>
      </Link>
    ) : (
      <Link to="/create-account" style={{ textDecoration: 'none' }}>
        <div className="rounded-xl bg-call-to-action h-[60px] shrink-0 flex flex-row py-0 px-[50px] box-border items-center justify-center gap-[12px] cursor-pointer text-center text-base no-underline">
          <img className="relative w-5 h-5 shrink-0" alt="" src="/rocketlaunch.svg" />
          <div className="relative leading-[140%] font-semibold text-white">Get Started</div>
        </div>
      </Link>
    )}
  </div>
      <div className="self-stretch rounded-xl flex flex-row items-start justify-start gap-[30px] text-9xl font-h5-space-mono">
        <div className="flex-1 rounded-xl flex flex-col items-start justify-start">
          <b className="self-stretch relative leading-[140%] capitalize">{`1k+ `}</b>
          <div className="self-stretch relative text-[23.99px] leading-[160%] capitalize font-h1-work-sans">
            Clients
          </div>
        </div>
        <div className="flex-1 rounded-xl flex flex-col items-start justify-start">
          <b className="self-stretch relative leading-[140%] capitalize">
          24/7
          </b>
          <div className="self-stretch relative text-[23.99px] leading-[160%] capitalize font-h1-work-sans">
          Support
          </div>
        </div>
        <div className="flex-1 rounded-xl flex flex-col items-start justify-start">
          <b className="self-stretch relative leading-[140%] capitalize">
            15 min
          </b>
          <div className="self-stretch relative text-[23.99px] leading-[160%] capitalize font-h1-work-sans">
            Schedule
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
