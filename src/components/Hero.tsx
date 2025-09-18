import React from 'react';
import { ChevronDownIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/MariaJ_Resume.pdf';
    link.download = 'Maria_Jothish_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
      <div className="text-center space-y-8 max-w-4xl mx-auto px-6">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Maria Jothish
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 font-light">Computer Science Student</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">I am passionate about leveraging artificial intelligence and automation to solve problems and optimize solutions. Currently pursuing my Bachelor's in Computer Science at Georgia Tech with a focus on Intelligence and Information Internetworks.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={downloadResume}
            className="group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <DocumentArrowDownIcon className="w-5 h-5 group-hover:animate-bounce" />
            Download Resume
          </button>
          
          <button
            onClick={scrollToContact}
            className="flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            Get in Touch
            <ChevronDownIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDownIcon className="w-8 h-8 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;