import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import CanvasJSReact from "./canvasjs.react";

const Chart = (applicant) => {
  const dataWithTest = [
    { subject: "Peacemaker", A: applicant["A"], fullMark: 8 },
    { subject: "Loyalist", A: applicant["B"], fullMark: 8 },
    { subject: "Achiever", A: applicant["C"], fullMark: 8 },
    { subject: "Reformer", A: applicant["D"], fullMark: 8 },
    { subject: "Individualist", A: applicant["E"], fullMark: 8 },
    { subject: "Helper", A: applicant["F"], fullMark: 8 },
    { subject: "Challenger", A: applicant["G"], fullMark: 8 },
    { subject: "Investigator", A: applicant["H"], fullMark: 8 },
    { subject: "Enthusiast", A: applicant["I"], fullMark: 8 },
  ];

  const BFT = JSON.parse(applicant["BFT"])[0];
  const { id, ...BFTWithoutId } = BFT;
  const convertedArray = Object.entries(BFTWithoutId).map(([label, y]) => ({
    label: label.replace(/_/g, " "), // Replace underscores with spaces
    y: parseFloat(y),
  }));
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const options = {
    title: {
      text: "Big Five Personality Insights",
    },

    axisX: {
      labelFormatter: function (e) {
        return "";
      },
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "doughnut",
        dataPoints: convertedArray,
      },
    ],
  };

  return (
    <div className="self-stretch bg-background flex flex-col px-[195px] items-center justify-start gap-[60px] text-left text-3xl text-text font-h1-work-sans">
      <div className="w-[1050px] flex flex-row items-start justify-start gap-[100px] text-19xl">
        <div className="self-stretch relative leading-[120%] capitalize font-semibold">
          Illustrations
        </div>
      </div>
      <div className="w-[1050px] flex flex-row items-start justify-start gap-[30px]">
        <div className="flex-1 rounded-xl bg-background-secondary h-[469px] flex flex-col items-center justify-start">
          {applicant["Q1"] ? (
            <RadarChart
              cx={300}
              cy={250}
              outerRadius={150}
              width={600}
              height={500}
              data={dataWithTest}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 8]} />
              <Radar
                name="Applicant"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart>
          ) : (
            <div>Test wasn't taken</div>
          )}
        </div>
      </div>
      <div className="w-[1050px] flex flex-row items-start justify-start gap-[30px]">
        <div className="flex-1 rounded-xl bg-background-secondary h-[400px] flex flex-col items-center justify-start">
          <CanvasJSChart options={options} />
        </div>
      </div>

      {applicant["CV/Resume"] ? (
        <div className="w-[1050px] h-[1050px]">
          <iframe
            src={applicant["CV/Resume"][0]["url"]}
            className="w-[1050px] h-[1050px] "
          />
        </div>
      ) : (
        <div className="w-[1050px] h-[1050px]"></div>
      )}
    </div>
  );
};

export default Chart;
