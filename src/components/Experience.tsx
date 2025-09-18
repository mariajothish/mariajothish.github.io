import React from 'react';
import { BriefcaseIcon, AcademicCapIcon, BuildingOfficeIcon, UsersIcon } from '@heroicons/react/24/outline';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Test Automation Engineer Intern",
      company: "Cox Enterprises",
      location: "Sandy Springs, Georgia",
      period: "May 2025 – Present",
      type: "Internship",
      icon: <BriefcaseIcon className="w-6 h-6" />,
      achievements: [
        "Developed a comprehensive full-stack automation solution that reduced test data generation time by 40%",
        "Led cross-divisional collaboration resulting in 66% operational cost reduction through Service Blueprint implementation",
        "Achieved Tosca Certification while delivering critical automation scripts for enterprise-scale testing infrastructure",
        "Conducted performance analysis of 50+ automation scripts, demonstrating 86% manual testing reduction with formal ROI documentation"
      ],
      technologies: ["FastAPI", "Microsoft Copilot Studio", "Tosca", "Python", "Render", "Service Design"]
    },
    {
      title: "Undergrad AI Researcher",
      company: "Intelligent Platform for Crowdsourcing, GT VIP",
      location: "Atlanta, Georgia",
      period: "Jan 2024 – May 2025",
      type: "Research",
      icon: <AcademicCapIcon className="w-6 h-6" />,
      achievements: [
        "Created StudyBuzz, an innovative AI-powered platform utilizing research-validated algorithms for optimal student matching",
        "Architected full-stack solution with Python backend and responsive web frontend, emphasizing scalability and user experience",
        "Pioneered dynamic algorithm enhancement through Ollama-Mistral integration, enabling real-time performance-based adjustments",
        "Engineered intelligent chatbot leveraging GPT-3.5 Turbo for automated diagram generation from complex legal documentation"
      ],
      technologies: ["Python", "JavaScript", "HTML", "CSS", "OpenAI API", "Ollama-Mistral", "Figma", "Chatbase"]
    },
    {
      title: "Employee, Front-of-house",
      company: "Chick-fil-A",
      location: "Alpharetta, Georgia",
      period: "June 2022 – Aug 2022",
      type: "Part-time",
      icon: <UsersIcon className="w-6 h-6" />,
      achievements: [
        "Delivered exceptional customer service in high-volume environment, consistently exceeding service standards and resolution rates",
        "Demonstrated leadership through peer mentorship and collaborative problem-solving while maintaining operational excellence"
      ],
      technologies: ["Customer Service", "Team Collaboration", "Problem Solving"]
    },
    {
      title: "Employee, Grader",
      company: "Eye Level",
      location: "Johns Creek, Georgia",
      period: "Sept 2021 – Feb 2022",
      type: "Part-time",
      icon: <BuildingOfficeIcon className="w-6 h-6" />,
      achievements: [
        "Conducted comprehensive assessment of student assignments with meticulous attention to detail and developmental feedback",
        "Enhanced educational outcomes through strategic assessment design and personalized improvement recommendations"
      ],
      technologies: ["Educational Assessment", "Attention to Detail", "Feedback Delivery"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Research': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Part-time': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="experience" className="min-h-screen py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A chronological journey through my professional growth in technology, research, and customer service
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-1.5 md:-translate-x-1.5 mt-6"></div>

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 text-left ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
                        {exp.icon}
                      </div>
                      <div>
                        <span className={`px-3 py-1 text-xs border rounded-full ${getTypeColor(exp.type)}`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                      {exp.title}
                    </h3>
                    
                    <div className="text-blue-400 font-semibold mb-1">{exp.company}</div>
                    <div className="text-gray-400 text-sm mb-2">{exp.location} • {exp.period}</div>

                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white/10 text-white text-xs rounded border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto">
            <AcademicCapIcon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Education</h3>
            <div className="text-blue-400 font-semibold">Georgia Institute of Technology</div>
            <div className="text-gray-300">Bachelor of Science in Computer Science</div>
            <div className="text-gray-400 text-sm">Concentration: Intelligence and Information Internetworks • Expected May 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;