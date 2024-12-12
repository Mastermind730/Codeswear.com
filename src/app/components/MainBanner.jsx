import React, { useState, useEffect } from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Join the Future of Computing with ACM",
      subtitle: "Empowering the Global Computing Community",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3"
    },
    {
      title: "Discover Innovation Through Technology",
      subtitle: "Leading the Digital Transformation Journey",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3"
    },
    {
      title: "Connect, Learn, and Grow with ACM",
      subtitle: "Building Tomorrow's Tech Leaders Today",
      image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[800px] overflow-hidden bg-gradient-to-r from-blue-100 to-indigo-100">
      <div
        className="absolute inset-0 transition-transform duration-700 ease-in-out transform"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`
        }}
      >
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative w-full h-full flex-shrink-0"
              style={{ flex: "0 0 100%" }}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover filter brightness-95"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white/90 backdrop-blur-[2px]">
                <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-700 mb-6 transform hover:scale-105 transition-transform duration-300 shadow-text">
                    {slide.title}
                  </h1>
                  <p className="text-2xl md:text-3xl text-gray-800 mb-10 max-w-3xl leading-relaxed font-medium">
                    {slide.subtitle}
                  </p>
                  <button
                    className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold
                    transition duration-300 transform hover:scale-105 hover:shadow-xl
                    focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 text-lg"
                    aria-label="Learn more about ACM"
                  >
                    Learn More
                  </button>
                  <div className="mt-12 flex space-x-8">
                    <a
                      href="#"
                      className="text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
                      aria-label="Follow us on LinkedIn"
                    >
                      <FaLinkedin className="w-8 h-8" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
                      aria-label="Follow us on Twitter"
                    >
                      <FaTwitter className="w-8 h-8" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
                      aria-label="Follow us on GitHub"
                    >
                      <FaGithub className="w-8 h-8" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full
        shadow-lg hover:bg-blue-50 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="w-7 h-7 text-blue-700" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full
        shadow-lg hover:bg-blue-50 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <FaChevronRight className="w-7 h-7 text-blue-700" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-110 ${
              currentSlide === index ? "bg-blue-600 scale-110" : "bg-gray-400 hover:bg-blue-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Banner;