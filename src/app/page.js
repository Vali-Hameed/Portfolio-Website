"use client";
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone, ChevronDown, Menu, X,  PlayCircle, XCircle } from 'lucide-react';
import MuxVideoPlayer from '../../components/MuxVideoPlayer.js';



const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

    useEffect(() => {
    // This effect runs once when the component mounts
    const timer = setTimeout(() => {
      setIsHeroVisible(true);
    }, 100); // A small delay to ensure the component is mounted before animating

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

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
  const toggleVideoPlayer = (projectTitle) => {
  setActiveVideo(activeVideo === projectTitle ? null : projectTitle);
};
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    { category: 'Frontend', icon: Globe, items: ['React', 'Next.js', 'Java Swing', 'Tailwind CSS'] },
    { category: 'Backend', icon: Database, items: ['Python', 'PostgreSQL','Spring Boot','Java','FastAPI'] },
    { category: 'Tools', icon: Code, items: ['Git', 'Docker', 'AWS', 'Azure'] }
  ];

  const projects = [
    {
      title: 'UFC Fight Predictor 🤼‍♂️🥊',
      description: 'A machine learning application that uses a logistic regression model to predict UFC fight outcomes and serves the predictions through a containerized FastAPI application.',
      tech: ['Python', 'AWS ECS', 'Docker', 'Scikit-learn', 'Pandas', 'FastAPI', 'Logistic Regression','REST API', 'Machine Learning','Predictive Modeling','Data Preprocessing'],
      github: 'https://github.com/Vali-Hameed/UFC-Fight-Predictor',
      featured: true,
      playbackId: 'QdgqNix7IbZdefjDBcnx4hzmJ102tyzN4NkDE6ZwyHwI',
      image: 'bg-gradient-to-br from-red-500 to-red-800'
    },
    {
      title: 'Tram Network Pathfinding 🚊',
      description: 'Advanced Java application implementing Dijkstra\'s algorithm and custom pathfinding for optimal tram route calculation with GUI visualization and delay simulation.',
      tech: ['Java', 'Swing GUI', 'Dijkstra\'s Algorithm', 'Graph Theory', 'CSV Processing'],
      github: 'https://github.com/Vali-Hameed/Tram-Network-Pathfinding',
      playbackId: 'eCEwI013J008ywsMna6jbJRCuRTor6uhrRNII6J0201ypVQ',
      image: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      featured: false
    },
    {
      title: 'Python Car Racing Game 🏁',
      description: '2D racing game built with Pygame featuring multiple tracks, car selection, competitive mode with tire degradation, and local leaderboards.',
      tech: ['Python', 'Pygame', 'Game Development', 'OOP', 'File I/O'],
      github: 'https://github.com/Vali-Hameed/Python-Car-Game-NEA',
      playbackId: 'wWW02Pk7AvIcbv9n4wbT01Z2m27gBFYI3KHjtZf02ngO58',
      image: 'bg-gradient-to-br from-red-500 to-orange-500'
    }

  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className=" px-6 sm:px-4 lg:px-26">
          <div className="flex justify-between items-left py-4">
      <a 
        href="#home" 
        onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
        className="flex items-center space-x-3"
      >
        {/* This nested structure creates the gradient border effect */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-0.5">
          <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
            <span className="text-sm font-bold text-white">VH</span>
          </div>
        </div>
        <span className="font-bold text-xl text-white hidden sm:block">Vali Hameed</span>
      </a>
            
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
          
          {/* Animated Initials Circle */}
          <div className={`mb-8 transition-all duration-700 ease-out ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-6xl font-bold text-white">VH</span>
              </div>
            </div>
          </div>
          
          {/* Animated Title */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-700 ease-out delay-200 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Vali Hameed
          </h1>
          
          {/* Animated Subtitle */}
          <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-700 ease-out delay-300 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            2nd Year Computer Science Student | Full Stack Developer | Aspiring Software Engineer
          </p>
          
          {/* Animated Social Links */}
          <div className={`flex justify-center space-x-6 mb-12 transition-all duration-700 ease-out delay-500 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a href="mailto:valihameed88@gmail.com" className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://github.com/Vali-Hameed" className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/vali-hameed" className="p-3 bg-blue-700 hover:bg-blue-800 rounded-full transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
          </div>

          {/* Animated Scroll Down Chevron */}
          <button
            onClick={() => scrollToSection('about')}
            className={`animate-bounce transition-opacity duration-700 ease-out delay-700 ${isHeroVisible ? 'opacity-100' : 'opacity-0'}`}
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
          <div className="flex flex-col justify-center items-center text-center">
            <div className="max-w-3xl">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Hello! I am a Computer Science student at Lancaster University, and I am truly passionate about the entire journey of software development,
               from the first spark of an idea to a fully deployed application. For me, the most exciting part of this field is the challenge of 
               solving complex problems and turning those solutions into something tangible and useful.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
          My professional experience at DigbySwift was a fantastic opportunity to dive into the world of mobile development. 
          Working with Dart and Flutter, I got hands-on experience building a cross-platform app, which taught me the importance of writing clean, 
          testable code and managing projects effectively using Git.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
       When I&apos;m not studying, I love to use my skills to explore my personal interests. As a big UFC fan, I was curious if I could predict fight outcomes, 
       which led me to build a machine learning model in Python. By cleaning and analyzing a dataset of over 6,000 fights, 
       I was able to train a model that achieved a 66% accuracy rate. I&apos;ve also enjoyed bringing classic algorithms to life by creating a 
       pathfinding visualizer in Java that can find the shortest route through a tram network using Dijkstra&apos;s algorithm.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
     I am always looking for new challenges and ways to grow as a developer. I am excited by the prospect of bringing my mix of academic knowledge and practical, hands-on experience to a new and challenging software engineering role.
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => window.open('/Vali_Hameed_CV.pdf', '_blank')}
                className=" items-center justify-center px-6 py-3  border border-transparent  font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-offset-gray-800 focus:ring-indigo-500 transition-transform transform hover:scale-105 duration-300 ease-in-out">
                View CV
                
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-lg transition-colors hover:scale-105 duration-300 ease-in-out"
              >
                Get In Touch
              </button>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <div
          key={index}
          className={`bg-gray-800 rounded-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 ${
            project.featured ? 'md:col-span-2' : ''
          }`}
        >
          {/* Video Player */}
          {activeVideo === project.title && project.playbackId ? (
            <div className="p-4">
              <MuxVideoPlayer playbackId={project.playbackId} />
            </div>
          ) : (
            <div
              className={`h-48 ${project.image} flex items-center justify-center relative cursor-pointer`}
              onClick={() =>
                project.playbackId && toggleVideoPlayer(project.title)
              }
            >
              {project.featured && (
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              )}
              <h3 className="text-2xl font-bold text-white text-center">
                {project.title}
              </h3>
              {project.playbackId && (
                <PlayCircle className="absolute bottom-4 right-4 text-white" size={32} />
              )}
            </div>
          )}

          {/* Project Details */}
          <div className="p-6">
            <p className="text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                >
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
              {project.playbackId && activeVideo !== project.title && (
                <button
                  onClick={() => toggleVideoPlayer(project.title)}
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <PlayCircle size={20} className="mr-2" />
                  Live Demo
                </button>
              )}
              {activeVideo === project.title && (
                <button
                  onClick={() => toggleVideoPlayer(project.title)}
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <XCircle size={20} className="mr-2" />
                  Close Demo
                </button>
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
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting projects. 
            Whether you&apos;re a recruiter or looking to collaborate, let&apos;s connect!
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

         
        </div>
      </section>
          <div className="max-w-xl mx-auto mt-20 mb-20 px-4">
      <form
        action="https://formspree.io/f/xyzdngel" // <-- IMPORTANT: REPLACE THIS
        method="POST"
        // Form styling: adds vertical spacing, background, padding, rounded corners, and a shadow.
        className="space-y-6  bg-gray-800 p-8 rounded-lg shadow-md"
      >
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">
          Get In Touch
        </h2>
        
        {/* Email Input Field */}
        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-medium  text-gray-300 mb-2"
          >
            Your Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            // Styling for the input field: full width, padding, border, rounded corners, and focus states.
            className="w-full px-4 py-2 border  border-gray-600 rounded-md  bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>
                {/* Subject Input Field */}
        <div>
          <label 
            htmlFor="subject" 
            className="block text-sm font-medium  text-gray-300 mb-2"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            required
            placeholder="Re:"
            // Styling for the input field: full width, padding, border, rounded corners, and focus states.
            className="w-full px-4 py-2 border  border-gray-600 rounded-md  bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>
        
        {/* Message Text Area */}
        <div>
          <label 
            htmlFor="message" 
            className="block text-sm font-medium  text-gray-300 mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4" // Sets a default height for the text area.
            required
            placeholder="Leave your message here..."
            // Similar styling to the input field.
            className="w-full px-4 py-2 border  border-gray-600 rounded-md  bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          ></textarea>
        </div>
        
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            // Styling for the button to match the "Download CV" button theme.
            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-offset-gray-800 focus:ring-indigo-500 transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2026 Vali Hameed<br /> 
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;