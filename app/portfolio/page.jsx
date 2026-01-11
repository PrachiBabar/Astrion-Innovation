'use client';

import { X, ExternalLink, Github, Monitor, Smartphone, Tablet, Maximize2, Code2, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeScreen, setActiveScreen] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Fitness Trainer",
      category: "Web Application",
      role: "Full Stack Developer",
      description: "Enterprise financial management platform with real-time analytics and AI-powered insights.",
      thumbnail: "productsui/fitnesshero.png",
      live: "https://example.com",
      github: "https://github.com",
      tags: ["React.js", "Tailwind Css", "MySQL"],
      mainColor: "#14b8a6",
      screens: [
        { name: "Dashboard", type: "desktop", image: "productsui/fitnesssection.png" },
        { name: "Analytics", type: "desktop", image: "productsui/fitness4.png" },
        { name: "Mobile App", type: "mobile", image: "productsui/fitnessmobile.png" },
        { name: "Workouts", type: "tablet", image: "productsui/fitness3.png" }
      ]
    },
    {
      id: 2,
      title: "Cake Shop",
      category: "E-commerce",
      role: "Lead Developer",
      description: "Sweet delights delivered with a modern storefront and seamless shopping experience.",
      thumbnail: "productsui/cakes.png",
      live: "https://example.com",
      github: "https://github.com",
      tags: ["React.js", "Node.js", "Tailwind css" , "MySQL"],
      mainColor: "#d4af37",
      screens: [
        { name: "Hero", type: "desktop", image: "productsui/cakehero.png" },
        { name: "Home", type: "mobile", image: "productsui/heromobile.png" },
        { name: "Products", type: "desktop", image: "productsui/chooseus.png" },
        { name: "Mobile", type: "mobile", image: "productsui/cakemobile.png" }
      ]
    },
    {
      id: 3,
      title: "Organic Store",
      category: "E-commerce",
      role: "Frontend Architect",
      description: "Fresh organic products delivered with sustainable shopping experience.",
      thumbnail: "productsui/organichero.png",
      live: "https://example.com",
      github: "https://github.com",
      tags: ["React.js", "Node.js", "Tailwind css" , "MySQL"],
      mainColor: "#10b981",
      screens: [
        { name: "Overview", type: "desktop", image: "productsui/organichero.png" },
        { name: "Cards", type: "desktop", image: "productsui/organic2.png" },
        { name: "Products", type: "desktop", image: "productsui/organic3.png" },
        { name: "Mobile", type: "mobile", image: "productsui/organicmobile2.png" },
        { name: "Contact", type: "mobile", image: "productsui/organicmobile1.png" }
      ]
    },
    {
      id: 4,
      title: "Property Showcase",
      category: "Real Estate",
      role: "Full Stack Developer",
      description: "Modern real estate platform with virtual tours and smart property search.",
      thumbnail: "productsui/propertyhero.png",
      live: "https://example.com",
      github: "https://github.com",
      tags: ["React.js", "Node.js", "Tailwind css" , "MySQL"],
      mainColor: "#3b82f6",
      screens: [
        { name: "Hero", type: "desktop", image: "productsui/propertyhero.png" },
        { name: "Details", type: "desktop", image: "productsui/propertycards.png" },
        { name: "Contact", type: "mobile", image: "productsui/propertymobile1.png" },
        { name: "Contact", type: "mobile", image: "productsui/propertymobile2.png" },
        { name: "Details", type: "desktop", image: "productsui/propertycards2.png" },
        { name: "Contact", type: "mobile", image: "productsui/propertymobile3.png" }

      ]
    },
    {
      id: 5,
      title: "Travel Agency",
      category: "Travel & Tourism",
      role: "Full Stack Developer",
      description: "Discover destinations worldwide with personalized travel planning and booking.",
      thumbnail: "productsui/travelhero.png",
      live: "https://example.com",
      github: "https://github.com",
      tags: ["React.js", "Node.js", "Tailwind css" , "MySQL"],
      mainColor: "#06b6d4",
      screens: [
        { name: "Destinations", type: "desktop", image: "productsui/travelhero.png" },
        { name: "Booking", type: "desktop", image: "productsui/Travelcards.png" },
        { name: "Booking", type: "desktop", image: "productsui/Travelcontact.png" },
        { name: "Travel", type: "mobile", image: "productsui/Travelmobile.png" },
        { name: "Booking", type: "mobile", image: "productsui/Travelmobile2.png" },
      ]
    },
    {
      id: 6,
      title: "Online Courses",
      category: "Health & Fitness",
      role: "Full Stack Developer",
      description: "Personal training platform with workout plans and progress tracking.",
      thumbnail: "productsui/onlinehero.png",
      live: "https://example.com",
      github: "https://github.com",
      tags: ["Next.js", "Tailwind css", "Node.js", "Express.js", "MySQL"],
      mainColor: "#ef4444",
      screens: [
        { name: "Dashboard", type: "desktop", image: "productsui/onlinehero.png" },
        { name: "Workouts", type: "desktop", image: "productsui/onlinecards.png" },
        { name: "Workouts", type: "desktop", image: "productsui/onlinecontact.png" },
        { name: "Workouts", type: "mobile", image: "productsui/onlinemobile.png" },
        { name: "Workouts", type: "mobile", image: "productsui/onlinemobile2.png" },

      ]
    },
    {
      id: 7,
      title: "Fashion Brand",
      category: "E-commerce",
      role: "Frontend Developer",
      description: "Luxury fashion platform with AR try-on and personalized styling.",
      thumbnail: "productsui/fashionhero.png",
      live: "https://example.com",
      github: "https://github.com",
      tags: ["React.js", "Tailwind css", "Node.js", "Express.js", "MySQL"],
      mainColor: "#8b5cf6",
      screens: [
        { name: "Collection", type: "desktop", image: "productsui/fashionhero.png" },
        { name: "Product", type: "desktop", image: "productsui/fashionsection.png" },
        { name: "Product", type: "desktop", image: "productsui/fashioncards.png" },
        { name: "Product", type: "desktop", image: "productsui/fashionsec.png" },
        { name: "Product", type: "mobile", image: "productsui/fashionmobile.png" },
        { name: "Product", type: "mobile", image: "productsui/fashionmobile2.png" }


      ]
    },
    {
      id: 8,
      title: "CRM Dashboard",
      category: "CRM Dashboard",
      role: "Frontend Developer",
      description: "Luxury fashion platform with AR try-on and personalized styling.",
      thumbnail: "productsui/crm.png",
      live: "https://example.com",
      github: "https://github.com",
      tags: ["React.js", "Tailwind css", "Node.js", "Express.js", "MySQL"],
      mainColor: "#8b5cf6",
      screens: [
        { name: "Dashboard", type: "desktop", image: "productsui/crm .png" },
        { name: "Product", type: "mobile", image: "productsui/crmmob.png" },
        { name: "Product", type: "mobile", image: "productsui/crmmob2.png" },
        { name: "Product", type: "mobile", image: "productsui/crmmob3.png" }

      ]
    },
      {
      id: 9,
      title: "Analytics Dashboard",
      category: "Analytics Dashboard",
      role: "Frontend Developer",
      description: "Luxury fashion platform with AR try-on and personalized styling.",
      thumbnail: "productsui/analytic1.png",
      live: "https://example.com",
      github: "https://github.com",
      tags: ["React.js", "Tailwind css", "Node.js", "Express.js", "MySQL"],
      mainColor: "#8b5cf6",
      screens: [
        { name: "Dashboard", type: "desktop", image: "productsui/analytic1.png" },
        { name: "Product", type: "desktop", image: "productsui/analytic2.png" },
        { name: "Product", type: "mobile", image: "productsui/analyticmob1.png" },
        { name: "Product", type: "mobile", image: "productsui/analyticmob2.png" },
        { name: "Product", type: "mobile", image: "productsui/analyticmob3.png" }
      ]
    },
     {
      id: 10,
      title: "Premium Store front",
      category: "Premium Store front",
      role: "Frontend Developer",
      description: "Luxury fashion platform with AR try-on and personalized styling.",
      thumbnail: "productsui/preminumhero.png",
      live: "https://example.com",
      github: "https://github.com",
      tags: ["React.js", "Tailwind css", "Node.js", "Express.js", "MySQL"],
      mainColor: "#8b5cf6",
      screens: [
        { name: "Dashboard", type: "desktop", image: "productsui/preminumhero.png" },
        { name: "Product", type: "desktop", image: "productsui/premiumcards.png" },
        { name: "Product", type: "desktop", image: "productsui/premiumcart.png" },
        { name: "Product", type: "mobile", image: "productsui/premiummob1.png" },
        { name: "Product", type: "mobile", image: "productsui/premiumcartmob.png" },
      ]
    },
     {
      id: 11,
      title: "Kanban Board",
      category: "Kanban Board",
      role: "Frontend Developer",
      description: "Luxury fashion platform with AR try-on and personalized styling.",
      thumbnail: "productsui/board.png",
      live: "https://example.com",
      github: "https://github.com",
      tags: ["React.js", "Tailwind css", "Node.js", "Express.js", "MySQL"],
      mainColor: "#8b5cf6",
      screens: [
        { name: "Dashboard", type: "desktop", image: "productsui/board.png" },
        { name: "Product", type: "desktop", image: "productsui/boarddark.png" },
        { name: "Product", type: "mobile", image: "productsui/boardmob.png" },
        { name: "Product", type: "mobile", image: "productsui/boardmob2.png" },
      ]
    },
     {
      id: 12,
      title: "Food",
      category: "Food",
      role: "Frontend Developer",
      description: "Luxury fashion platform with AR try-on and personalized styling.",
      thumbnail: "productsui/foodcard.png",
      live: "https://example.com",
      github: "https://github.com",
      tags: ["React.js", "Tailwind css", "Node.js", "Express.js", "MySQL"],
      mainColor: "#8b5cf6",
      screens: [
        { name: "Dashboard", type: "desktop", image: "productsui/foodhero.png" },
        { name: "Product", type: "desktop", image: "productsui/foodcard.png" },
        { name: "Product", type: "desktop", image: "productsui/foodprice.png" },
        { name: "Product", type: "desktop", image: "productsui/foodcart.png" },
        { name: "Product", type: "mobile", image: "productsui/foodmob.png" },
        { name: "Product", type: "mobile", image: "productsui/foodmobcard.png" },
        { name: "Product", type: "mobile", image: "productsui/foodmobcart.png" },
      ]
    },
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

  return (
    <div className="min-h-screen text-white transition-colors duration-500 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <div className="relative container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-bounce-slow">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span className="text-sm gradient-text font-medium">Premium Portfolio Collection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white px-2"
              style={{
                background: 'linear-gradient(135deg, #14b8a6, #d4af37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            Featured Projects
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 dark:text-white max-w-2xl mx-auto px-4">
            Immersive showcase of innovative digital experiences
          </p>
        </div>

        {/* Innovative Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => openProject(project)}
              className="group cursor-pointer relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-[1.02]"
              style={{
                animationDelay: `${idx * 100}ms`
              }}>
              
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{
                     background: `linear-gradient(135deg, ${project.mainColor}, #d4af37)`
                   }}>
                <div className="w-full h-full rounded-3xl glass-strong"></div>
              </div>

              <div className="relative glass-strong rounded-3xl overflow-hidden border border-white/10">
                
                {/* Screenshot Preview Section */}
                <div className="relative h-[400px] sm:h-[450px] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                  
                  {/* Main Screenshot with Perspective */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="relative w-full h-full perspective-1000">
                      
                      {/* Desktop Screenshot */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[70%] transition-all duration-700 transform group-hover:scale-105 group-hover:-translate-x-2"
                           style={{
                             transform: hoveredCard === project.id ? 'rotateY(-5deg) translateX(-10px)' : 'rotateY(0deg)',
                             transformStyle: 'preserve-3d'
                           }}>
                        <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-gray-700 bg-gray-900">
                          <div className="flex items-center gap-2 px-3 py-2 bg-gray-800 border-b border-gray-700">
                            <div className="flex gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                            </div>
                          </div>
                          <img 
                            src={project.screens[0]?.image} 
                            alt={project.title}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      </div>

                      {/* Mobile Screenshot - Floating */}
                      {project.screens.find(s => s.type === 'mobile') && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[35%] transition-all duration-700 transform group-hover:scale-110 group-hover:translate-y-[-55%]"
                             style={{
                               transform: hoveredCard === project.id ? 'rotateY(5deg) translateY(-55%) translateX(5px)' : 'rotateY(0deg) translateY(-50%)',
                               transformStyle: 'preserve-3d',
                               zIndex: 10
                             }}>
                          <div className="rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-gray-800 bg-gray-900">
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-b-2xl z-10"></div>
                            <img 
                              src={project.screens.find(s => s.type === 'mobile')?.image} 
                              alt="Mobile view"
                              className="w-full h-64 object-cover"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                  
                  {/* Floating Category Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="px-4 py-2 rounded-full glass-strong border border-white/20 backdrop-blur-xl">
                      <span className="text-xs sm:text-sm font-medium gradient-text">{project.category}</span>
                    </div>
                  </div>

                  {/* Screen Count Indicator */}
                  {/* <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-2 rounded-full glass-strong border border-white/20">
                    <Monitor className="w-4 h-4 text-teal-400" />
                    <span className="text-xs font-medium text-gray-300">{project.screens.length} Views</span>
                  </div> */}
                </div>

                {/* Content Section */}
                <div className="relative p-6 sm:p-8">
                  
                  {/* Project Title & Info */}
                  <div className="mb-4">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white dark:text-gray-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-yellow-500 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium gradient-text mb-3">
                      {project.role}
                    </p>
                    <p className="text-sm text-gray-400 dark:text-gray-300 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 rounded-lg glass text-xs font-medium text-teal-300 border border-teal-500/20 transition-all duration-300 hover:scale-105 hover:border-teal-500/50">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        openProject(project);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30"
                      style={{
                        background: `linear-gradient(135deg, ${project.mainColor}, #d4af37)`,
                        color: 'white'
                      }}>
                      <Maximize2 className="w-4 h-4" />
                      Full Preview
                    </button>
                    <button className="px-4 py-3 rounded-xl glass-strong border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                      <Code2 className="w-5 h-5 text-teal-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Full Screen Modal */}
      {selectedProject && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 transition-all duration-500 ${
            isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(20px)'
          }}
          onClick={closeProject}>
          
          <div
            className={`relative w-full max-w-full sm:max-w-3xl lg:max-w-6xl xl:max-w-7xl max-h-[95vh] overflow-y-auto rounded-2xl sm:rounded-3xl backdrop-blur-2xl border border-white/10 transition-all duration-500 ${
              isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button
              onClick={closeProject}
              className="sticky top-4 sm:top-6 float-right mr-4 sm:mr-6 z-50 p-3 rounded-full glass-strong border border-red-500/30 transition-all duration-300 hover:scale-110 hover:rotate-90 hover:bg-red-500/20">
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
            </button>

            <div className="p-4 sm:p-6 md:p-8 lg:p-12 clear-both">
              
              {/* Project Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
                  <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
                  <span className="text-sm text-gray-400">{selectedProject.category}</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">
                  {selectedProject.title}
                </h2>
                <p className="text-lg sm:text-xl mb-4 font-medium text-teal-400">
                  {selectedProject.role}
                </p>
                <p className="text-base sm:text-lg mb-8 max-w-3xl text-gray-400 dark:text-white">
                  {selectedProject.description}
                </p>

                {/* Action Links */}
                {/* <div className="flex flex-wrap gap-3 mb-12">
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl glass-strong border border-teal-500/30 hover:border-teal-500/60 text-white">
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl glass-strong border border-white/10 hover:border-white/30 text-white">
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                </div> */}
              </div>

              {/* Screen Gallery */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text flex items-center gap-3">
                  <Monitor className="w-6 h-6" />
                  Project Screens
                </h3>

                {/* Screen Type Tabs */}
                <div className="flex flex-wrap gap-3 mb-8 pb-4 border-b border-white/10">
                  {selectedProject.screens.map((screen, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveScreen(idx)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                        activeScreen === idx 
                          ? 'glass-strong border-2 scale-105' 
                          : 'glass border border-white/10 hover:border-white/30'
                      }`}
                      style={{
                        borderColor: activeScreen === idx ? selectedProject.mainColor : undefined,
                        boxShadow: activeScreen === idx ? `0 0 20px ${selectedProject.mainColor}30` : undefined
                      }}>
                      {screen.type === 'desktop' && <Monitor className="w-4 h-4 text-teal-400" />}
                      {screen.type === 'mobile' && <Smartphone className="w-4 h-4 text-teal-400" />}
                      {screen.type === 'tablet' && <Tablet className="w-4 h-4 text-teal-400" />}
                      <span className="text-sm font-medium text-white">{screen.name}</span>
                    </button>
                  ))}
                </div>

                {/* Screenshot Display */}
                <div className="relative rounded-2xl overflow-hidden glass-strong p-8 border border-white/10">
                  <div className="relative mx-auto" style={{ maxWidth: selectedProject.screens[activeScreen].type === 'mobile' ? '400px' : '100%' }}>
                    <img 
                      src={selectedProject.screens[activeScreen].image} 
                      alt={selectedProject.screens[activeScreen].name}
                      className="w-full rounded-xl shadow-2xl transition-all duration-500 hover:scale-105"
                      style={{
                        boxShadow: `0 20px 60px ${selectedProject.mainColor}30`
                      }}
                    />
                  </div>
                </div>

                {/* Progress Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {selectedProject.screens.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveScreen(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeScreen === idx ? 'w-8' : 'w-2'
                      }`}
                      style={{
                        background: activeScreen === idx 
                          ? `linear-gradient(135deg, ${selectedProject.mainColor}, #d4af37)`
                          : 'rgba(255, 255, 255, 0.2)'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4 gradient-text flex items-center gap-2">
                  <Code2 className="w-5 h-5" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 rounded-xl glass-strong border border-white/10 text-sm font-medium text-gray-300 hover:scale-105 transition-transform duration-300"
                      style={{
                        boxShadow: `0 0 20px ${selectedProject.mainColor}10`
                      }}>
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

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: .7; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
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