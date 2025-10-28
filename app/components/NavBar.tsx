
import { useState } from "react";
import { Menu, X, ChevronsLeftRightEllipsis } from "lucide-react";

export default function NavBar({ onSectionChange }: { onSectionChange: (id: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Events", id: "events" },
    { name: "Activities", id: "activities" },
    { name: "Workshops", id: "workshops" },
    { name: "Contact Us", id: "contact" },
  ];

  const handleClick = (id: string) => {
    onSectionChange(id);
    setIsOpen(false);
  };

  return (
    <nav  className="flex justify-between items-center w-full 
  backdrop-blur-md bg-white/10 text-white px-10 py-4 
  shadow-lg border-b border-white/10 fixed top-0 left-0 z-50">
      <div className="text-2xl font-semibold tracking-wide flex gap-2 cursor-pointer">
        <ChevronsLeftRightEllipsis size={30} className="mb-1" />
        ODC Localhost
      </div>

      <div className="hidden md:flex gap-8">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="relative px-3 py-1 text-lg font-medium transition-all duration-200 rounded-md hover:bg-white/20 hover:scale-105 cursor-pointer"
          >
            {item.name}
          </button>
        ))}
      </div>

      <button
        className="md:hidden text-white hover:text-yellow-300 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div
          className="absolute top-16 left-0 w-full 
          backdrop-blur-3xl bg-white/10 text-white 
          flex flex-col items-center gap-4 py-4 md:hidden 
          border-t border-white/10 shadow-lg animate-fadeIn"
        >
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="w-full text-center py-2 text-lg font-medium 
              hover:bg-white/20 transition-all duration-200"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
