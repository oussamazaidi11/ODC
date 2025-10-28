"use client";
import { useState, useEffect } from "react";

export default function Events() {
  const events = [
    {
      title: "Tech Conference 2025",
      date: "March 12, 2025",
      description: "Join top tech leaders and innovators for a day of insights and networking.",
      image:
        "https://images.unsplash.com/photo-1515165562835-c4c1b0b1b0f3?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "AI & Robotics Expo",
      date: "April 5, 2025",
      description: "Explore the latest advancements in AI and robotics technologies.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Developers Meetup",
      date: "May 20, 2025",
      description: "Meet fellow developers, share knowledge, and build amazing projects together.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Design Thinking Workshop",
      date: "June 8, 2025",
      description: "Hands-on workshop to improve your creative problem-solving and UX design skills.",
      image:
        "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=1200&q=60",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Responsive: number of cards per view
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3); // lg screens
      else if (window.innerWidth >= 768) setCardsPerView(2); // md screens
      else setCardsPerView(1); // sm screens
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? events.length - cardsPerView : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev >= events.length - cardsPerView ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full py-16 text-white flex flex-col items-center bg-black/50">
      <h2 className="text-3xl md:text-4xl font-semibold text-orange-300 mb-10">
        Upcoming Events
      </h2>

      <div className="relative w-full max-w-6xl overflow-hidden px-4">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 gap-6"
          style={{ transform: `translateX(-${(100 / cardsPerView) * current}%)` }}
        >
          {events.map((event, i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 rounded-2xl overflow-hidden backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg p-6 flex flex-col justify-between text-center transition-transform hover:scale-105 duration-300`}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-xl mb-4 brightness-75 transition-all duration-500"
              />
              <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-orange-300 mb-2">
                  {event.title}
                </h2>
                <p className="text-gray-200 mb-2">{event.date}</p>
                <p className="text-gray-100 text-sm md:text-base font-light">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

