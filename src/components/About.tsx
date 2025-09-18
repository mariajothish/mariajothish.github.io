import React from 'react';
import mariaHeadshot from '../assets/maria-headshot.png';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={mariaHeadshot}
                alt="Maria Jothish"
                className="w-80 h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl"></div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <h3
                className="text-2xl font-bold text-white"
                style={{
                  fontWeight: "bold"
                }}>Education</h3>
              <p className="text-gray-300 text-lg leading-relaxed">I'm a senior Computer Science student at Georgia Tech, specializing in Intelligence and Information Internetworks. My journey in technology is driven by a fascination with artificial intelligence and its potential to transform how we work and live.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-400">What I Do</h4>
              <p className="text-gray-300 leading-relaxed">
                Currently working as a Test Automation Engineer Intern at Cox Enterprises, where I've developed full-stack solutions 
                that reduced test data generation time by 40% and operational costs by 66%. I'm also an active AI researcher, 
                developing innovative applications like StudyBuzz and AI-powered chatbots.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-400">My Passion</h4>
              <p className="text-gray-300 leading-relaxed">
                I believe in the power of technology to solve complex problems and improve people's lives. Whether it's building 
                intelligent matching algorithms for students or creating automated testing solutions for enterprises, I'm always 
                looking for ways to make technology more accessible and effective.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;