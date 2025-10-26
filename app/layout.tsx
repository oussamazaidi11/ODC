import type { Metadata } from "next";
import "./globals.css"
import NavBar from "./components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body>
       
      
        {children}
      
      </body>
    </html>
  );
}
