import React, { useEffect, useState } from "react";
import { FaGraduationCap, FaChalkboardTeacher, FaUserTie, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const FacultyCoordinators = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
      easing: "ease-in-out"
    });
  }, []);

  const hodData = {
    name: "Dr. Sarah Johnson",
    designation: "Head of Department",
    description: "Leading innovation in computer science education for over 15 years",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:sarah@example.com"
    }
  };

  const coordinators = [
    {
      name: "Prof. Michael Chen",
      designation: "Academic Coordinator",
      description: "Specializes in AI and Machine Learning",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
      funFact: "Published over 50 research papers",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:michael@example.com"
      }
    },
    {
      name: "Dr. Emily Rodriguez",
      designation: "Research Coordinator",
      description: "Expert in Data Science and Analytics",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3",
      funFact: "Led 3 international research projects",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:emily@example.com"
      }
    },
    {
      name: "Prof. David Wilson",
      designation: "Student Affairs Coordinator",
      description: "Focused on student development and mentoring",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      funFact: "Mentored over 1000 students",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:david@example.com"
      }
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Added decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">Our Faculty Leaders</h2>
          <div className="w-32 h-2 bg-blue-600 mx-auto transform hover:scale-x-150 transition-transform duration-300"></div>
        </div>

        {/* HOD Section with enhanced graphics */}
        <div className="mb-20" data-aos="zoom-in-up">
          <div className="max-w-2xl mx-auto text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl transform -rotate-6 scale-105 opacity-20"></div>
            <div className="relative group cursor-pointer bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden rounded-full mx-auto w-56 h-56">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <img
                  src={hodData.image}
                  alt={hodData.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3";
                  }}
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <FaUserTie className="text-5xl text-blue-600 bg-white rounded-full p-2 shadow-lg animate-bounce" />
                </div>
              </div>
              <h3 className="mt-8 text-3xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{hodData.name}</h3>
              <p className="text-blue-600 font-medium mt-2 text-xl">{hodData.designation}</p>
              <p className="mt-3 text-gray-600 text-lg">{hodData.description}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <a href={hodData.socialLinks.linkedin} className="text-gray-600 hover:text-blue-600 transform hover:scale-125 transition-all duration-300"><FaLinkedin size={24} /></a>
                <a href={hodData.socialLinks.twitter} className="text-gray-600 hover:text-blue-600 transform hover:scale-125 transition-all duration-300"><FaTwitter size={24} /></a>
                <a href={hodData.socialLinks.email} className="text-gray-600 hover:text-blue-600 transform hover:scale-125 transition-all duration-300"><FaEnvelope size={24} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Coordinators Section with enhanced graphics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {coordinators.map((coordinator, index) => (
            <div
              key={index}
              className="relative"
              data-aos="flip-left"
              data-aos-delay={index * 200}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl transform -rotate-3 scale-105 opacity-20"></div>
              <div className="bg-white rounded-xl shadow-xl p-8 transform hover:-translate-y-4 transition-all duration-300 hover:shadow-2xl relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-md opacity-70"></div>
                <div className="relative mb-8 overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <img
                    src={coordinator.image}
                    alt={coordinator.name}
                    className="w-36 h-36 mx-auto object-cover transform hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3";
                    }}
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <FaChalkboardTeacher className="text-4xl text-blue-600 bg-white rounded-full p-1 shadow-lg" />
                  </div>
                </div>
                <div className="text-center relative z-10">
                  <h3 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">{coordinator.name}</h3>
                  <p className="text-blue-600 font-medium mt-2 text-lg">{coordinator.designation}</p>
                  <p className="mt-3 text-gray-600">{coordinator.description}</p>
                  <div className={`mt-4 transition-all duration-500 ${hoveredCard === index ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"}`}>
                    <div className="flex items-center justify-center space-x-2 text-blue-600">
                      <FaGraduationCap className="text-2xl animate-pulse" />
                      <p className="text-sm font-medium">Fun Fact: {coordinator.funFact}</p>
                    </div>
                    <div className="mt-4 flex justify-center space-x-4">
                      <a href={coordinator.socialLinks.linkedin} className="text-gray-600 hover:text-blue-600 transform hover:scale-125 transition-all duration-300"><FaLinkedin size={20} /></a>
                      <a href={coordinator.socialLinks.twitter} className="text-gray-600 hover:text-blue-600 transform hover:scale-125 transition-all duration-300"><FaTwitter size={20} /></a>
                      <a href={coordinator.socialLinks.email} className="text-gray-600 hover:text-blue-600 transform hover:scale-125 transition-all duration-300"><FaEnvelope size={20} /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyCoordinators;