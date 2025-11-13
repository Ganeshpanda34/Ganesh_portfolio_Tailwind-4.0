import { TypeAnimation } from 'react-type-animation';
import profileImage from '../assets/Profile-image.png'; // Assuming you have a profile image in assets

const Home = () => {
  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16 relative overflow-hidden overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 order-2 lg:order-1" data-aos="fade-right" data-aos-duration="1000">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white" data-aos="fade-up" data-aos-delay="200">
                Hi, I'm <span className="text-blue-600">Ganesh</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-600 via-green-600 to-red-600 bg-clip-text text-transparent" data-aos="fade-up" data-aos-delay="400">
                <TypeAnimation
                  sequence={[
                    'Python Developer',
                    2000,
                    'React JS Developer',
                    2000,
                    'Prompt Engineer',
                    2000,
                    'Vibe Coder',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                From vision to launch, I lead web projects that blend creativity with engineering excellence. Let's collaborate to turn your boldest ideas into high-impact digital realities.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="400">
                <button
                  onClick={() => handleScroll('#about')}
                  className="px-6 py-2 md:px-8 md:py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                >
                  Profile Summary
                </button>
                <button
                  onClick={() => handleScroll('#contact')}
                  className="px-6 py-2 md:px-8 md:py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  data-aos="zoom-in"
                  data-aos-delay="800"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700" data-aos="zoom-in" data-aos-delay="500">
                <img
                  src={profileImage}
                  alt="Ganesh - Python Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse" data-aos="fade-in" data-aos-delay="700"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-500 rounded-full opacity-30 animate-pulse delay-1000" data-aos="fade-in" data-aos-delay="900"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
