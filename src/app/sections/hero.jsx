import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative">
            <h1 className="heading-1 text-center font-inter">Stay  focused, <br /> stay kind to <span className="font-gloria font-light">yourself</span></h1>
            <p className="body-text text-center xl:mt-6 mt-2">A daily planner that helps you build habits, track progress, 
            and rest when you need to</p>
            <button className="h-[52px] xl:mt-8 mt-4 bg-[#585BFF] mx-auto flex items-center justify-center p-2 w-52 rounded-2xl text-white font-inter font-bold shadow-md border-4 border-white cursor-pointer hover:bg-[#585BFF]/90 transition-all duration-300">Start For Free</button>
            <div className="absolute top-0 xl:left-40 left-0 rotate-12 xl:w-[60px] xl:h-[60px] w-[40px] h-[40px] inner-shadow-white rounded-xl font-gloria xl:text-[24px] text-[16px] flex text-center items-center justify-center">30</div>
            <div className="absolute bottom-0 xl:left-60 left-0 rotate-12 xl:w-[60px] xl:h-[60px] w-[40px] h-[40px] inner-shadow-white rounded-xl font-gloria flex text-center items-center justify-center"> <Image className="xl:w-[36px] xl:h-[36px] shadow-sm rounded-full" width={24} height={24} src="/ellipse.svg" alt="" /></div>
            <div className="absolute top-0 xl:right-40 right-0 -rotate-12 xl:w-[60px] xl:h-[60px] w-[40px] h-[40px] inner-shadow-white rounded-xl font-gloria flex text-center items-center justify-center"><Image className="xl:w-[36px] xl:h-[36px]" width={24} height={24} src="/line.svg" alt="" /></div>
            <div className="absolute bottom-0 xl:right-60 right-0 -rotate-12 xl:w-[60px] xl:h-[60px] w-[40px] h-[40px] inner-shadow-white rounded-xl font-gloria flex text-center items-center justify-center"> <Image className="xl:w-[21px] xl:h-[27px]" width={10} height={10} src="/stop.svg" alt="" /> </div>
           <Image 
           className="absolute top-70 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-auto md:top-95 xl:top-100" 
           src="/dashboard-screen.jpg" 
           width={1800} 
           height={800} 
           quality={100}
           alt="dashboard-screen" 
           />
    </div>
    )
}