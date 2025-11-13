import { useState, useEffect } from 'react'
import { FaHome, FaUser, FaGraduationCap, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'Home', href: '#home', icon: FaHome },
    { name: 'About', href: '#about', icon: FaUser },
    { name: 'Education', href: '#education', icon: FaGraduationCap },
    { name: 'Skills', href: '#skills', icon: FaTools },
    { name: 'Projects', href: '#projects', icon: FaProjectDiagram },
    { name: 'Contact', href: '#contact', icon: FaEnvelope },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100 // A small offset from the top
      let currentActiveSection = ''

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          currentActiveSection = id;
        } else {
          break;
        }
      }

      setActiveSection(currentActiveSection);
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/10 dark:bg-black/10 border-b border-white/20 dark:border-white/10 shadow-2xl shadow-gray-300/50"
      data-aos="fade-down"
      data-aos-duration="800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0" data-aos="fade-right" data-aos-delay="200">
            <h1 className="text-3xl font-bold text-blue-600 drop-shadow-md hover:text-indigo-600 hover:scale-105 cursor-pointer transition-all duration-300">Shivam</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8" data-aos="fade-left" data-aos-delay="400">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleScroll(item.href)}
                className={`rounded-md font-semibold px-3 py-2 transition-all duration-700 ease-in-out ${
                  activeSection === item.href.substring(1)
                    ? 'text-blue-600 bg-blue-100 scale-105'
                    : 'text-gray-400 hover:text-black hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Simple Hamburger Menu Button */}
          <div className="md:hidden" data-aos="fade-left" data-aos-delay="200">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <span className={`block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Professional Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="absolute inset-0 bg-black/60" onClick={() => setIsOpen(false)}></div>
            <div className={`absolute left-0 top-0 h-screen w-80 bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
              {/* Header */}
              <div className="flex items-center p-6 border-b border-gray-200 dark:border-gray-700 h-16">
                <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Shivam</h1>
              </div>

              {/* Menu Items */}
              <div className="py-6">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => handleScroll(item.href)}
                    className={`flex items-center space-x-4 w-full px-6 py-4 text-left transition-all duration-700 ease-in-out group ${
                      activeSection === item.href.substring(1)
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className={`p-2 rounded-lg transition-colors duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'bg-blue-200 dark:bg-blue-800/40'
                        : 'bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40'
                    }`}>
                      <item.icon size={18} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-medium text-lg">{item.name}</span>
                    <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav
