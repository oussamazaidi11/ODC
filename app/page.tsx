"use client";

import { useState } from "react";
import { Lightbulb } from "lucide-react";
import "./globals.css";
import cp from "../public/bacg.jpg";
import NavBar from "./components/NavBar";
import ThreeScene from "./components/ThreeScene";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center transition-all duration-700 ease-in-out"
      style={{ backgroundImage: `url(${cp.src})` }}
    >
      {/* Pass setActiveSection to NavBar */}
      <NavBar onSectionChange={setActiveSection} />

      {/* Content changes dynamically */}
      <div className="flex justify-center items-center h-screen px-6 text-white ">
        {activeSection === "home" && (
          <div className="text-center space-y-8 mb-[100px] ">
            <ThreeScene />
            <div className="flex justify-center mt-[-200px]">
              <div className="flex justify-center items-center gap-7 w-[600px] h-[200px] bg-gray-400/55 backdrop-blur-md border-none rounded-md shadow-gray-400 shadow">
                <span className="mt-[-60px] ml-4">
                  <Lightbulb size={28} color="yellow" />
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                  mollitia molestias. Cumque, doloribus perspiciatis fugiat
                  labore dolore fuga! Error enim temporibus, ex facilis obcaecati
                  illum perspiciatis rem a at neque.
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
