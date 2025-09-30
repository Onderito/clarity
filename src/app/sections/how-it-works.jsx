"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

export default function HowItWorks() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        
      
          
    }, [])
    return (
        <div className="  how-it-works">
            <h2 className="heading-2 text-center section-title">How It Works</h2>
  
        </div>
    )
}