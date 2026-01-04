

export default function ContactUs (){
    return(
         <section id="contact" className="py-16 mt-6">
           <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center text-black dark:text-gray-200">
           Contact <span className="gradient-text">Us</span> 
          </h1>
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
        
    )
}