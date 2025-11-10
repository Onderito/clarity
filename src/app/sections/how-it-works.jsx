"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HowItWorks() {
  const titleRef = useRef(null);
  const sectionRef = useRef(null);
  const descRef = useRef(null);
  useEffect(() => {
    const cardsElements = gsap.utils.toArray(".card");
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    tl.from(titleRef.current, {
      duration: 1,
      opacity: 0,
      scale: 0.8,
      ease: "power2.out",
    });

    tl.from(
      descRef.current,
      {
        duration: 1,
        opacity: 0,
        scale: 0.8,
        ease: "power2.out",
      },
      "<0.2",
    );

    tl.from(cardsElements, {
      opacity: 0,
      y: 50,
      scale: 0.8,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
    });
  }, []);

  const cards = [
    {
      title: "Add your 3 tasks",
      description:
        "Stay focused by choosing your top 3 priorities for the day.",
      image: "/notes.svg",
    },
    {
      title: "See your progress",
      description: "Follow your completion rate without stress or guilt.",
      image: "/thunder.svg",
    },
    {
      title: "Pause when needed",
      description: "Activate Day Off or take a quick break with calming music.",
      image: "/pause.svg",
    },
  ];

  return (
    <div ref={sectionRef}>
      <h2 ref={titleRef} className="heading-2 font-inter text-center">
        How It Works
      </h2>
      <p ref={descRef} className="font-inter text-center body-text">
        A simple flow to stay productive without pressure
      </p>

      <div className="mt-8 xl:mt-12">
        <div className="mx-auto px-5 xl:flex xl:gap-10">
          {cards.map((card, i) => (
            <div key={i} className="w-full mb-8 last:mb-0">
              <div className="card w-full h-[300px] rounded-xl bg-white border-[0.5px] border-[#E2E6EC] flex flex-col justify-center items-center relative overflow-hidden p-8">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={14}
                  height={14}
                  className="w-14 h-14 mb-4 relative z-10"
                />
                <h3 className="heading-3 font-bold mb-2 text-center relative z-10">
                  {card.title}
                </h3>
                <p className="text-center relative z-10">{card.description}</p>

                {/* Blob */}
                <div className="absolute -top-12 -left-12 w-[250px] h-[250px] rounded-full bg-[#C9CAFE]/50 blur-[60px]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
