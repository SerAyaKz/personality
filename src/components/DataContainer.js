import { useMemo } from "react";

const DataContainer = ({
  icon,
  setupYourWallet,
  setUpYourWalletOfChoiceCo,
  propFlex,
  propWidth,
  propFlexShrink,
}) => {
  const infoCardStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
      flexShrink: propFlexShrink,
    };
  }, [propFlex, propWidth, propFlexShrink]);

  return (
    <div
      className="self-stretch flex-1 rounded-xl bg-background-secondary flex flex-col pt-2.5 px-[30px] pb-[30px] items-center justify-start gap-[20px] text-center text-3xl text-text font-h1-work-sans"
      style={infoCardStyle}
    >
      <img
        className="relative w-[250px] h-[250px] shrink-0 overflow-hidden"
        alt=""
        src={icon}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
        <div className="self-stretch relative leading-[140%] capitalize font-semibold">
          {setupYourWallet}
        </div>
        <div className="self-stretch relative text-base leading-[140%]">
          {setUpYourWalletOfChoiceCo}
        </div>
      </div>
    </div>
  );
};

export default DataContainer;
