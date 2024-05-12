const HeroImage = () => {
  return (
    <div className="flex-1 h-[510px] flex flex-col items-center justify-start text-left text-3xl text-text font-h1-work-sans">
      <div className="rounded-xl bg-background-secondary w-[307px] hidden flex-row p-5 box-border items-center justify-start gap-[12px]">
        <div className="flex flex-row items-start justify-start">
          <div className="relative w-[60px] h-[60px] shrink-0">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/avatar-placeholder@2x.png"
            />
          </div>
        </div>
      </div>
      <img
        className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image-placeholder@2x.png"
      />
    </div>
  );
};

export default HeroImage;
