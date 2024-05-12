import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import HeadlineSubhead from "../components/HeadlineSubhead";
import Rankings from "../components/Rankings";
import Footer from "../components/Footer";

const List = () => {
  return (
    <div className="relative bg-background w-full flex flex-col items-center justify-start">
      <Header />
      <HeadlineSubhead />
      <Rankings />
      <Footer />
    </div>
  );
};

export default List;
