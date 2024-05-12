const Info = (applicant) => {
  const formatCreatedTime = (createdTime) => {
    const date = new Date(createdTime);
    return date.toLocaleString();
  };

  const parsedJSON = JSON.parse(applicant["Personality"]);
  const prediction = parsedJSON[0].predictions[0].prediction;
  const probability = parsedJSON[0].predictions[0].probability;
  const Enneagram = JSON.parse(applicant["Enneagram"]);
  return (
    <div className="self-stretch bg-background flex flex-col py-10 px-32 items-center justify-start text-left text-3xl text-text font-h1-work-sans">
      <div className="w-[1050px] flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-start justify-start gap-[150px]">
          <div className="flex-1 flex flex-col items-center justify-start gap-[30px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                {applicant["Full name"]} CV | {applicant["Name of speciality"]}{" "}
                | {prediction} | {probability.toFixed(2)} | {Enneagram.labels[0]}
              </div>
              <div className="self-stretch relative leading-[140%] font-semibold">
                📧 {applicant["Email"]} | 📱 {applicant["Contact number"]}{" "}|
                <a
                  href={applicant["Link to github account"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "rgb(162 89 255 / var(--tw-bg-opacity))",
                  }}
                >
                  {" "}
                  Github{" "}
                </a>
                |{" "}
                <a
                  href={applicant["Link to Linkedin"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "rgb(162 89 255 / var(--tw-bg-opacity))",
                  }}
                >
                  {" "}
                  Linkedin
                </a>
              </div>
              <div className="self-stretch relative text-base leading-[140%] font-h5-space-mono text-green">
                {formatCreatedTime(applicant["Created time"])}
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px] text-caption-label-text font-h5-space-mono">
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <b className="relative leading-[160%] capitalize inline-block ">
                  Description
                </b>
                <div className="self-stretch relative leading-[160%] font-h1-work-sans text-text text-justify">
                  <p className="m-0">{applicant["Summary"]}</p>
                </div>
              </div>
             
             
            
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
