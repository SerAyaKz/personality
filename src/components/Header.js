import { Link } from "react-router-dom";

const Header = ({}) => {
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
  const user = JSON.parse(localStorage.getItem("USER"));

  return (
    <div className="self-stretch bg-background flex flex-row py-5 px-[50px] items-center justify-between text-center text-13xl text-call-to-action font-h1-work-sans">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="w-[300px] h-[29px] shrink-0 flex flex-row items-center justify-start gap-[10px] cursor-pointer">
        {ACCESS_TOKEN ? 
        <img
        className="relative w-10 h-[40.38px] shrink-0 object-cover"
        alt=""
        src={user.photoURL}
      />
        : 
        <img
            className="relative w-10 h-[40.38px] shrink-0 object-cover"
            alt=""
            src="/avatar-placeholder6@2x.png"
          />
          }
          
          <div className="relative leading-[140%] font-semibold w-full text-white">
            {ACCESS_TOKEN ? `👋 ${user?.displayName}` : "👋 Enthusiast"}
          </div>
        </div>
      </Link>
      <div className="flex flex-row items-center justify-end gap-[10px] text-base text-text">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="rounded-xl h-[46px] flex flex-row py-0 px-5 box-border items-center justify-center gap-[12px]">
            <img
              className="relative w-5 h-5 shrink-0 hidden"
              alt=""
              src="/rocketlaunch.svg"
            />
            <div className="relative leading-[140%] font-semibold text-white">
              Homepage
            </div>
          </div>
        </Link>
        {ACCESS_TOKEN ? (
        <Link to="/list" style={{ textDecoration: "none" }}>
          <div className="rounded-xl h-[46px] flex flex-row py-0 px-5 box-border items-center justify-center gap-[12px] cursor-pointer">
            <img
              className="relative w-5 h-5 shrink-0 hidden"
              alt=""
              src="/rocketlaunch.svg"
            />
            <div className="relative leading-[140%] font-semibold text-white">
              CV Analysis
            </div>
          </div>
        </Link>
        ):(
          <div></div>
        )}
        {ACCESS_TOKEN ? (
          <div
            className="rounded-xl bg-call-to-action h-[60px] flex flex-row py-0 px-[30px] box-border items-center justify-center gap-[12px] cursor-pointer"
            onClick={() => {
              localStorage.removeItem("ACCESS_TOKEN");
              localStorage.removeItem("USER");
              window.location.href = "/";
            }}
          >
            <img
              className="relative w-5 h-5 shrink-0"
              alt=""
              src="/user1.svg"
            />
            <div className="relative leading-[140%] font-semibold text-white">
              Sign Out
            </div>
          </div>
        ) : (
          <Link to="/create-account" style={{ textDecoration: "none" }}>
            <div className="rounded-xl bg-call-to-action h-[60px] flex flex-row py-0 px-[30px] box-border items-center justify-center gap-[12px] cursor-pointer">
              <img
                className="relative w-5 h-5 shrink-0"
                alt=""
                src="/user1.svg"
              />
              <div className="relative leading-[140%] font-semibold text-white">
                Sign Up
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
