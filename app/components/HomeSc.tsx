import { useEffect, useState } from "react";
import ThreeScene from "./ThreeScene";

export default function HomeSc(){
     const [displayText, setDisplayText] = useState("");
  const fullText =
    "Welcome to our community    🚀";

  // typing animation without vocal effect 
  //--> vocal effect dosn t wprk 
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      // if you want to  use vcl eff put the condition here 
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);
   return (
  <div className="w-full h-full relative">
    <div className="w-full h-full">
      <ThreeScene />
    </div>

    {/* About Us Section */}
    <section
      className={`
        w-full px-6
        ${/* On mobile: fixed at bottom */""}
        fixed bottom-0 left-0 md:relative md:flex md:justify-center md:items-center
        flex justify-center items-center
        z-20
      `}
    >
    <div className="fixed inset-0 flex justify-center items-center z-20 px-6 mb-[-100px] md:mb-[-450px]">
  <div
    className="backdrop-blur-lg bg-white/10 border border-white/20
    shadow-lg rounded-2xl p-6 md:p-10 w-full max-w-3xl
    text-center text-white"
  >
    <h2 className="text-2xl md:text-3xl font-semibold text-orange-300 mb-4">
      About Us
    </h2>
    <p className="text-lg md:text-xl leading-relaxed font-light text-gray-100 min-h-[80px]">
      {displayText}
      <span className="animate-pulse text-orange-400">|</span>
    </p>
  </div>
</div>

    </section>
  </div>
);

}