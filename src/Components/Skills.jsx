import React from 'react';
import { FaReact, FaPython, FaTools } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const SkillCard = ({ icon, title, skills }) => {
  return (
    <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-2xl shadow-[0_0_5px_rgba(255,255,255,0.2)] border border-white/20 hover:border-white/40 hover:shadow-3xl hover:scale-105 transition-all duration-500 ease-in-out">
      <div className="flex items-center mb-4 sm:mb-6">
        <div className="text-3xl sm:text-4xl md:text-5xl text-blue-400 mr-3 sm:mr-4 animate-pulse">{icon}</div>
        <TypeAnimation
          sequence={[title, 2000, '', 500]}
          wrapper="h3"
          className="text-sm sm:text-base md:text-lg font-bold text-white"
          repeat={Infinity}
          cursor={true}
        />
      </div>
      <ul className="space-y-2 sm:space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className="text-sm sm:text-base text-gray-200 flex items-center hover:text-white transition-colors duration-300">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = ({ containerRef, className }) => {
  return (
    <section id="skills" ref={containerRef} className={`relative w-full h-full bg-[#1E2939] overflow-x-hidden ${className}`}>
      {/* Overlay for content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center p-4 py-16 sm:py-20 md:py-24 min-h-screen"
      >
        <div className="w-full max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-white" data-aos="fade-down" data-aos-once="false">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" data-aos="fade-up" data-aos-delay="200">
            <SkillCard
              icon={<FaReact />}
              title="Frontend Development"
              skills={[
                <span className="flex items-center" key="html5">
                  <span
                    role="img"
                    aria-label="HTML5"
                    className="w-4 h-4 mr-2 inline-block bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url('https://cdn.simpleicons.org/html5/ff3e00')",
                    }}
                  />
                  <span>HTML5</span>
                </span>,
                <span className="flex items-center" key="css3">
                  <span
                    role="img"
                    aria-label="CSS3"
                    className="w-4 h-4 mr-2 inline-block bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url('https://img.icons8.com/color/48/css3.png')",
                    }}
                  />
                  <span>CSS3</span>
                </span>,
                <span className="flex items-center" key="js">
                  <span
                    role="img"
                    aria-label="JavaScript"
                    className="w-4 h-4 mr-2 inline-block bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url('https://cdn.simpleicons.org/javascript/f7df1e')",
                    }}
                  
                  />
                  <span>JavaScript</span>
                </span>,
                <span className="flex items-center" key="bootstrap">
                  <span
                    role="img"
                    aria-label="Bootstrap"
                    className="w-4 h-4 mr-2 inline-block bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url('https://cdn.simpleicons.org/bootstrap/7952b3')",
                    }}
                  />
                  <span>Bootstrap 5</span>
                </span>,
                <span className="flex items-center" key="react">
                  <span
                    role="img"
                    aria-label="React"
                    className="w-4 h-4 mr-2 inline-block bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url('https://cdn.simpleicons.org/react/61dafb')",
                    }}
                  />
                  <span>React</span>
                </span>,
                <span className="flex items-center" key="tailwind">
                  <span
                    role="img"
                    aria-label="Tailwind CSS"
                    className="w-4 h-4 mr-2 inline-block bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url('https://cdn.simpleicons.org/tailwindcss/06b6d4')",
                    }}
                  />
                  <span>Tailwind CSS</span>
                </span>,
                <span className="flex items-center" key="framer">
                  <span
                    role="img"
                    aria-label="Framer Motion"
                    className="w-4 h-4 mr-2 inline-block bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url('https://cdn.simpleicons.org/framer/0055FF')",
                    }}
                  />
                  <span>Framer Motion</span>
                </span>,
              ]}
            />
            <SkillCard
              icon={<FaPython />}
              title="Backend Development"
              skills={[
                <span className="flex items-center" key="python">
                  <span
                    role="img"
                    aria-label="Python"
                    className="w-4 h-4 mr-2 inline-block bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url('https://cdn.simpleicons.org/python/3776ab')",
                    }}
                  />
                  <span>Python</span>
                </span>,
                <span className="flex items-center" key="flask">
                  <span
                    role="img"
                    aria-label="Flask"
                    className="w-4 h-4 mr-2 inline-block bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url('https://cdn.simpleicons.org/flask/FFFFFF')",
                    }}
                  />
                  <span>Flask</span>
                </span>,
                <span className="flex items-center" key="streamlit">
                  <span
                    role="img"
                    aria-label="Streamlit"
                    className="w-4 h-4 mr-2 inline-block bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url('https://cdn.simpleicons.org/streamlit/ff4b4b')",
                    }}
                  />
                  <span>Streamlit</span>
                </span>,
              ]}
            />
            <SkillCard
              icon={<FaTools />}
              title="Tools & Platforms"
              skills={[
                <span className="flex items-center" key="git">
                  <span
                    role="img"
                    aria-label="Git"
                    className="w-4 h-4 mr-2 inline-block bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url('https://cdn.simpleicons.org/git/f05032')",
                    }}
                  />
                  <span>Git</span>
                </span>,
                <span className="flex items-center" key="github">
                  <span
                    role="img"
                    aria-label="GitHub"
                    className="w-4 h-4 mr-2 inline-block bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url('https://cdn.simpleicons.org/github/FFFFFF')",
                    }}
                  />
                  <span>GitHub</span>
                </span>,
                <span className="flex items-center" key="netlify">
                  <span
                    role="img"
                    aria-label="Netlify"
                    className="w-4 h-4 mr-2 inline-block bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url('https://cdn.simpleicons.org/netlify/00c7b7')",
                    }}
                  />
                  <span>Netlify</span>
                </span>,
                <span className="flex items-center" key="render">
                  <span
                    role="img"
                    aria-label="Render"
                    className="w-4 h-4 mr-2 inline-block bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url('https://cdn.simpleicons.org/render/00b3b3')",
                    }}
                  />
                  <span>Render</span>
                </span>,
                <span className="flex items-center" key="streamlit-cloud">
                  <span
                    role="img"
                    aria-label="Streamlit Community Cloud"
                    className="w-4 h-4 mr-2 inline-block bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url('https://cdn.simpleicons.org/streamlit/ff4b4b')",
                    }}
                  />
                  <span>Streamlit Community Cloud</span>
                </span>,
                <span className="flex items-center" key="vscode">
                  <span
                    role="img"
                    aria-label="Visual Studio Code"
                    className="w-4 h-4 mr-2 inline-block bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url('https://img.icons8.com/color/48/visual-studio-code-2019.png')",
                    }}
                  />
                  <span>Visual Studio Code</span>
                </span>,
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
