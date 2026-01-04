'use client';

import { X, ExternalLink, Github, ChevronLeft, ChevronRight, Monitor, Smartphone, Tablet } from 'lucide-react';
import { useEffect, useState } from 'react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeScreen, setActiveScreen] = useState(0);
//   const [isDark, setIsDark] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
//   const scrollRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Online Courses",
      category: "Web Application",
      role: "Full Stack Developer",
      description: "Enterprise financial management platform with real-time analytics and AI-powered insights.",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      live: "https://example.com",
      github: "https://github.com",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      screens: [
        { name: "Dashboard", type: "desktop", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop" },
        { name: "Analytics", type: "desktop", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop" },
        { name: "Mobile App", type: "mobile", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop" },
        { name: "Reports", type: "tablet", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" }
      ]
    },
    {
      id: 2,
      title: "Cake Shop",
      category: "Mobile & Web",
      role: "Lead Developer",
      description: "Healthcare platform connecting patients with doctors through seamless video consultations.",
      thumbnail: "productsui/cakes.png",
      live: "https://example.com",
      github: "https://github.com",
      tags: ["React Native", "Node.js"],
      screens: [
        { name: "Hero Section", type: "desktop", image: "productsui/cakehero.png" },
        { name: "Home", type: "mobile", image: "productsui/heromobile.png" },
        { name: "Consultation", type: "desktop", image: "productsui/chooseus.png" },
        { name: "Profile", type: "mobile", image: "productsui/cakemobile.png" }
      ]
    },
    {
      id: 3,
      title: "Organic Store",
      category: "Data Visualization",
      role: "Frontend Architect",
      description: "Environmental monitoring system with real-time data visualization and predictive analytics.",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      live: "https://example.com",
      github: "https://github.com",
      tags: ["Vue.js", "D3.js", "Python"],
      screens: [
        { name: "Overview", type: "desktop", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop" },
        { name: "Maps", type: "desktop", image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=800&fit=crop" }
      ]
    },
    {
      id: 4,
      title: "Property Showcase",
      category: "E-commerce Platform",
      role: "Full Stack Developer",
      description: "Modern e-commerce platform with AI-powered recommendations and seamless checkout experience.",
      thumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      live: "https://example.com",
      github: "https://github.com",
      tags: ["Next.js", "Stripe", "MongoDB"],
      screens: [
        { name: "Store", type: "desktop", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop" },
        { name: "Product", type: "desktop", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=800&fit=crop" },
        { name: "Mobile", type: "mobile", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop" }
      ]
    },
    {
      id: 5,
      title: "Travel Agency",
      category: "E-commerce Platform",
      role: "Full Stack Developer",
      description: "Modern e-commerce platform with AI-powered recommendations and seamless checkout experience.",
      thumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      live: "https://example.com",
      github: "https://github.com",
      tags: ["Next.js", "Stripe", "MongoDB"],
      screens: [
        { name: "Store", type: "desktop", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop" },
        { name: "Product", type: "desktop", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=800&fit=crop" },
        { name: "Mobile", type: "mobile", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop" }
      ]
    },
    {
      id: 6,
      title: "Fitness Trainer",
      category: "E-commerce Platform",
      role: "Full Stack Developer",
      description: "Modern e-commerce platform with AI-powered recommendations and seamless checkout experience.",
      thumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      live: "https://example.com",
      github: "https://github.com",
      tags: ["Next.js", "Stripe", "MongoDB"],
      screens: [
        { name: "Store", type: "desktop", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop" },
        { name: "Product", type: "desktop", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=800&fit=crop" },
        { name: "Mobile", type: "mobile", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop" }
      ]
    },
    {
      id: 7,
      title: "Fashion Brand",
      category: "E-commerce Platform",
      role: "Full Stack Developer",
      description: "Modern e-commerce platform with AI-powered recommendations and seamless checkout experience.",
      thumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      live: "https://example.com",
      github: "https://github.com",
      tags: ["Next.js", "Stripe", "MongoDB"],
      screens: [
        { name: "Store", type: "desktop", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop" },
        { name: "Product", type: "desktop", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=800&fit=crop" },
        { name: "Mobile", type: "mobile", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop" }
      ]
    },
      {
      id: 8,
      title: "CRM Dashboard",
      category: "E-commerce Platform",
      role: "Full Stack Developer",
      description: "Modern e-commerce platform with AI-powered recommendations and seamless checkout experience.",
      thumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      live: "https://example.com",
      github: "https://github.com",
      tags: ["Next.js", "Stripe", "MongoDB"],
      screens: [
        { name: "Store", type: "desktop", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop" },
        { name: "Product", type: "desktop", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=800&fit=crop" },
        { name: "Mobile", type: "mobile", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop" }
      ]
    }

  ];

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveScreen(0);
    setIsModalOpen(true);
  };

  const closeProject = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
      setActiveScreen(0);
    }, 300);
  };

  const nextScreen = () => {
    if (selectedProject) {
      setActiveScreen((prev) => (prev + 1) % selectedProject.screens.length);
    }
  };

  const prevScreen = () => {
    if (selectedProject) {
      setActiveScreen((prev) => (prev - 1 + selectedProject.screens.length) % selectedProject.screens.length);
    }
  };

  const getDeviceFrame = (type, image) => {
    const baseClasses = "relative overflow-hidden transition-transform duration-500";
    
    if (type === 'mobile') {
      return (
        <div className={`${baseClasses} w-[390px] h-[600px]  rounded-[2.5rem] border-[12px] border-gray-800 bg-gray-900 shadow-2xl`}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-3xl z-10"></div>
          <img src={image} alt="Screen" className="w-full h-full object-cover" />
        </div>
      );
    } else if (type === 'tablet') {
      return (
        <div className={`${baseClasses} w-[500px] h-[670px] rounded-3xl border-[16px] border-gray-800 bg-gray-900 shadow-2xl`}>
          <img src={image} alt="Screen" className="w-full h-full object-cover rounded-xl" />
        </div>
      );
    } else {
      return (
        <div className={`${baseClasses} w-full max-w-[900px] rounded-2xl border-[10px] border-gray-800 bg-gray-900 shadow-2xl`}>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <img src={image} alt="Screen" className="w-full h-[550px] object-cover rounded-lg mt-8" />
        </div>
      );
    }
  };

  return (
    <div className={`min-h-screen text-white dark:text-gray-900 transition-colors duration-500`}
        //  style={{
        //    background: isDark 
        //      ? 'linear-gradient(135deg, #0a192f, #112240)' 
        //      : 'linear-gradient(135deg, #f8fafc, #e2e8f0)'
        //  }}
         >
      
      {/* Theme Toggle */}
      {/* <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 right-6 z-50 px-4 py-2 rounded-full backdrop-blur-xl border transition-all duration-300 hover:scale-110"
        style={{
          background: isDark 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.1)',
          borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'
        }}>
        <span className={isDark ? 'text-white' : 'text-gray-900'}>
          {isDark ? '☀️' : '🌙'}
        </span>
      </button> */}

      {/* Header */}
      <div className="glass-strong container blog-bg mx-auto px-6 pt-24 pb-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 text-white dark:text-gray-900}`}
              style={{
                background: 'linear-gradient(135deg, #14b8a6, #d4af37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            Featured Projects
          </h1>
          <p className={`text-xl text-gray-400 dark:text-white max-w-2xl mx-auto`}>
            Explore my latest work showcasing innovative solutions and creative designs
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => openProject(project)}
              className="group cursor-pointer glass-strong relative rounded-3xl p-1 transition-all duration-500 hover:scale-[1.02]"
              style={{
                // background: 'linear-gradient(135deg, #14b8a6, #d4af37)',
                animationDelay: `${idx * 100}ms`
              }}>
              <div 
                className="relative rounded-[1.4rem] overflow-hidden backdrop-blur-xl  transition-all duration-500"
                // style={{
                //   background: isDark 
                //     ? 'rgba(17, 34, 64, 0.8)' 
                //     : 'rgba(255, 255, 255, 0.9)',
                //   borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                // }}
                >
                
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 rounded-full backdrop-blur-xl border border-white/20 text-white text-sm font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className={`text-2xl font-bold mb-2 text-white dark:text-gray-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-yellow-500 transition-all duration-300`}>
                    {project.title}
                  </h3>
                  {/* ${isDark ? 'text-teal-400' : 'text-teal-600'} */}
                  <p className={`text-sm mb-4 font-medium gradient-text`}>
                    {project.role}
                  </p>
                  <p className={`text-white dark:text-gray-300 mb-6 line-clamp-2`}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className={`px-3 py-1 rounded-full text-white text-xs font-medium backdrop-blur-xl border border-gray-100 transition-all duration-300 group-hover:scale-110`}
                        // style={{
                        //   background: isDark 
                        //     ? 'rgba(20, 184, 166, 0.1)' 
                        //     : 'rgba(20, 184, 166, 0.2)',
                        //   borderColor: isDark ? 'rgba(20, 184, 166, 0.3)' : 'rgba(20, 184, 166, 0.4)',
                        //   color: isDark ? '#5eead4' : '#0d9488'
                        // }}
                        >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <button className="w-full py-3 rounded-xl font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teal-500/50"
                          style={{
                            background: 'linear-gradient(135deg, #14b8a6, #d4af37)',
                            color: 'white'
                          }}>
                    View Project Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className={` fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
            isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)'
          }}
          onClick={closeProject}>
          
          <div 
            className={`relative w-full max-w-7xl max-h-[90vh] overflow-y-auto rounded-3xl backdrop-blur-2xl border transition-all duration-500 ${
              isModalOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'
            }`}
            // style={{
            //   background: isDark 
            //     ? 'rgba(17, 34, 64, 0.95)' 
            //     : 'rgba(255, 255, 255, 0.95)',
            //   borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
            // }}
            onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button
              onClick={closeProject}
              className="absolute top-6 right-6 z-10 p-3 rounded-full backdrop-blur-xl border transition-all duration-300 hover:scale-110 hover:rotate-90"
              style={{
                background: 'rgba(239, 68, 68, 0.2)',
                borderColor: 'rgba(239, 68, 68, 0.3)'
              }}>
              <X className="w-6 h-6 text-red-400" />
            </button>

            {/* Hero Section */}
            <div className=" p-8 md:p-12">
              <div className="mb-8">
                <h2 className={`text-4xl md:text-5xl font-bold mb-4 gradient-text`}>
                  {selectedProject.title}
                </h2>
                <p className="text-xl text-teal-400 mb-6 font-medium gradient-text">
                  {selectedProject.role}
                </p>
                <p className={`text-lg mb-8 max-w-3xl text-gray-400 dark:text-white`}>
                  {selectedProject.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mb-12 text-white">
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center border border-teal-200 gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/50"
                    // style={{
                    //   background: 'linear-gradient(135deg, #14b8a6, #d4af37)',
                    //   color: 'white'
                    // }}
                    >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2  border-teal-200 px-6 py-3 rounded-xl font-medium backdrop-blur-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/50`}
                    // style={{
                    //   background: isDark 
                    //     ? 'rgba(255, 255, 255, 0.1)' 
                    //     : 'rgba(0, 0, 0, 0.1)',
                    //   borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                    //   color: isDark ? 'white' : 'black'
                    // }}
                    >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                </div>
              </div>

              {/* Screen Showcase Section */}
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-6  gradient-text`}>
                  Application Screens
                </h3>

                {/* Device Type Indicators */}
                <div className="flex items-center justify-center gap-4 mb-8">
                  {selectedProject.screens.map((screen, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveScreen(idx)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-xl border transition-all duration-300 ${
                        activeScreen === idx ? 'scale-110' : 'hover:scale-105'
                      }`}
                    //   style={{
                    //     background: activeScreen === idx 
                    //       ? 'linear-gradient(135deg, #14b8a6, #d4af37)'
                    //       : isDark 
                    //         ? 'rgba(255, 255, 255, 0.05)' 
                    //         : 'rgba(0, 0, 0, 0.05)',
                    //     borderColor: activeScreen === idx 
                    //       ? 'transparent'
                    //       : isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    //     color: activeScreen === idx ? 'white' : isDark ? '#94a3b8' : '#64748b'
                    //   }}
                      >
                      {screen.type === 'desktop' && <Monitor className="w-4 h-4 text-white" />}
                      {screen.type === 'mobile' && <Smartphone className="w-4 h-4 text-white" />}
                      {screen.type === 'tablet' && <Tablet className="w-4 h-4text-white" />}
                      <span className="text-sm font-medium gradient-text">{screen.name}</span>
                    </button>
                  ))}
                </div>

                {/* Screen Display with Device Frames */}
                <div className="relative flex items-center justify-center min-h-[600px] p-8">
                  {/* Navigation Buttons */}
                  {selectedProject.screens.length > 1 && (
                    <>
                      <button
                        onClick={prevScreen}
                        className="absolute left-4 z-10 p-4 rounded-full text-teal-400 backdrop-blur-xl border transition-all duration-300 hover:scale-110"
                        // style={{
                        //   background: isDark 
                        //     ? 'rgba(255, 255, 255, 0.1)' 
                        //     : 'rgba(0, 0, 0, 0.1)',
                        //   borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'
                        // }}
                        >
                        <ChevronLeft className={`w-6 h-6 text-gray-400 dark:text-white`} />
                      </button>
                      <button
                        onClick={nextScreen}
                        className="absolute right-4 z-10 p-4 rounded-full text-teal-400 backdrop-blur-xl border transition-all duration-300 hover:scale-110"
                        // style={{
                        //   background: isDark 
                        //     ? 'rgba(255, 255, 255, 0.1)' 
                        //     : 'rgba(0, 0, 0, 0.1)',
                        //   borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'
                        // }}
                        >
                        <ChevronRight className={`w-6 h-6 text-gray-400 dark:text-white`} />
                      </button>
                    </>
                  )}

                  {/* Device Frame */}
                  <div className="transition-all duration-500 hover:scale-105">
                    {getDeviceFrame(
                      selectedProject.screens[activeScreen].type,
                      selectedProject.screens[activeScreen].image
                    )}
                  </div>
                </div>

                {/* Screen Indicator Dots */}
                <div className="flex justify-center gap-2 mt-8">
                  {selectedProject.screens.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveScreen(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeScreen === idx ? 'w-8' : 'w-2'
                      }`}
                    //   style={{
                    //     background: activeScreen === idx 
                    //       ? 'linear-gradient(135deg, #14b8a6, #d4af37)'
                    //       : isDark 
                    //         ? 'rgba(255, 255, 255, 0.2)' 
                    //         : 'rgba(0, 0, 0, 0.2)'
                    //   }}
                    />
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-12">
                <h3 className={`text-xl font-bold mb-4 gradient-text `}>
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 rounded-xl text-sm font-medium backdrop-blur-xl bordertext-gray-400 dark:text-white "
                    //   style={{
                    //     background: isDark 
                    //       ? 'rgba(20, 184, 166, 0.1)' 
                    //       : 'rgba(20, 184, 166, 0.2)',
                    //     borderColor: isDark ? 'rgba(20, 184, 166, 0.3)' : 'rgba(20, 184, 166, 0.4)',
                    //     color: isDark ? '#5eead4' : '#0d9488'
                    //   }}
                      >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #14b8a6, #d4af37);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #0d9488, #b8941f);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;