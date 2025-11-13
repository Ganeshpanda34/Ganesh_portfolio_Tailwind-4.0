import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    form_subject: '',
    message: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent double submission
    setIsSubmitting(true);
    const data = {
      ...formData,
      access_key: 'de117e27-5032-423e-849e-d50b911a7af2',
      subject: 'New Contact Form Submission from Portfolio',
      from_name: "Ganesh's Portfolio"
    };
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        setShowModal(true);
        setFormData({ name: '', email: '', form_subject: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch {
      alert('Error sending message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0F172A] overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-12 sm:mb-16 text-3xl sm:text-4xl font-bold text-white font-heading" data-aos="fade-down">
          Contact <span className="text-cyan-400">Me</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:col-start-2" data-aos="fade-right">
            <h4 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-heading">Get in Touch</h4>
            <div className="flex items-start gap-4 mb-6">
              <FaMapMarkerAlt className="text-cyan-400 text-2xl mt-1" />
              <div>
                <h5 className="text-lg font-semibold text-white font-heading">Location</h5>
                <a href="https://www.google.com/maps/place/Buddha+Vihar,+Bhadrak,+Odisha+756100" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">Bhadrak, Odisha, India</a>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <FaEnvelope className="text-cyan-400 text-2xl mt-1" />
              <div>
                <h5 className="text-lg font-semibold text-white font-heading">Email</h5>
                <a href="mailto:roy862452@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">roy862452@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <FaPhone className="text-cyan-400 text-2xl mt-1" />
              <div>
                <h5 className="text-lg font-semibold text-white font-heading">Phone</h5>
                <a href="tel:+918249873663" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">+91 8249873663</a>
              </div>
            </div>
            <div className="mt-8">
              <h5 className="text-xl font-semibold text-white mb-4 font-heading">Follow Me</h5>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/GaneshPanda34" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-2xl hover:text-cyan-400 transition-all duration-300 hover:scale-110"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/dev-roy-81319a378" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-2xl hover:text-cyan-400 transition-all duration-300 hover:scale-110"><FaLinkedin /></a>
                <a href="https://twitter.com/@GaneshPanda34" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-2xl hover:text-cyan-400 transition-all duration-300 hover:scale-110"><FaTwitter /></a>
                <a href="https://www.instagram.com/ganesh_panda69" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-2xl hover:text-cyan-400 transition-all duration-300 hover:scale-110"><FaInstagram /></a>
                <a href="https://wa.me/8249873663" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-2xl hover:text-cyan-400 transition-all duration-300 hover:scale-110"><FaWhatsapp /></a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 mt-12 lg:mt-0" data-aos="fade-left" data-aos-delay="200">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 text-sm font-medium">Name</label>
                  <input id="name" name="name" placeholder="e.g. John Doe" required className="w-full bg-gray-800/50 border rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 border-gray-700" type="text" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">Email</label>
                  <input id="email" name="email" placeholder="e.g. john.doe@example.com" required className="w-full bg-gray-800/50 border rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 border-gray-700" type="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="form_subject" className="block text-gray-300 mb-2 text-sm font-medium">Subject</label>
                  <input id="form_subject" name="form_subject" placeholder="e.g. Project Inquiry" required className="w-full bg-gray-800/50 border rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 border-gray-700" type="text" value={formData.form_subject} onChange={handleChange} />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-medium">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Hello, I'd like to discuss..." required className="w-full bg-gray-800/50 border rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 border-gray-700" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="inline-flex items-center justify-center gap-3 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/20 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed">
                    <span>Send Message</span>
                    <FaPaperPlane />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Success!</h3>
            <p className="text-gray-700 mb-6">Your message has been sent successfully.</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
