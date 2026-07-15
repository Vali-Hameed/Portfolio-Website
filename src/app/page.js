"use client";
import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Globe,
  Menu,
  X,
  PlayCircle,
  XCircle,
  Activity,
  ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MuxVideoPlayer from "@/components/MuxVideoPlayer";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeroVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleVideoPlayer = (projectTitle) => {
    setActiveVideo(activeVideo === projectTitle ? null : projectTitle);
  };

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false); // Close the menu immediately

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80; // Offset for the fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  const handleProjectMediaKeyDown = (event, projectTitle, hasPlayback) => {
    if (!hasPlayback) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleVideoPlayer(projectTitle);
    }
  };

  const skills = [
    { category: "Frontend", icon: Globe, items: ["React", "Next.js", "Java Swing", "Tailwind CSS", "TypeScript", "Shadcn UI", "React Native"] },
    { category: "Backend", icon: Database, items: ["Python", "Spring Boot", "Java", "FastAPI", "Django", "Haskell", "Node.js", "Flask"] },
    { category: "Tools & Infrastructure", icon: Code, items: ["Git", "Docker", "AWS", "Azure", "Oracle Cloud", "MongoDB", "PostgreSQL", "MySQL"] }
  ];

  const projects = [
    {
      title: "Fight Picks 🤼‍♂️🥊 ",
      description: "A full-stack, microservices-oriented platform for UFC fight analysis. It includes a Next.js frontend, Spring Boot REST API, Python data scraper, and a FastAPI ML service using Gradient Boosting, currently tracking 66% prediction accuracy.",
      tech: ["Next.js", "TypeScript", "Spring Boot", "Java", "Python", "FastAPI", "Scikit-Learn", "Gradient Boosting", "Docker", "AWS ECS", "PostgreSQL", "Oracle VPS"],
      github: "https://github.com/Vali-Hameed/UFC-Fight-Predictor-Website",
      featured: true,
      playbackId: "01500v4x01zg75C02qtqZXtLqJwG4SeUdw2sbS00XqHRO8q00",
      image: "bg-gradient-to-br from-purple-800 to-indigo-950",
      link: "https://fightpicks.net"
    },
    {
      title: "Orbital Risk 🚀",
      description: "A 3D launch-window optimisation platform combining debris exposure modelling with machine-learned weather risk scoring. Built and shipped during Leeds Hack 2026, where it won runner-up 🥈 in the Parallax challenge.",
      tech: ["Python", "Next.js", "TypeScript", "React", "Scikit-Learn", "FastAPI", "Machine Learning", "Pandas"],
      github: "https://github.com/akaltemamey/leedshack2026-prototype",
      featured: true,
      playbackId: "H01zheI02jcSjaNxqBWvcMFzshysbc4IOx029i5UEjDBaM",
      image: "bg-gradient-to-br from-purple-800 to-indigo-950",
      link: "https://leedshack2026-prototype.vercel.app/"
    },
    {
      title: "Penalty Shootout Predictor ⚽",
      description: "Bayesian Monte Carlo shootout predictor built with a Next.js frontend and FastAPI backend, using open football data to estimate scorer and keeper tendencies.",
      tech: ["Next.js", "FastAPI", "Python", "Monte Carlo", "Bayesian Inference", "StatsBomb"],
      github: "https://github.com/Vali-Hameed/Penalty-Shootout-Predictor",
      featured: false,
      playbackId: "TJqX2iFsXFggJ02UdAEjy6wBON3D7x3RmjoorLh6f02h8",
      image: "bg-gradient-to-br from-[#1e0b2b] to-purple-900 border border-purple-800/50",
      link: "https://penalty-shootout-predictor.vercel.app/"
    },
    {
      title: "Transport for Lancashire 🚆",
      description: "A multimodal journey planner for the Lancashire region. The application uses a local OpenTripPlanner (OTP) service for route calculation with a Flask/SQLAlchemy backend and a React/Vite frontend.",
      tech: ["React", "Flask", "Python", "SQLAlchemy", "OpenTripPlanner", "Docker", "NaPTAN", "OpenStreetMap", "GTFS"],
      playbackId: "xU2v9A82gltAX00n4UTSvkkcpCgzyq9Bt00K7q3Ay6ZL00",
      image: "bg-gradient-to-br from-[#1e0b2b] to-purple-900 border border-purple-800/50",
      featured: false
    },
    {
      title: "ML Classifiers from Scratch 🧠",
      description: "Developed K-Nearest Neighbors, Naive Bayes, and Decision Tree classification algorithms entirely from scratch using pure mathematics, without relying on high-level ML libraries. The project applies custom distance metrics, probability density functions, and entropy-based splitting logic to classify the UCI Glass dataset, showcasing a deep understanding of core algorithmic foundations.",
      tech: ["Machine Learning", "Python", "Pure Mathematics", "Algorithms", "Data Analysis"],
      github: "https://github.com/vali-hameed/knn-nb-and-dt",
      image: "bg-gradient-to-br from-[#1e0b2b] to-purple-900 border border-purple-800/50",
      featured: false
    },
    {
      title: "Parcel Sort CLI 📦",
      description: "A functional Haskell command-line application that parses, classifies, custom-sorts, and greedily bundles mail items according to strict dimension and weight constraints.",
      tech: ["Haskell", "Functional Programming", "QuickSort", "Greedy Algorithms", "File I/O"],
      github: "https://github.com/vali-hameed/parcel-sort-haskell",
      image: "bg-gradient-to-br from-[#1e0b2b] to-purple-900 border border-purple-800/50",
      featured: false
    },
    {
      title: "Tram Network Pathfinding 🚋",
      description: "Advanced Java application implementing Dijkstra's algorithm and custom pathfinding for optimal tram route calculation with GUI visualization and delay simulation.",
      tech: ["Java", "Swing GUI", "Dijkstra's Algorithm", "Graph Theory", "CSV Processing"],
      github: "https://github.com/Vali-Hameed/Tram-Network-Pathfinding",
      playbackId: "eCEwI013J008ywsMna6jbJRCuRTor6uhrRNII6J0201ypVQ",
      image: "bg-gradient-to-br from-[#1e0b2b] to-purple-900 border border-purple-800/50",
      featured: false
    },
    {
      title: "Python Car Racing Game 🏁",
      description: "2D racing game built with Pygame featuring multiple tracks, car selection, competitive mode with tire degradation, and local leaderboards.",
      tech: ["Python", "Pygame", "Game Development", "OOP", "File I/O"],
      github: "https://github.com/Vali-Hameed/Python-Car-Game-NEA",
      playbackId: "wWW02Pk7AvIcbv9n4wbT01Z2m27gBFYI3KHjtZf02ngO58",
      image: "bg-gradient-to-br from-[#1e0b2b] to-purple-900 border border-purple-800/50"
    },

  ];

  return (
    <div className="min-h-screen bg-[#06000c] text-slate-200 selection:bg-purple-500/30">

      {/* Background Graphic - Thai rope pattern / Matrix feel */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #c084fc 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#06000c]/80 backdrop-blur-md z-50 border-b border-purple-900/40">
        <div className="px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center py-4">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
              aria-label="Go to home section"
              className="flex items-center space-x-3 group"
            >
              <div className="w-10 h-10 rounded-sm bg-purple-600/20 border border-purple-500/50 flex flex-col items-center justify-center transform rotate-3 transition-transform group-hover:rotate-0">
                <span className="text-sm font-black tracking-tighter text-purple-400">VH</span>
              </div>
              <span className="font-bold text-xl uppercase tracking-widest text-white hidden sm:block">
                Vali Hameed
              </span>
            </a>

            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm uppercase tracking-wider font-semibold hover:text-purple-400 transition-colors ${activeSection === item.toLowerCase() ? "text-purple-400 border-b-2 border-purple-500" : "text-slate-400"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-slate-300 hover:text-purple-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#0A0512] border-t border-purple-900/40 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block px-3 py-3 uppercase tracking-wider text-sm font-semibold text-slate-400 hover:text-purple-400 hover:bg-purple-900/20 rounded-md transition-colors w-full text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 pt-16">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center w-full max-w-4xl mx-auto z-10"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium tracking-wide">
              <Activity size={16} />
              <span>Discipline in Code. Precision in Delivery.</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white leading-[0.95]">
              VALI <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-indigo-600">HAMEED</span>
            </h1>

            <p className="text-base sm:text-lg md:text-2xl text-slate-400 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              Software Engineer | Full-Stack Developer | Applied Machine Learning | MMA Enthusiast
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-none border border-purple-500 uppercase tracking-widest font-bold w-full sm:w-auto px-8 py-6 h-auto"
              >
                View My Work
              </Button>
              <div className="flex space-x-4">
                <a href="mailto:valihameed88@gmail.com" aria-label="Email Vali Hameed" className="p-4 border border-purple-900/50 bg-[#0A0512] hover:bg-purple-900/30 hover:border-purple-500/50 transition-all text-slate-300">
                  <Mail size={20} />
                </a>
                <a href="https://github.com/Vali-Hameed" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile" className="p-4 border border-purple-900/50 bg-[#0A0512] hover:bg-purple-900/30 hover:border-purple-500/50 transition-all text-slate-300">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/vali-hameed" target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn profile" className="p-4 border border-purple-900/50 bg-[#0A0512] hover:bg-purple-900/30 hover:border-purple-500/50 transition-all text-slate-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Scroll Down Chevron */}
          <motion.button
            onClick={() => scrollToSection('about')}
            initial={{ opacity: 0 }}
            animate={isHeroVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            aria-label="Scroll to about section"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-purple-400 hover:text-purple-300 transition-colors cursor-pointer z-20"
          >
            <ChevronDown size={40} />
          </motion.button>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-2">My Journey</h2>
              <div className="h-1 w-20 bg-purple-600 mb-6" />
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">About Me</h3>
            </div>

            <div className="bg-[#0A0512] border border-purple-900/30 p-6 sm:p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.05] pointer-events-none">
                <svg className="w-64 h-64" viewBox="0 0 24 24" fill="currentColor">
                  {/* Subtle martial arts touch/ abstract shape */}
                  <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5z" />
                </svg>
              </div>

              <div className="space-y-6 text-slate-300 text-lg relative z-10 leading-relaxed font-light">
                <p>
                  Hello! I am a Computer Science student at Lancaster University, expecting a First Class Honours degree.
                  I am truly passionate about the entire journey of software development, from the first spark of an idea to a fully deployed application.
                  For me, the most exciting part of this field is the challenge of solving complex problems and turning those solutions into tangible, scalable products that deliver real user value.
                </p>
                <p>
                  My professional experience is defined by a mix of entrepreneurial leadership and hands-on engineering.
                  I was the Co-Founder and Lead Engineer at <a href="https://www.linkedin.com/company/picky-eater/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline font-semibold">Picky Eater</a>, where I led the development of a web and mobile application using Django, React, and React Native while also owning roadmap planning and CI/CD pipelines.
                  Previously, I worked as a Software Engineering Intern at <a href="https://www.digbyswift.com/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline font-semibold">DigbySwift</a>, where I gained experience in mobile development with Dart and Flutter.
                </p>
                <p>
                  When I&apos;m not studying, I love to use my skills to explore personal interests.
                  As a big MMA fan (Muay Thai & Kickboxing enthusiast), I challenged myself to build <a href="https://fightpicks.net" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline font-semibold">Fight Picks</a>, a full-stack microservices platform for UFC fight analysis. The architecture includes a Next.js frontend, a secure Spring Boot REST API, an automated Python data scraper, and a FastAPI machine learning service powered by a Gradient Boosting model that tracks a 66% accuracy rate on fight outcomes.
                </p>
                <p>
                  I am always eager to connect with like-minded individuals, whether it&apos;s for collaboration, mentorship, or just to chat about the latest in tech and MMA.
                  Feel free to reach out if you want to discuss potential opportunities or just want to say hi!
                </p>

              </div>

              <div className="mt-12 flex flex-wrap gap-4 relative z-10">
                <Button
                  onClick={() => window.open("/Vali_Hameed_CV.pdf", "_blank")}
                  className="bg-white hover:bg-slate-200 text-black border-none uppercase tracking-widest font-bold rounded-none px-8 py-6 h-auto"
                >
                  View CV
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white uppercase tracking-widest font-bold rounded-none px-8 py-6 h-auto"
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 bg-[#0A0512]/50 border-y border-purple-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-2">Arsenal</h2>
              <div className="h-1 w-20 bg-purple-600 mx-auto mb-6" />
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">Skills & Tech</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
              {skills.map((skill, idx) => (
                <Card key={idx} className="bg-[#0f081c] border-purple-900/30 rounded-none">
                  <CardHeader className="flex flex-row items-center space-y-0 gap-4 border-b border-purple-900/30 pb-4">
                    <div className="p-3 bg-purple-900/20">
                      <skill.icon className="text-purple-400" size={24} />
                    </div>
                    <CardTitle className="text-xl font-bold uppercase tracking-wider text-slate-200">{skill.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <Badge key={item} variant="secondary" className="bg-purple-900/20 text-purple-200 hover:bg-purple-800/40 rounded-sm font-medium border border-purple-800/30 px-3 py-1">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-2">Execution</h2>
              <div className="h-1 w-20 bg-purple-600 mb-6" />
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">Featured Projects</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={`bg-[#0A0512] border border-purple-900/30 overflow-hidden rounded-none ${project.featured ? "md:col-span-2" : ""
                    }`}
                >
                  <div className="flex flex-col md:flex-row h-full">
                    <div className={`${project.featured ? "md:w-1/2" : "w-full"} relative`}>
                      {activeVideo === project.title && project.playbackId ? (
                        <div className="w-full aspect-video md:aspect-auto md:h-full bg-black">
                          <MuxVideoPlayer playbackId={project.playbackId} />
                        </div>
                      ) : (
                        <div
                          className={`h-64 md:h-full w-full ${project.image} flex items-center justify-center relative cursor-pointer group`}
                          onClick={() => project.playbackId && toggleVideoPlayer(project.title)}
                          onKeyDown={(event) => handleProjectMediaKeyDown(event, project.title, Boolean(project.playbackId))}
                          role={project.playbackId ? "button" : undefined}
                          tabIndex={project.playbackId ? 0 : undefined}
                          aria-label={project.playbackId ? `Play demo video for ${project.title}` : undefined}
                        >
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                          {project.featured && (
                            <div className="absolute top-4 left-4 border border-yellow-500/50 bg-black/50 text-yellow-500 px-3 py-1 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                              Featured Project
                            </div>
                          )}
                          <div className="relative z-10 text-center p-6">
                            <h3 className="text-2xl font-black text-white uppercase tracking-widest">
                              {project.title}
                            </h3>
                          </div>
                          {project.playbackId && (
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-purple-900/60 backdrop-blur-sm">
                              <PlayCircle className="text-white w-16 h-16" />
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className={`${project.featured ? "md:w-1/2" : "w-full"} p-8 flex flex-col justify-between`}>
                      <div>
                        {!project.featured && <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-4"></h3>}
                        <p className="text-slate-400 leading-relaxed font-light mb-6">
                          {project.description}

                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="border-purple-800 text-purple-300 rounded-sm bg-transparent font-medium">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 mt-auto">
                        {project.link && (
                          <Button
                            onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
                            variant="outline"
                            className="border-emerald-500/60 text-emerald-300 hover:bg-emerald-700/20 hover:text-emerald-100 rounded-none uppercase tracking-wider font-bold h-12 px-6"
                          >
                            <Globe className="mr-2 h-4 w-4" /> Live
                          </Button>
                        )}

                        <Button
                          onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}
                          variant="default"
                          className="bg-white hover:bg-slate-200 text-black rounded-none uppercase tracking-wider font-bold h-12 px-6"
                        >
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Button>

                        {project.playbackId && activeVideo !== project.title && (
                          <Button
                            onClick={() => toggleVideoPlayer(project.title)}
                            variant="outline"
                            className="border-purple-600 text-purple-400 hover:bg-purple-900 hover:text-white rounded-none uppercase tracking-wider font-bold h-12 px-6"
                          >
                            <PlayCircle className="mr-2 h-4 w-4" /> Demo
                          </Button>
                        )}

                        {activeVideo === project.title && (
                          <Button
                            onClick={() => toggleVideoPlayer(project.title)}
                            variant="outline"
                            className="border-red-600/50 text-red-400 hover:bg-red-900/30 hover:text-white rounded-none uppercase tracking-wider font-bold h-12 px-6"
                          >
                            <XCircle className="mr-2 h-4 w-4" /> Close
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 bg-[#0A0512]/50 border-t border-purple-900/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-2">Engage</h2>
              <div className="h-1 w-20 bg-purple-600 mx-auto mb-6" />
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">Let&apos;s Work Together</h3>
              <p className="text-slate-400 mt-6 max-w-xl mx-auto font-light">
                Ready to tackle the next big challenge. Whether you&apos;re building something ambitious or looking for a dedicated engineer. Let&apos;s connect.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2 space-y-4">
                <a href="mailto:valihameed88@gmail.com" aria-label="Email Vali Hameed" className="flex items-center p-6 bg-[#0f081c] border border-purple-900/30 hover:border-purple-500/50 transition-colors group">
                  <div className="bg-purple-900/20 p-4 mr-4">
                    <Mail className="text-purple-400 group-hover:scale-110 transition-transform" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-1">Email</h4>
                    <p className="text-slate-400 text-sm break-all">valihameed88@gmail.com</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/vali-hameed" target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn profile" className="flex items-center p-6 bg-[#0f081c] border border-purple-900/30 hover:border-purple-500/50 transition-colors group">
                  <div className="bg-purple-900/20 p-4 mr-4">
                    <Linkedin className="text-purple-400 group-hover:scale-110 transition-transform" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-1">LinkedIn</h4>
                    <p className="text-slate-400 text-sm">Let&apos;s Connect</p>
                  </div>
                </a>

                <a href="https://github.com/Vali-Hameed" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile" className="flex items-center p-6 bg-[#0f081c] border border-purple-900/30 hover:border-purple-500/50 transition-colors group">
                  <div className="bg-purple-900/20 p-4 mr-4">
                    <Github className="text-purple-400 group-hover:scale-110 transition-transform" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-1">GitHub</h4>
                    <p className="text-slate-400 text-sm">View Projects</p>
                  </div>
                </a>
              </div>

              <div className="md:col-span-3">
                <form action="https://formspree.io/f/xyzdngel" method="POST" className="bg-[#0f081c] border border-purple-900/30 p-8 space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 md:col-span-1 space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                      <Input id="email" type="email" name="email" required placeholder="name@email.com" className="bg-[#0A0512] border-purple-900/50 focus-visible:ring-purple-500 rounded-none h-12 text-slate-200 placeholder:text-slate-700" />
                    </div>
                    <div className="col-span-2 md:col-span-1 space-y-2">
                      <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-slate-400">Subject</label>
                      <Input id="subject" type="text" name="subject" required placeholder="Opportunity..." className="bg-[#0A0512] border-purple-900/50 focus-visible:ring-purple-500 rounded-none h-12 text-slate-200 placeholder:text-slate-700" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-400">Message</label>
                    <Textarea id="message" name="message" required rows={5} placeholder="Talk to me..." className="bg-[#0A0512] border-purple-900/50 focus-visible:ring-purple-500 rounded-none resize-none text-slate-200 placeholder:text-slate-700 p-4" />
                  </div>
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white uppercase tracking-widest font-bold h-14 rounded-none">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-900/40 relative z-10 bg-[#06000c]">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
          <div className="w-8 h-8 rounded-sm bg-purple-600/20 border border-purple-500/50 flex items-center justify-center transform rotate-45 mb-4">
            <span className="text-xs font-black tracking-tighter text-purple-400 -rotate-45">VH</span>
          </div>
          <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} Vali Hameed
          </p>
          <p className="text-slate-600 mt-2 text-xs uppercase tracking-widest">
            Built with Next.js, Shadcn UI & Grit.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

