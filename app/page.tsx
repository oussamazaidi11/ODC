"use client";

import { useState } from "react";
import { Lightbulb } from "lucide-react";
import "./globals.css";
import cp from "../public/background.jpg";
import NavBar from "./components/NavBar";
import ThreeScene from "./components/ThreeScene";
import HomeSc from "./components/HomeSc";
import Events from "./components/Events";


export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    /// this is the Main frame //single pg app 
    // implement Zod and zuestand ---> State management 
    /// every cmpnent is responsive by it self not at main page
    /// 
    <div
      className="w-full min-h-screen bg-no-repeat bg-center bg-cover md:bg-fixed transition-all duration-700 ease-in-out"
  style={{ backgroundImage: `url(${cp.src})` }}
    >
 
      <NavBar onSectionChange={setActiveSection} />

     
      <div className="flex justify-center items-center h-screen px-6 text-white ">
        {activeSection === "home" && (
          <div className="text-center space-y-8 mb-[120px] h-full w-full ">
            
              <HomeSc/>

          </div>
        )}

        {activeSection === "events" && (
        <Events/>
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
