import FeatureCardWrapper from "./feature-wrapper-card";
import { gsap } from "gsap";
import Image from "next/image";
import { useRef } from "react";

export default function SecondCard() {
  return (
    <FeatureCardWrapper>
      <div>
        <h3 className="font-inter text-[#C8CCD2] font-bold text-[16px]">
          STEP TWO
        </h3>
        <h4 className="heading-3 font-inter mt-1">Daily journal</h4>

        <div className="w-44 h-44 bg-[#585BFF]/50 mx-auto flex mt-8 rounded-xl inner-white flex-col">
          <p className="flex mx-auto p-2 text-white font-gloria">sept 13</p>
          <div className="flex flex-col items-center">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`bg-white w-36 h-1 rounded-full ${i === 0 ? "mt-6" : "mt-2"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </FeatureCardWrapper>
  );
}
