

export default function Products() {
  

  return (  
  <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="gradient-text">Ready-Made Products</span></h2>
                <p className="text-gray-400 text-lg">Pre-built solutions you can customize and deploy instantly</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass-strong rounded-2xl p-8 card-hover">
                    <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 dark:text-white">E-Commerce Suite</h3>
                    <p className="text-gray-400 mb-6">Complete online store solution with payment integration</p>
                    <div className="text-3xl font-bold gradient-text mb-6">₹1,00,000</div>
                    <a  
                    href="https://wa.me/919967853969?text=I'd%20like%20to%20build%20a%20project%20with%20you.%20Let's%20connect!"
                    target="_blank" 
                    className="w-full glass-strong px-6 py-3 rounded-lg hover:bg-white/10 transition"
                >
                    Buy Now
                </a>

                </div>

                <div className="glass-strong rounded-2xl p-8 card-hover gradient-bg">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 dark:text-white">LMS Platform</h3>
                    <p className="mb-6">Learning management system for online courses</p>
                    <div className="text-3xl font-bold mb-6">₹80,000</div>
                    <a  
                    href="https://wa.me/919967853969?text=I'd%20like%20to%20build%20a%20project%20with%20you.%20Let's%20connect!"
                    target="_blank" 
                    className="w-full glass-strong px-6 py-3 rounded-lg hover:bg-white/10 transition"
                >
                    Buy Now
                </a>

                </div>

                <div className="glass-strong rounded-2xl p-8 card-hover">
                    <div className="w-12 h-12 gradient-gold rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 dark:text-white">CRM System</h3>
                    <p className="text-gray-400 mb-6">Customer relationship management platform</p>
                    <div className="text-3xl font-bold gradient-text mb-6">₹95,000</div>
                    <a  
                    href="https://wa.me/919967853969?text=I'd%20like%20to%20build%20a%20project%20with%20you.%20Let's%20connect!"
                    target="_blank" 
                    className="w-full glass-strong px-6 py-3 rounded-lg hover:bg-white/10 transition "
                >
                    Buy Now
                </a>

                </div>
            </div>
        </div>
    </section>
  )
}