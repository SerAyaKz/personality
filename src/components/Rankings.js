import { useCallback, useState, useEffect } from "react";
import base from "../helper/airtable";
import { Link } from "react-router-dom";
const Rankings = () => {
  const [applicants, setApplicants] = useState([]);
  const formatCreatedTime = (createdTime) => {
    const date = new Date(createdTime);
    return date.toLocaleString(); 
  };
  useEffect(() => {
    base("Response")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setApplicants(records);
        fetchNextPage();
      });
  }, [applicants]);
  return (
    <div className="self-stretch bg-background flex flex-col py-10 px-0 items-center justify-start gap-[20px] text-center text-base text-caption-label-text font-h5-space-mono">
      <div className="rounded-xl box-border w-[1052px] h-12 shrink-0 flex flex-col py-3 px-0 items-center justify-start border-[1px] border-solid border-background-secondary">
        <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
          <div className="w-[430px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
            <div className="relative leading-[140%] inline-block w-[30px] shrink-0">
              #
            </div>
            <div className="relative leading-[140%] text-left">Title</div>
          </div>
          <div className="flex flex-row items-center justify-end gap-[20px] text-left">
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[140%]">Date</div>
            </div>
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[140%]">Status</div>
            </div>
          </div>
        </div>
      </div>
      {applicants?.map((applicant, index) => (
        <Link
          to={`/cv-analysis/${applicant.id}`}
          style={{ textDecoration: "none" }}
        >
          <div className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer">
            <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
              <div className="w-[430px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
                <div className="rounded-xl bg-background w-[30px] shrink-0 flex flex-row items-start justify-start relative">
                  <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0] text-white">
                    {applicant.fields.id}
                  </div>
                </div>
                <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h1-work-sans">
                  <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                    <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                      {applicant.fields["Full name"]} CV
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
                <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start text-green">
                  <div className="self-stretch relative leading-[140%]">
                    {formatCreatedTime(applicant.fields["Created time"])}
                  </div>
                </div>
                <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[140%]">
                    {applicant.fields["Summary"] ? "FiNISHED" : "IN CHECK"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Rankings;
