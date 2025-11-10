"use client";

import FirstCard from "../component/features-card/first-card";
import FourthCard from "../component/features-card/fourth-card";
import SecondCard from "../component/features-card/second-card";
import ThirdCard from "../component/features-card/third-card";

export default function Features() {
  return (
    <div>
      <h2 className="heading-2 font-inter text-center">Features</h2>
      <div className="mx-auto flex flex-col md:grid md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-4 px-5 mt-8 xl:mt-12">
        <FirstCard />
        <SecondCard />
        <ThirdCard />
        <FourthCard />
      </div>
    </div>
  );
}
