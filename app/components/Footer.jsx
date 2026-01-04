export default function Footer(){
    return(
         <footer className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                    <h3 className="text-2xl font-bold gradient-text mb-4">Astrion_Innovation</h3>
                    <p className="text-gray-400 mb-4">Transforming digital visions into reality with innovative solutions and cutting-edge technology.</p>
                    <div className="flex gap-4">
                        <a href="https://instagram.com/astrioninnovation" target="_blank"
                            className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-teal-500/20 transition text-gray-500 dark:text-gray-100">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 
                                    1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2c1.654 0 
                                    3 1.346 3 3s-1.346 3-3 3a3 3 0 110-6zm4.5-3a1.5 1.5 0 11-.001 2.999A1.5 1.5 0 0116.5 6z"/>
                                </svg>
                            </a>
                        <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-teal-500/20 transition text-gray-500 dark:text-gray-100">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                        </a>
                        <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-teal-500/20 transition text-gray-500 dark:text-gray-100">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-4 text-gray-400 dark:text-white">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#home" className="hover:text-teal-400 transition">Home</a></li>
                        <li><a href="#services" className="hover:text-teal-400 transition">Services</a></li>
                        <li><a href="#products" className="hover:text-teal-400 transition">Products</a></li>
                        <li><a href="#pricing" className="hover:text-teal-400 transition">Pricing</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4 text-gray-400 dark:text-white">Our Services</h4>
                    <ul className="space-y-2 text-gray-400 ">
                        <li className="hover:text-yellow-300 transition">Web Development</li>
                        <li className="hover:text-yellow-300 transition">Mobile Apps</li>
                        <li className="hover:text-yellow-300 transition">UI/UX Design</li>
                        <li className="hover:text-yellow-300 transition">Saas Products</li>
                        {/* <!-- <li className="hover:text-yellow-300 transition">Cloud Solutions</li> --> */}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4 text-gray-400 dark:text-white">Contact Info</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li className="hover:text-teal-400 transition">📧 astrioninnovation@gmail.com</li>
                        {/* <!-- <li className="hover:text-teal-400 transition">📞 +91 9967853969 / +91 8451060827</li> --> */}
                        <li className="hover:text-teal-400 transition">📍 Navi Mumbai, India</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10 pt-5 text-center text-gray-400">
                <p>© 2025 Astrion Innovation. All rights reserved.</p>
            </div>
        </div>
    </footer>

    )
}