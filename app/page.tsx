"use client";

import { useState } from "react";
import { Lightbulb } from "lucide-react";
import "./globals.css";
import cp from "../public/background.jpg";
import NavBar from "./components/NavBar";
import ThreeScene from "./components/ThreeScene";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div
      className="w-full min-h-screen bg-no-repeat bg-center bg-cover md:bg-fixed transition-all duration-700 ease-in-out"
  style={{ backgroundImage: `url(${cp.src})` }}
    >
      {/* Pass setActiveSection to NavBar */}
      <NavBar onSectionChange={setActiveSection} />

      {/* Content changes dynamically */}
      <div className="flex justify-center items-center h-screen px-6 text-white ">
        {activeSection === "home" && (
          <div className="text-center space-y-8 mb-[100px] ">
            <ThreeScene />
            <div className="flex justify-center mt-[-150px] px-4">
  <div className="
    flex flex-col sm:flex-row justify-center items-center gap-5 
    w-full sm:w-[600px] md:w-[800px] lg:w-[1000px]
    min-h-[150px] sm:h-[180px] 
    bg-gray-400/40 backdrop-blur-md 
    rounded-xl shadow-md shadow-gray-500/40 
    p-6 text-center sm:text-left
    border border-white/10
    transition-all duration-300
  ">
    <span className="sm:mt-[-40px]">
      <Lightbulb size={30} color="yellow" />
    </span>
    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
      mollitia molestias. Cumque, doloribus perspiciatis fugiat labore
      dolore fuga! Error enim temporibus, ex facilis obcaecati illum
      perspiciatis rem a at neque.
    </p>
  </div>
</div>

          </div>
        )}

        {activeSection === "events" && (
          <h2 className="text-5xl font-bold text-orange-300">Events Section</h2>
        )}

        {activeSection === "activities" && (
          <h2 className="text-5xl font-bold text-orange-300">Activities Section</h2>
        )}

        {activeSection === "workshops" && (
          <h2 className="text-5xl font-bold text-orange-300">Workshops Section</h2>
        )}

        {activeSection === "contact" && (
          <h2 className="text-5xl font-bold text-orange-300">Contact Us Section</h2>
        )}
      </div>
    </div>
  );
}
