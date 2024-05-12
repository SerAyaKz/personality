import Header from "../components/Header";
import Info from "../components/Info";
import Chart from "../components/Chart";
import Footer from "../components/Footer";
import base from "../helper/airtable";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CVAnalysis = () => {
  const { applicant_id } = useParams();
  const [applicant, setApplicant] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      base("Response").find(applicant_id, function (err, record) {
        if (err) {
          console.error(err);
          return;
        }
        setApplicant(record.fields);
       
        console.log("Retrieved", record.id);
      });
    };
    fetchData();
    
  }, []);

  return (
    <div className="relative bg-background w-full flex flex-col items-start justify-start">
      <Header />
      {applicant && applicant["Summary"] ? (
        <div>
         {applicant &&  <Info {...applicant} />}
          {applicant && <Chart {...applicant} />}
        </div>
      ) : (
        <div className="self-stretch bg-background flex flex-row items-center justify-start gap-[60px] text-left text-32xl text-text font-h1-work-sans">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image-placeholder5@2x.png"
          />
          <div className="flex-1 relative leading-[110%] capitalize font-semibold flex items-center w-[510px]">
            "Undergoing Inspection Process! Kindly Await, Please!"
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default CVAnalysis;
