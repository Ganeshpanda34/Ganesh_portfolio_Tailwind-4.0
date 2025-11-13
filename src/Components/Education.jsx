import React, { useState, useEffect } from 'react';
import { FaBook, FaCertificate, FaUniversity, FaStar, FaGraduationCap, FaLightbulb, FaInfoCircle } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Education = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const educationData = [
    {
      title: 'Carmel School',
      description: 'Completed Secondary Education under the ICSE curriculum, establishing a strong academic foundation across core subjects.',
      score: '77%',
      curriculum: 'Indian Certificate of Secondary Education (ICSE)',
      highlights: 'Strong academic performance in Computer Applications and Science.',
      icon: FaBook,
    },
    {
      title: 'Intermediate - Charampa Mahavidyalaya College',
      description: 'Completed Higher Secondary Education under the CHSE curriculum with a focus on Science and Mathematics, specializing in PCMB.',
      score: '60%',
      curriculum: 'Council of Higher Secondary Education (CHSE)',
      highlights: 'Subjects: Physics, Chemistry, Mathematics & Biology.',
      icon: FaCertificate,
    },
    {
      title: 'B.Sc Graduation - Bhadrak Autonomous College',
      description: 'Completed Graduation in \'BSc-ITM\' with a strong foundation in computer science, focusing on Python programming, web technologies and core computer science concepts.',
      score: '8.01 CGPA',
      curriculum: 'Council of Higher Secondary Education (CHSE)',
      highlights: 'Developed a keen interest in building practical software solutions.',
      icon: FaUniversity,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % educationData.length);
    }, 3000); // 3 second delay

    return () => clearInterval(interval);
  }, [educationData.length]);

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Education
          </h2>
          <div className="mt-4 text-lg h-7">
            <TypeAnimation
              sequence={[
                'My academic journey and achievements.',
                2000,
                '',
              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium"
            />
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {educationData.map((edu, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_40px_rgba(147,51,234,0.3),0_0_60px_rgba(236,72,153,0.2)] transition-shadow duration-300 border border-blue-200 dark:border-blue-800 flex flex-col" data-aos="fade-up" data-aos-delay={index * 200}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                      <edu.icon className="text-blue-600 dark:text-blue-400 text-2xl" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{edu.title}</h3>
                  </div>
                  <div className="flex items-start mb-4">
                    <FaInfoCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{edu.description}</p>
                  </div>
                  <div className="flex flex-col gap-4 mb-4">
                    <div className="flex items-start">
                      <FaStar className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white">Score: </span>
                        <span className="text-blue-600 dark:text-blue-400">{edu.score}</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaGraduationCap className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white">Curriculum: </span>
                        <span className="text-gray-600 dark:text-gray-400">{edu.curriculum}</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaLightbulb className="text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white">Highlights: </span>
                        <span className="text-gray-600 dark:text-gray-400">{edu.highlights}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8">
            {educationData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full mx-1 transition-all duration-500 ease-in-out ${
                  index === currentSlide ? 'w-6 bg-blue-600' : 'w-3 bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
