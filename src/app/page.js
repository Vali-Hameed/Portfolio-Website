"use client";
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    { category: 'Frontend', icon: Globe, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', icon: Database, items: ['Node.js', 'Python', 'PostgreSQL','Spring Boot','Java'] },
    { category: 'Tools', icon: Code, items: ['Git', 'Docker', 'AWS', 'Azure'] }
  ];

  const projects = [
    {
      title: 'Tram Network Pathfinding',
      description: 'Advanced Java application implementing Dijkstra\'s algorithm and custom pathfinding for optimal tram route calculation with GUI visualization and delay simulation.',
      tech: ['Java', 'Swing GUI', 'Dijkstra\'s Algorithm', 'Graph Theory', 'CSV Processing'],
      github: 'https://github.com/Vali-Hameed/Tram-Network-Pathfinding',
      live: '#',
      image: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      featured: true
    },
    {
      title: 'Python Car Racing Game',
      description: '2D racing game built with Pygame featuring multiple tracks, car selection, competitive mode with tire degradation, and local leaderboards.',
      tech: ['Python', 'Pygame', 'Game Development', 'OOP', 'File I/O'],
      github: 'https://github.com/Vali-Hameed/Python-Car-Game-NEA',
      live: '#',
      image: 'bg-gradient-to-br from-red-500 to-orange-500'
    }

  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Vali Hameed
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-blue-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative z-10 text-center px-4">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-6xl font-bold text-white">VH</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Vali Hameed
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            2nd Year Computer Science Student | Software Engineer | Problem Solver
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="mailto:vali.hameed@email.com" className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://github.com/Vali-Hameed" className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/vali-hameed" className="p-3 bg-blue-700 hover:bg-blue-800 rounded-full transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ChevronDown size={32} className="text-gray-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate software engineer with over 5 years of experience building scalable web applications 
                and mobile solutions. I thrive on solving complex problems and turning innovative ideas into reality.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My expertise spans the full development stack, from creating intuitive user interfaces to designing 
                robust backend architectures. I'm constantly learning new technologies and best practices to stay at 
                the forefront of software development.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors">
                  Download Resume
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Get In Touch
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div key={skill.category} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors">
                <div className="flex items-center mb-4">
                  <skill.icon className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 ${project.featured ? 'md:col-span-2' : ''}`}>
                <div className={`h-48 ${project.image} flex items-center justify-center relative`}>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} className="mr-2" />
                      Code
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Whether you're a recruiter or looking to collaborate, let's connect!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              
              href="mailto:valihameed88@gmail.com"
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors group"
            >
              <Mail className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-400">valihameed88@gmail.com</p>
            </a>
            <a
              href="https://www.linkedin.com/in/vali-hameed"
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400">Connect with me</p>
            </a>
            <a
              href="https://github.com/Vali-Hameed"
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">View my work</p>
            </a>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to start a project?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how we can bring your ideas to life with cutting-edge technology.
            </p>
            <a
              href="mailto:vali.hameed@email.com"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Vali Hameed. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;