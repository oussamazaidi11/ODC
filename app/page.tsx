import Image from "next/image";
import {Lightbulb}from 'lucide-react'
import "./globals.css"
import cp from"../public/bacg.jpg"

import NavBar from "./components/NavBar";
import ThreeScene from "./components/ThreeScene";
export default function Home() {
  return (
    <div  className="w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${cp.src})` }}>
    <div className=""><ThreeScene />
    </div>
    <div id='the introduction section 'className="flex justify-center mt-[-100px]">
     <div className="flex justify-center items-center gap-7 w-[600px] h-[200px] bg-gray-400/55 backdrop-blur-md border-none rounded-md shadow-gray-400 shadow"> 
      <span className="mt-[-60px] ml-4"><Lightbulb size={28} color="yellow"/></span><p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Rem, mollitia molestias. Cumque, doloribus perspiciatis fugiat 
        labore dolore fuga! Error enim temporibus, 
        ex facilis obcaecati illum perspiciatis rem a at neque.


      </p>
     </div>

    </div>
    
    </div>
  );
}