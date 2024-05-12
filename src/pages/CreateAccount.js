import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CreateAccountSection from "../components/CreateAccountSection";
import Footer from "../components/Footer";

const CreateAccount = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated by looking at localStorage
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

    // If there is user data, consider the user as authenticated
    if (ACCESS_TOKEN) {
      navigate("/");
    }
  }, []);

  return (
    <div className="relative bg-background w-full h-[969px] flex flex-col pt-0 px-0 pb-[152px] box-border items-start justify-start">
      <Header />
      <CreateAccountSection />
      <Footer />
    </div>
  );
};

export default CreateAccount;
