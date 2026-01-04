"use client";

import { useEffect } from "react";

export default function Hero() {

  useEffect(() => {
    // Counter animation
    const animateCounter = (element, target) => {
      let current = 0;
      const increment = target / 50;

      const timer = setInterval(() => {
        current += increment;

        if (current >= target) {
          element.textContent =
            target + (element.textContent.includes('%') ? '%' : '+');
          clearInterval(timer);
        } else {
          element.textContent =
            Math.floor(current) + (element.textContent.includes('%') ? '%' : '+');
        }
      }, 30);
    };

    // Check browser environment
    if (typeof window === "undefined") return;

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const statValue = entry.target.querySelector(".gradient-text");

          if (statValue && !statValue.dataset.animated) {
            statValue.dataset.animated = "true";

            const number = parseInt(statValue.textContent);

            if (!isNaN(number)) {
              animateCounter(statValue, number);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    // observe stat cards
    document.querySelectorAll(".stat-card").forEach((card) => {
      statsObserver.observe(card);
    });

    // cleanup
    return () => statsObserver.disconnect();
  }, []);


  
    return(
        <>
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 mt-3">
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 bg-teal-500/10 rounded-full blur-3xl top-20 -left-20 animate-float"></div>
            <div
            className="absolute w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl bottom-20 -right-20 animate-float"
            style={{ animationDelay: "1s" }}
            ></div>

        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="glass-strong rounded-3xl p-8 md:p-16 fade-in-up">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                    Transform Your <span className="gradient-text">Digital Vision</span><br/>Into Reality
                </h1>
                <p className="text-lg md:text-xl text-gray-300  mb-8 max-w-3xl mx-auto">
                    We build stunning websites, powerful apps, and innovative solutions that drive your business forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                 <a href="https://wa.me/919967853969?text=Hello!%20I%20want%20to%20start%20a%20project.%20Let's%20connect!" 
                    target="_blank"
                   onClick={() => {
                    setTimeout(() => {
                        window.location.href =
                        "mailto:astrioninnovation@gmail.com?subject=Project%20Enquiry&body=Hello,%20I%20want%20to%20start%20a%20new%20project.";
                    }, 500);
                    }}

                    className="gradient-bg px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition transform hover:scale-105">
                        Start Your Project
                    </a>
                    <a  href="#products" className="glass px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition transform hover:scale-105">
                        View Products
                    </a>
                </div>
                
               
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12">
                    <div className="glass stat-card rounded-xl p-6">
                        <div className="text-3xl md:text-4xl font-bold gradient-text">99%</div>
                        <div className="text-sm text-gray-400 mt-2">Client Satisfaction</div>
                    </div>
                    <div className="glass stat-card rounded-xl p-6">
                        <div className="text-3xl md:text-4xl font-bold gradient-text">24/7</div>
                        <div className="text-sm text-gray-400 mt-2">Support Available</div>
                    </div>
                    <div className="glass stat-card rounded-xl p-6">
                        <div className="text-3xl md:text-4xl font-bold gradient-text">50+</div>
                        <div className="text-sm text-gray-400 mt-2">Projects Delivered</div>
                    </div>
                    <div className="glass stat-card rounded-xl p-6">
                        <div className="text-3xl md:text-4xl font-bold gradient-text">6+</div>
                        <div className="text-sm text-gray-400 mt-2">Years Experience</div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    {/* Tech Stat */}
     <section className="py-12 mt-8 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4">

        <div className="tech-slider-container overflow-hidden">
            <div className="tech-slider-track flex items-center gap-12">

                {/*  Original list  */}
                <span className="tech-item text-gray-400 text-xl font-semibold">React</span>
                <span className="tech-item text-gray-400 text-xl font-semibold">Node.js</span>
                <span className="tech-item text-gray-400 text-xl font-semibold">MongoDB</span>
                <span className="tech-item text-gray-400 text-xl font-semibold">AWS</span>
                <span className="tech-item text-gray-400 text-xl font-semibold">Docker</span>
                <span className="tech-item text-gray-400 text-xl font-semibold">Github</span>
                <span className="tech-item text-gray-400 text-xl font-semibold">Next.js</span>
                <span className="tech-item text-gray-400 text-xl font-semibold">JavaScript</span>
                <span className="tech-item text-gray-400 text-xl font-semibold">MySQL</span>
                <span className="tech-item text-gray-400 text-xl font-semibold">Next.js</span>

                {/* Duplicate list for infinite loop  */}
                <span className="tech-item text-gray-400 text-xl font-semibold">React</span>
                <span className="tech-item text-gray-400 text-xl font-semibold">Node.js</span>
                <span className="tech-item text-gray-400 text-xl font-semibold">MongoDB</span>
                <span className="tech-item text-gray-400 text-xl font-semibold">AWS</span>
                <span className="tech-item text-gray-400 text-xl font-semibold">Docker</span>
                <span className="tech-item text-gray-400 text-xl font-semibold">Github</span>
                <span className="tech-item text-gray-400 text-xl font-semibold">JavaScript</span>
                <span className="tech-item text-gray-400 text-xl font-semibold">MySQL</span>
                <span className="tech-item text-gray-400 text-xl font-semibold">Next.js</span>

            </div>
        </div>

    </div>
</section>


{/* Our services */}
 <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="gradient-text">Our Services</span></h2>
                <p className="text-gray-400 text-lg">Custom solutions tailored to your business needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass-strong rounded-2xl p-8 card-hover">
                    <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">Web Development</h3>
                    <p className="text-gray-400 mb-6">Create stunning and responsive websites that engage your audience</p>
                    <ul className="space-y-2 text-gray-300">
                        <li>• Single Page Apps</li>
                        <li>• Progressive Web Apps</li>
                        <li>• E-commerce Platforms</li>
                        <li>• Content Management Systems</li>
                    </ul>
                </div>

                <div className="glass-strong rounded-2xl p-8 card-hover gradient-bg">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">Mobile App Development</h3>
                    <p className="mb-6">Build powerful mobile apps for iOS and Android platforms</p>
                    <ul className="space-y-2">
                        <li>• iOS Apps</li>
                        <li>• Android Apps</li>
                        <li>• Cross-Platform Solutions</li>
                        <li>• App Maintenance</li>
                    </ul>
                </div>

                <div className="glass-strong rounded-2xl p-8 card-hover">
                    <div className="w-16 h-16 gradient-gold rounded-xl flex items-center justify-center mb-6">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">UI/UX Design</h3>
                    <p className="text-gray-400 mb-6">Design beautiful and intuitive user experiences</p>
                    <ul className="space-y-2 text-gray-300">
                        <li>• Wireframing</li>
                        <li>• Prototyping</li>
                        <li>• User Research</li>
                        <li>• Brand Identity</li>
                    </ul>
                </div>

               <div className="glass-strong rounded-2xl p-8 card-hover gradient-bg">
                <div className="w-16 h-16 gradient-gold rounded-xl flex items-center justify-center mb-6">
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M9 8a3 3 0 116 0v1h3a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v1a6 6 0 11-12 0v-1H4a1 1 0 110-2h1v-2H4a1 1 0 110-2h3V8z" />
                </svg>
                </div>

                <h3 className="text-2xl font-bold mb-4 dark:text-white">Testing</h3>

                <p className=" mb-6">
                    Delivering high-quality software through comprehensive testing practices
                </p>

                <ul className="space-y-2">
                    <li>• Manual Testing</li>
                    <li>• Automation Testing</li>
                    <li>• API Testing</li>
                    <li>• Bug Reporting & Documentation</li>
                </ul>
            </div>

            <div className="glass-strong rounded-2xl p-8 card-hover ">
            <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M3 10h2l3 9 4-18 3 9h4" />
                </svg>
            </div>

            <h3 className="text-2xl font-bold mb-4 dark:text-white">Digital Marketing & Branding</h3>

            <p className="text-gray-400 mb-6">
                Boost your online presence and build a strong digital identity for your business.
            </p>

            <ul className="space-y-2 text-gray-300">
                <li>• SEO Optimization</li>
                <li>• Social Media Branding</li>
                <li>• Paid Ads Management</li>
                <li>• Content Strategy</li>
            </ul>
        </div>
            </div>
        </div>
    </section>

    </>
    )
}