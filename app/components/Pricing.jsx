'use client';

export default function Pricing() {
 return(
    <>
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="gradient-text">Transparent Pricing</span></h2>
                <p className="text-gray-400 text-lg">Choose the perfect package for your project</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="glass-strong rounded-2xl p-8 card-hover">
                    <div className="w-12 h-12 gradient-gold rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 dark:text-white">Starter</h3>
                    <div className="text-3xl font-bold gradient-text mb-6">₹80K - ₹1.6L</div>
                    <ul className="space-y-3 text-gray-300 mb-8">
                        <li>✓ 5 Pages Website</li>
                        <li>✓ Basic SEO Setup</li>
                        <li>✓ Responsive Design</li>
                        <li>✓ Up to 5 Emails</li>
                        <li>✓ 30 Days Support</li>
                    </ul>
                    <a  
                    href="https://wa.me/919967853969?text=I'd%20like%20to%20build%20a%20project%20with%20you.%20Let's%20connect!"
                    target="_blank" 
                    className="w-full glass-strong px-6 py-3 rounded-lg hover:bg-white/10 transition"
                >
                    Get Started
                </a>


                </div>

                <div className="glass-strong rounded-2xl p-8 card-hover gradient-bg transform md:scale-105">
                    <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                        MOST POPULAR
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 dark:text-white">Business Pro</h3>
                    <div className="text-3xl font-bold mb-6">₹3.2L - ₹8L</div>
                    <ul className="space-y-3 mb-8">
                        <li>✓ 15 Pages Website</li>
                        <li>✓ Advanced SEO</li>
                        <li>✓ Priority Support</li>
                        <li>✓ E-commerce Integration</li>
                        <li>✓ Advanced Features</li>
                        <li>✓ 90 Days Support</li>
                    </ul>
                    <a  href="https://wa.me/919967853969?text=I'd%20like%20to%20build%20a%20project%20with%20you.%20Let's%20connect!" className="w-full bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                        Get Started
                    </a>
                </div>

                <div className="glass-strong rounded-2xl p-8 card-hover">
                    <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 dark:text-white">E-Commerce</h3>
                    <div className="text-3xl font-bold gradient-text mb-6">₹8L - ₹11L</div>
                    <ul className="space-y-3 text-gray-300 mb-8">
                        <li>✓ Custom Design</li>
                        <li>✓ Full E-commerce</li>
                        <li>✓ Payment Gateway</li>
                        <li>✓ Inventory Management</li>
                        <li>✓ Admin Panel</li>
                        <li>✓ 6 Months Support</li>
                    </ul>
                    <a  
                    href="https://wa.me/919967853969?text=I'd%20like%20to%20build%20a%20project%20with%20you.%20Let's%20connect!"
                    target="_blank" 
                    className="w-full glass-strong px-6 py-3 rounded-lg hover:bg-white/10 transition"
                >
                    Get Started
                </a>

                </div>

                <div className="glass-strong rounded-2xl p-8 card-hover">
                    <div className="w-12 h-12 gradient-gold rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 dark:text-white">Enterprise</h3>
                    <div className="text-3xl font-bold gradient-text mb-6">Custom</div>
                    <ul className="space-y-3 text-gray-300 mb-8">
                        <li>✓ Unlimited Pages</li>
                        <li>✓ Advanced Features</li>
                        <li>✓ Priority Support 24/7</li>
                        <li>✓ Dedicated Team</li>
                        <li>✓ Custom Integrations</li>
                        <li>✓ Lifetime Support</li>
                    </ul>
                    <a  
                    href="https://wa.me/919967853969?text=I'd%20like%20to%20build%20a%20project%20with%20you.%20Let's%20connect!"
                    target="_blank" 
                    className="w-full glass-strong px-6 py-3 rounded-lg hover:bg-white/10 transition"
                >
                    Get Started
                </a>

                </div>
            </div>

            {/* <!-- Payment Terms --> */}
            <div className="mt-16 glass-strong rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Payment Terms</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold">1</span>
                        </div>
                        <h4 className="text-xl font-bold mb-2 text-gray-400 dark:text-white">30% Advance</h4>
                        <p className="text-gray-400">To start the project</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold ">2</span>
                        </div>
                        <h4 className="text-xl font-bold mb-2 text-gray-400 dark:text-white">40% Milestone</h4>
                        <p className="text-gray-400">After completion of development</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold">3</span>
                        </div>
                        <h4 className="text-xl font-bold mb-2 text-gray-400 dark:text-white">30% Final</h4>
                        <p className="text-gray-400">After project completion & delivery</p>
                    </div>
                </div>
                <p className="text-center text-gray-400 mt-8 dark:text-white">* Flexible payment options available for long-term projects</p>
            </div>
        </div>
    </section>




    {/* Work flow */}
     <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="gradient-text">Project Workflow</span></h2>
                <p className="text-gray-400 text-lg">Our proven process to deliver exceptional results</p>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                    <div className="flex items-start gap-6 slide-in-left">
                        <div className="flex-shrink-0 w-16 h-16 gradient-bg rounded-full flex items-center justify-center font-bold text-xl">1</div>
                        <div className="glass-strong rounded-xl p-6 flex-1">
                            <h3 className="text-xl font-bold mb-2 dark:text-white">Requirements</h3>
                            <p className="text-gray-400">Understanding your vision and requirements</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 slide-in-right">
                        <div className="flex-shrink-0 w-16 h-16 gradient-bg rounded-full flex items-center justify-center font-bold text-xl">2</div>
                        <div className="glass-strong rounded-xl p-6 flex-1">
                            <h3 className="text-xl font-bold mb-2 dark:text-white">Wireframing</h3>
                            <p className="text-gray-400">Creating the blueprint of your project</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 slide-in-left">
                        <div className="flex-shrink-0 w-16 h-16 gradient-bg rounded-full flex items-center justify-center font-bold text-xl">3</div>
                        <div className="glass-strong rounded-xl p-6 flex-1">
                            <h3 className="text-xl font-bold mb-2 dark:text-white">Development</h3>
                            <p className="text-gray-400">Full-stack implementation with best practices</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 slide-in-right">
                        <div className="flex-shrink-0 w-16 h-16 gradient-bg rounded-full flex items-center justify-center font-bold text-xl">4</div>
                        <div className="glass-strong rounded-xl p-6 flex-1">
                            <h3 className="text-xl font-bold mb-2 dark:text-white">Testing & QA</h3>
                            <p className="text-gray-400">Ensuring quality and reliability</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 slide-in-left">
                        <div className="flex-shrink-0 w-16 h-16 gradient-bg rounded-full flex items-center justify-center font-bold text-xl">5</div>
                        <div className="glass-strong rounded-xl p-6 flex-1">
                            <h3 className="text-xl font-bold mb-2 dark:text-white">Deployment</h3>
                            <p className="text-gray-400">Launch & go live with full support</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 slide-in-right">
                        <div className="flex-shrink-0 w-16 h-16 gradient-gold rounded-full flex items-center justify-center font-bold text-xl">6</div>
                        <div className="glass-strong rounded-xl p-6 flex-1">
                            <h3 className="text-xl font-bold mb-2 dark:text-white">Support</h3>
                            <p className="text-gray-400">Ongoing maintenance & updates</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* contact form */}
     <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-strong rounded-3xl p-8 md:p-16 text-center">
                <div className="inline-block gradient-bg text-sm font-semibold px-4 py-2 rounded-full mb-6">
                    🚀 Ready to Start?
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 dark:text-white">
                    Let&apos;s Build Something <span className="gradient-text">Amazing Together</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                    Turn your vision into reality with our expert team. From concept to launch, we&apos;re here to create digital experiences that drive results.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <a 
                        href="https://wa.me/91 9967853969?text=Hello%20let's%20build%20something.%20Let's%20connect!" 
                        target="_blank"
                        className="gradient-bg px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition transform hover:scale-105"
                    >
                        💬 Let&apos;s Start Something Amazing
                    </a>

                    <a 
                        href="mailto:astrioninnovation@gmail.com?subject=Let's Connect&body=Hello, I want to collaborate with you."
                        className="glass px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition transform hover:scale-105"
                    >
                        📧 Send Email
                    </a>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <span className="text-sm dark:text-white">Fast Delivery</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                        </div>
                        <span className="text-sm dark:text-white">100% Secure</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 gradient-gold rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <span className="text-sm dark:text-white">24/7 Support</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
 )

}