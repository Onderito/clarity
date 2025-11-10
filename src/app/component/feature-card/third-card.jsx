import FeatureCardWrapper from "./feature-wrapper-card";

export default function ThirdCard() {
  return (
    <FeatureCardWrapper>
      <h3 className="font-inter text-[#C8CCD2] font-bold text-[16px]">
        STEP THREE
      </h3>
      <h4 className="heading-3 font-inter mt-1">Visual progress</h4>
      <div className="relative w-64 mx-auto mt-17">
        <div className="absolute bottom-12 flex items-center justify-center z-0">
          <button className="bg-white rotate-4 p-2 rounded-xl border-[0.1px] border-[#E2E6EC] font-inter text-sm">
            Keep going
          </button>
        </div>

        <div className="absolute top-12 right-0 flex items-center justify-center z-0">
          <button className="bg-white -rotate-7 p-2 rounded-xl border-[0.1px] border-[#E2E6EC] font-inter text-sm">
            Almost done!
          </button>
        </div>

        <div className="relative z-20 rounded-3xl border-[0.1px] border-[#E2E6EC] progress-bar-shadow w-full h-14 bg-gradient-to-r from-[#ADAEFC] from-[66%] to-white to-[66%]"></div>
      </div>
    </FeatureCardWrapper>
  );
}
