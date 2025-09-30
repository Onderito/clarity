"use client"

import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Hero() {
    const imgRef = useRef(null)
    const titleRef = useRef(null)
    const bodyTextRef = useRef(null)
    const btnRef = useRef(null)
    const card1Ref = useRef()
    const card2Ref = useRef()
    const card3Ref = useRef()
    const card4Ref = useRef()
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        let tl = gsap.timeline({
        onComplete: () => {
            onScrollAnim()
        }
        });
        tl.from(titleRef.current, {
            opacity: 0,
            scale: 0.8,
            y: 50,
            duration: 1,
            ease: "power2.out",
        }),
        tl.from(bodyTextRef.current, {
            opacity: 0,
            scale: 0.8,
            y: 50,
            duration: 1,
            ease: "power2.out",
        }, "<0.2"),
        tl.from(btnRef.current, {
            opacity: 0,
            y: 50,
            scale: 0.6,
            duration: 1,
            ease: "power2.out",
        }, "<0.2"),
        tl.from(imgRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "back.out(1.7)"
        }, "<"), 
        tl.from([card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current] , {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)", // ✨ Le meilleur bounce
            stagger: 0.1
        }, "<0.4");
        function onScrollAnim() {
        gsap.to(imgRef.current, {
            scrollTrigger: {
                trigger: ".trigger",
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
            scale: 0.4,
            y: -250,
            opacity: 0.2,
            force3D: true,
            ease: "none",
        })
        }
    }, [])
    return (
        <div className="relative trigger ">
            <h1 ref={titleRef} className="heading-1 title text-center font-inter">Stay  focused, <br /> stay kind to <span className="font-gloria font-light">yourself</span></h1>
            <p ref={bodyTextRef} className="body-text text-center xl:mt-6 mt-2">A daily planner that helps you build habits, track progress, 
            and rest when you need to</p>
            <button ref={btnRef} className="h-[52px] xl:mt-8 mt-4 bg-[#585BFF] mx-auto flex items-center justify-center p-2 w-52 rounded-2xl text-white font-inter font-bold shadow-md border-4 border-white cursor-pointer hover:bg-[#585BFF]/90 transition-none duration-300">Start For Free</button>
            <div ref={card1Ref} className="absolute top-0 xl:left-40 left-0 rotate-12 xl:w-[60px] xl:h-[60px] w-[40px] h-[40px] inner-shadow-white rounded-xl font-gloria xl:text-[24px] text-[16px] flex text-center items-center justify-center">30</div>
            <div ref={card2Ref} className="absolute md:top-65 top-40 xl:left-60 left-0 rotate-12 xl:w-[60px] xl:h-[60px] w-[40px] h-[40px] inner-shadow-white rounded-xl font-gloria flex text-center items-center justify-center"> <Image className="xl:w-[36px] xl:h-[36px] shadow-sm rounded-full" width={24} height={24} src="/ellipse.svg" alt="" /></div>
            <div ref={card3Ref} className="absolute top-0 xl:right-40 right-0 -rotate-12 xl:w-[60px] xl:h-[60px] w-[40px] h-[40px] inner-shadow-white rounded-xl font-gloria flex text-center items-center justify-center"><Image className="xl:w-[36px] xl:h-[36px]" width={24} height={24} src="/line.svg" alt="" /></div>
            <div ref={card4Ref} className="absolute md:top-65 top-40 xl:right-60 right-0 -rotate-12 xl:w-[60px] xl:h-[60px] w-[40px] h-[40px] inner-shadow-white rounded-xl font-gloria flex text-center items-center justify-center"> <Image className="xl:w-[21px] xl:h-[27px]" width={10} height={10} src="/stop.svg" alt="" /> </div>
           <Image 
           className="relative bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-auto mt-12 xl:mt-20" 
           ref={imgRef}
           src="/dashboard-screen.jpg" 
           width={1800} 
           height={200} 
           quality={100}
           alt="dashboard-screen" 
           />
    </div>
    )
}