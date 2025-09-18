import React, { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:mariaphilipj@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      label: "Email",
      value: "mariaphilipj@gmail.com",
      href: "mailto:mariaphilipj@gmail.com"
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      label: "Phone",
      value: "(470) 546-2777",
      href: "tel:4705462777"
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      label: "LinkedIn",
      value: "maria-jothish",
      href: "https://www.linkedin.com/in/maria-jothish"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects, or just having a great conversation about technology and AI. 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8">
                Whether you're looking to collaborate on a project, discuss opportunities, or just want to chat about the latest in AI and technology, 
                I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/30 transition-all duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">{info.label}</div>
                    <div className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Currently Open To</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Full-time opportunities post-graduation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>AI and automation consulting projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Research collaborations</span>
                </div>

              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 resize-none transition-all duration-300"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>

            <p className="text-gray-400 text-sm mt-4 text-center">
              This form will open your email client with the message pre-filled
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;