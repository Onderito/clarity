import FeatureCardWrapper from "./feature-wrapper-card";
import { gsap } from "gsap";
import { useRef } from "react";
import Image from "next/image";

export default function FirstCard() {
  const container = useRef(null);
  const tasks = useRef([]);
  const button = useRef(null);

  const handleEnter = () => {
    const tl = gsap.timeline();
    tl.to(tasks.current, {
      x: 10,
      rotate: 2,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.1,
    }).to(
      button.current,
      {
        scale: 1.1,
        y: -5,
        duration: 0.3,
        ease: "power2.out",
      },
      "-=0.3",
    );
  };

  const handleLeave = () => {
    gsap.to([tasks.current, button.current].flat(), {
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      duration: 0.4,
      ease: "power2.inOut",
      stagger: 0.05,
    });
  };
  return (
    <FeatureCardWrapper>
      <div
        ref={container}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <h3 className="font-inter text-[#C8CCD2] font-bold text-[16px]">
          STEP ONE
        </h3>
        <h4 className="heading-3 font-inter mt-1">Smart to-do</h4>

        <ul className="mt-8 flex flex-col gap-2 text-[14px] font-inter">
          {["Finish your portfolio", "to do list app", "Go to the gym !"].map(
            (text, i) => (
              <li
                key={i}
                ref={(el) => (tasks.current[i] = el)}
                className={`flex gap-2 bg-white border-[0.2px] border-[#E2E6EC] w-fit p-2 rounded-xl ${i === 0 ? "purple-glow" : ""} `}
              >
                <Image
                  src={i < 2 ? "/check.svg" : "/uncheck.svg"}
                  alt="Checkmark"
                  width="24"
                  height="24"
                />
                {text}
              </li>
            ),
          )}
        </ul>

        <button
          ref={button}
          className="text-[16px] bg-[#585BFF] rounded-xl p-2 px-6 font-medium text-white font-inter mx-auto flex mt-12 purple-glow"
        >
          Add task
        </button>
      </div>
    </FeatureCardWrapper>
  );
}
