import React from 'react';
import { CodeBracketIcon, ShareIcon, ShieldCheckIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Microsoft Copilot Agent Project",
      description: "Developed a full-stack solution to automate data extraction and  transformation of data in Workday Excel reports by deploying a FastAPI backend on Render and integrating a Microsoft Copilot Studio AI agent frontend.",
      icon: <CpuChipIcon className="w-8 h-8" />,
      achievements: [
        "Reduced test data generation time by 40%",
        "Integrated Microsoft Copilot Studio AI agent",
        "Deployed FastAPI backend on Render",
        "Automated Workday Excel report processing"
      ],
      technologies: ["FastAPI", "Microsoft Copilot Studio", "Render", "Python", "AI Integration"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "TI-Share Project",
      description: "Collaborated in a team of 5 to improve Iris, a decentralized, peer-to-peer threat intelligence sharing system. Redesigned architecture to chunk file transfers, preventing malicious peers from sending entire malware to local peers.",
      icon: <ShareIcon className="w-8 h-8" />,
      achievements: [
        "Redesigned architecture for secure file chunking",
        "Updated Distributed Hash Table for metadata display",
        "Enhanced peer-to-peer security",
        "Prevented malware transmission"
      ],
      technologies: ["Distributed Systems", "P2P Networks", "Security", "Python", "DHT"],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Showcasing innovative solutions in AI integration, automation, and cybersecurity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white`}>
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-blue-400">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <ShieldCheckIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-purple-400">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.title === "Microsoft Copilot Agent Project" && (
                  <div className="pt-4">
                    <a
                      href="https://github.com/mariajothish/fastapi_excel_agent"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      <CodeBracketIcon className="w-5 h-5" />
                      Code
                    </a>
                  </div>
                )}

                {project.title === "TI-Share Project" && (
                  <div className="pt-4 flex flex-wrap gap-3">
                    <a
                      href="https://github.com/fizzyforever101/iris"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      <CodeBracketIcon className="w-5 h-5" />
                      Code
                    </a>
                    <a
                      href="/documents/CS-4675-Proposal.pdf"
                      download="CS-4675-Proposal.pdf"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      <ShareIcon className="w-5 h-5" />
                      Proposal
                    </a>
                    <a
                      href="/documents/TI-SHARE-Final-Presentation.pdf"
                      download="TI-SHARE-Final-Presentation.pdf"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      <ShieldCheckIcon className="w-5 h-5" />
                      Demo
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <CodeBracketIcon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Other Notable Projects</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-400">StudyBuzz</h4>
                <p className="text-gray-300 text-sm">AI-powered study group matching app using research-based algorithms and Ollama-Mistral integration</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-400">RPM Test Solving AI Agent</h4>
                <p className="text-gray-300 text-sm">AI agent that solves Raven's Progressive Matrices using Python, Pillow, and OpenCV</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-400">Delivery Service Database</h4>
                <p className="text-gray-300 text-sm">End-to-end database solution with EERD design and normalized relational schema</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-red-400">D&D Game</h4>
                <p className="text-gray-300 text-sm">Team-developed Dungeons and Dragons game using Java and Scrum methodology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;