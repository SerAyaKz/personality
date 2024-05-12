import { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const CreateAccountSection = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const [user, setUser] = useState("");

  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser({ name: result.user.displayName, email: result.user.email });
        localStorage.setItem("USER", JSON.stringify(user));
        localStorage.setItem("ACCESS_TOKEN", token);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="self-stretch bg-background flex flex-row items-center justify-start gap-[60px] text-left text-32xl text-text font-h1-work-sans">
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image-placeholder10@2x.png"
      />
      <div className="flex-1 flex flex-col py-[100px] px-0 items-start justify-start gap-[40px]">
        <div className="w-[460px] flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[110%] capitalize font-semibold">
                Sign Up
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-3xl">
              <div className="self-stretch relative leading-[160%] capitalize">
                Unlock your full potential with just a few clicks - Create
                Profile today!
              </div>
            </div>
          </div>
        </div>
        <div className="w-[330px] flex flex-col items-start justify-start gap-[30px] text-base text-background">
          <div className="self-stretch rounded-xl bg-call-to-action h-[46px] shrink-0 flex flex-row py-0 px-[50px] box-border items-center justify-center gap-[12px] text-center text-text">
            <img
              className="relative w-5 h-5 shrink-0 hidden"
              alt=""
              src="/rocketlaunch1.svg"
            />
            <div
              className="relative leading-[140%] font-semibold"
              onClick={googleLogin}
            >
              Create account
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountSection;
