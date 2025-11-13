import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 sm:py-16 bg-gray-900 text-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="text-left lg:col-span-2" data-aos="fade-up">
            <div className="text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text inline-block drop-shadow-[0_1px_2px_rgba(0,255,255,0.3)]">
              Ganesh Prasad Panda
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              I don't build websites – I craft magnetic digital experiences that pull users in and don't let go. Let's create something unforgettable⚡
            </p>
            <div className="flex flex-wrap justify-start gap-5">
              <a href="https://github.com/GaneshPanda34" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-2xl">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/dev-roy-81319a378" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-2xl">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/@GaneshPanda34" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-2xl">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/ganesh_panda69" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-2xl">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="text-left" data-aos="fade-up" data-aos-delay="100">
            <h5 className="text-lg font-semibold mb-4 font-heading">Quick Links</h5>
            <ul>
              <li className="mb-2">
                <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors no-underline">Home</a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors no-underline">About</a>
              </li>
              <li className="mb-2">
                <a href="#education" className="text-gray-400 hover:text-cyan-400 transition-colors no-underline">Education</a>
              </li>
              <li className="mb-2">
                <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors no-underline">Skills</a>
              </li>
              <li className="mb-2">
                <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors no-underline">Projects</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors no-underline">Contact</a>
              </li>
            </ul>
          </div>
          <div className="text-left" data-aos="fade-up" data-aos-delay="200">
            <h5 className="text-lg font-semibold mb-4 font-heading">Services</h5>
            <ul className="space-y-2">
              <li className="text-gray-400">Web Development</li>
              <li className="text-gray-400">UI/UX Design</li>
              <li className="text-gray-400">Responsive Design with Mobile-first approach</li>
              <li className="text-gray-400">Vibe Coding</li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-left md:text-center text-gray-500">
          <p className="mb-0">© 2025 <span className="text-cyan-400">Ganesh</span>. All rights reserved.</p>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg transform hover:scale-110 hover:shadow-cyan-500/40 transition-all duration-300"
        aria-label="Go to top"
      >
        <i className="fa-solid fa-arrow-up h-5 w-5"></i>
      </button>
    </footer>
  );
};

export default Footer;
