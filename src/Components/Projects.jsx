import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaHandPaper } from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiVite, SiPython, SiRender, SiStreamlit, SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiOpencv } from 'react-icons/si';
import { BiLogoFlask } from 'react-icons/bi';
import todoImage from '../assets/ToDO.png';
import webglIcon from '../assets/WebGl.png';
import infinityCalcImage from '../assets/Calculator.png';
import ttsImage from '../assets/Ganesh-TTS.png';
import pythonpathImage from '../assets/PythonPath.png';
import airDrawImage from '../assets/Air-Ganesh.png';
import portfolioImage from '../assets/Portfolio.png';

const ProjectCard = ({ title, description, techTags, liveLink, githubLink, image }) => {
  const getTechIcon = (tag) => {
    switch (tag) {
      case 'React':
        return <SiReact className="text-blue-400" />;
      case 'Tailwind':
        return <SiTailwindcss className="text-cyan-400" />;
      case 'Vite':
        return <SiVite className="text-yellow-400" />;
      case 'WebGL':
        return <img src={webglIcon} alt="WebGL" className="w-4 h-4 text-green-400" />;
      case 'Python':
        return <SiPython className="text-yellow-400" />;
      case 'Flask':
        return <BiLogoFlask className="text-gray-400" />;
      case 'Render':
        return <SiRender className="text-purple-400" />;
      case 'Streamlit':
        return <SiStreamlit className="text-red-400" />;
      case 'HTML':
        return <SiHtml5 className="text-orange-400" />;
      case 'CSS':
        return <SiCss3 className="text-blue-400" />;
      case 'JavaScript':
        return <SiJavascript className="text-yellow-400" />;
      case 'Bootstrap':
        return <SiBootstrap className="text-purple-400" />;
      case 'MediaPipe':
        return <FaHandPaper className="text-green-400" />;
      case 'OpenCV':
        return <SiOpencv className="text-red-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl overflow-x-hidden shadow-2xl shadow-[0_0_10px_rgba(255,255,255,0.1)] border border-white/30 hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-500 ease-in-out">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-200 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techTags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-1 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
            >
              {getTechIcon(tag)}
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium"
          >
            <FaExternalLinkAlt className="text-sm" />
            View Live
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 font-medium border border-white/20"
          >
            <FaGithub className="text-sm" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = ({ containerRef, className }) => {
  return (
    <section id="projects" ref={containerRef} className={`relative w-full h-full bg-[#101828] ${className}`}>
      <div className="relative z-10 flex flex-col items-center justify-center p-4 py-16 sm:py-20 md:py-24 min-h-screen">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-white" data-aos="fade-down" data-aos-once="false">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
            <ProjectCard
              title="To-Do List App"
              description="A modern, feature-rich to-do list application built with React, Vite, and Tailwind CSS, featuring a dynamic WebGL background and smooth animations."
              techTags={['React', 'Tailwind', 'Vite', 'WebGL']}
              liveLink="https://ganesh-todo-app.netlify.app/"
              githubLink="https://github.com/Ganeshpanda34/ToDO-List-App"
              image={todoImage}
            />
            <ProjectCard
              title="InfinityCalc"
              description="A responsive web-based calculator developed using Python and Flask, offering real-time arithmetic operations through an intuitive GUI. The application is containerized and seamlessly deployed on Render for reliable cloud hosting and accessibility across devices."
              techTags={['Python', 'Flask', 'Render']}
              liveLink="https://flask-smart-calculator.onrender.com/"
              githubLink="https://github.com/Ganeshpanda34/flask-smart-calculator"
              image={infinityCalcImage}
            />
            <ProjectCard
              title="Ganesh's Text to Speech Converter"
              description="A sleek and modern Text-to-Speech (TTS) application built with React and Tailwind CSS. This project features a stunning, responsive UI with dynamic animations and provides a seamless experience for converting text into natural-sounding speech."
              techTags={['React', 'Tailwind', 'Vite']}
              liveLink="https://ganesh-tts.netlify.app/"
              githubLink="https://github.com/Ganeshpanda34/-Ganesh-s-Text-to-Speech-Converter"
              image={ttsImage}
            />
            <ProjectCard
              title="Ganesh's PythonPath"
              description="An interactive web application built with Python and Streamlit to showcase various Python concepts from beginner to advanced levels, deployed on Streamlit Community Cloud."
              techTags={['Python', 'Streamlit']}
              liveLink="https://ganesh-pythonpath.streamlit.app/"
              githubLink="https://github.com/Ganeshpanda34/Ganesh-s-PythonPath"
              image={pythonpathImage}
            />
            <ProjectCard
              title="Ganesh | Air Draw"
              description="An interactive web application that enables users to draw on a virtual canvas using hand-tracking technology. By performing a pinch gesture, users can sketch in real time and export their creations as PNG images."
              techTags={['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'MediaPipe', 'OpenCV']}
              liveLink="https://ganesh-air-draw.netlify.app/"
              githubLink="https://github.com/Ganeshpanda34/Ganesh-Air-draw"
              image={airDrawImage}
            />
            <ProjectCard
              title="Portfolio Website"
              description="A fully responsive and modern personal portfolio website built from scratch using ReactJS, Tailwind CSS, and Vite. Designed to showcase my technical expertise, featured projects, and professional journey with smooth animations and an intuitive UI."
              techTags={['React', 'Tailwind', 'Vite']}
              liveLink="https://ganesh-panda.netlify.app/"
              githubLink="https://github.com/Ganeshpanda34/portfolio-website"
              image={portfolioImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

