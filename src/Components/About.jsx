import React, { useState } from 'react';
import { FaMobile, FaPalette, FaGlobe, FaLightbulb, FaCode, FaGraduationCap, FaDownload, FaTimes } from 'react-icons/fa';
import profileImage from '../assets/ProfileImage2.png'; // Assuming you have a profile image in assets

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    // Assuming the resume is in the public folder as 'Ganesh-Full-Stack-Developer-Resume.pdf'
    const link = document.createElement('a');
    link.href = '/Ganesh-Full-Stack-Developer-Resume.pdf'; // Update this path to your actual resume file
    link.download = 'Ganesh-Full-Stack-Developer-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-white bg-clip-text text-transparent">
              About me
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Profile Image */}
            <div className="flex justify-center lg:justify-start" data-aos="fade-right" data-aos-duration="1000">
              <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-lg overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 hover:shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_40px_rgba(147,51,234,0.3),0_0_60px_rgba(236,72,153,0.2)] transition-shadow duration-300" data-aos="zoom-in" data-aos-delay="300">
                  <img
                    src={profileImage}
                    alt="Ganesh - Frontend Developer"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent" data-aos="fade-up" data-aos-delay="400">
                Who Am I?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed" data-aos="fade-up" data-aos-delay="600">
                I am a passionate Frontend Developer with a strong foundation in web technologies. As a fresher, I specialize in creating responsive, accessible, and performance-optimized web applications.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed" data-aos="fade-up" data-aos-delay="800">
                My journey in web development started with a curiosity about how websites work, which led me to pursue a degree in 'BSc-ITM'. Since then, I've worked on various projects, continuously improving my skills and staying updated with the latest industry trends.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed" data-aos="fade-up" data-aos-delay="1000">
                When I'm not coding, I explore cutting-edge AI tools and industry innovations to stay ahead of the tech curve, I prioritize fitness and physical training or enjoy listening to music & podcasts.
              </p>

              {/* Key Points */}
              <div className="space-y-3" data-aos="fade-up" data-aos-delay="600">
                <div className="flex items-center space-x-3">
                  <FaMobile className="text-blue-600 text-lg" />
                  <p className="text-base text-gray-700 dark:text-gray-300 font-medium">Mobile-first, user-focused development</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPalette className="text-blue-600 text-lg" />
                  <p className="text-base text-gray-700 dark:text-gray-300 font-medium">UI/UX Principles</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaGlobe className="text-blue-600 text-lg" />
                  <p className="text-base text-gray-700 dark:text-gray-300 font-medium">Cross-Browser Compatibility</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaLightbulb className="text-blue-600 text-lg" />
                  <p className="text-base text-gray-700 dark:text-gray-300 font-medium">Intuitive, clean interface design</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCode className="text-blue-600 text-lg" />
                  <p className="text-base text-gray-700 dark:text-gray-300 font-medium">Code with vibe — where design meets emotion</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaGraduationCap className="text-blue-600 text-lg" />
                  <p className="text-base text-gray-700 dark:text-gray-300 font-medium">Always learning. Always improving</p>
                </div>
              </div>

              {/* Download Resume Button */}
              <div data-aos="fade-up" data-aos-delay="400">
                <button
                  onClick={handleDownload}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center space-x-2"
                >
                  <FaDownload className="text-sm" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-aos="fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl" data-aos="zoom-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Download Successful</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Your resume has been downloaded successfully!
            </p>
            <button
              onClick={closeModal}
              className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
