import Image from "next/image";
import Hero from "./sections/hero";
import HowItWorks from "./sections/how-it-works";

export default function Home() {
  return (
<div>
  <div className="container">
    <Hero />
  </div>
  <div className="container">
    <HowItWorks />
  </div>
</div>

  );
}
