
 
 export default function Training() {
 
   return (
 
 <section id="training" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Industrial Trainee Development</span>
            </h2>
            <p className="text-gray-400 text-lg">
                Hands-on professional training programs designed for real-world IT careers.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

             {/* Development Training  */}
            <div className="glass-strong rounded-2xl p-8 card-hover">
                <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M3 4a1 1 0 011-1h4.586a1 1 0 01.707.293l1.414 1.414A1 1 0 0010.414 6H20a1 1 0 011 1v11a1 
                            1 0 01-1 1H4a1 1 0 01-1-1V4z" />
                    </svg>
                </div>

                <h3 className="text-2xl font-bold mb-4 dark:text-white">Development Training</h3>
                <p className="text-gray-400 mb-6">
                    Learn full-stack development with real projects and industry-standard tools.
                </p>

                <ul className="space-y-2 text-gray-300">
                    <li>• Frontend (HTML, CSS, JavaScript)</li>
                    <li>• React.js / Next.js</li>
                    <li>• Backend (Node.js / Express)</li>
                    <li>• MongoDB / SQL Databases</li>
                    <li>• REST API Development</li>
                    <li>• Git & GitHub</li>
                    <li>• Deployment (Vercel / AWS)</li>
                    <li>• Live Full-Stack Project</li>
                </ul>
               <a  href="https://wa.me/919967853969?text=I%20am%20interested%20in%20this%20training.%20I%20want%20to%20know%20more%20details."
                target="_blank"
                className="px-6 py-3 mt-5 rounded-lg gradient-bg text-white font-semibold hover:opacity-90 transition block text-center"
            >
                Enroll
            </a>

            </div>

            {/*  Testing Training  */}
            <div className="glass-strong rounded-2xl p-8 card-hover">
                <div className="w-16 h-16 gradient-gold rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M9 8a3 3 0 116 0v1h3a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v1a6 6 0 11-12 
                            0v-1H4a1 1 0 110-2h1v-2H4a1 1 0 110-2h3V8z" />
                    </svg>
                </div>

                <h3 className="text-2xl font-bold mb-4 dark:text-white">Testing Training</h3>
                <p className="text-gray-400 mb-6">
                    Master QA methodologies with hands-on testing tools & frameworks.
                </p>

                <ul className="space-y-2 text-gray-300">
                    <li>• Manual Testing</li>
                    <li>• Automation Testing (Selenium / Cypress)</li>
                    <li>• API Testing (Postman / JMeter)</li>
                    <li>• Test Case Writing & Execution</li>
                    <li>• Bug Tracking (Jira / Trello)</li>
                    <li>• STLC & SDLC</li>
                    <li>• Real Application Testing</li>
                </ul>
                 <a  href="https://wa.me/919967872066?text=I%20am%20interested%20in%20this%20training.%20I%20want%20to%20know%20more%20details."
                target="_blank"
                className="px-6 py-3 mt-5 rounded-lg gradient-bg text-white font-semibold hover:opacity-90 transition block text-center"
            >
                Enroll
            </a>
            </div>

             {/* UI/UX Training */}
            <div className="glass-strong rounded-2xl p-8 card-hover">
                <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M12 6V4m0 2a2 2 0 110 4m0-4a2 2 0 110 4m-6 
                              8v-2a6 6 0 0112 0v2M4 8h.01M20 8h.01" />
                    </svg>
                </div>

                <h3 className="text-2xl font-bold mb-4 dark:text-white">UI/UX Design Training</h3>
                <p className="text-gray-400 mb-6">
                    Learn to design beautiful, functional, and user-centered digital experiences.
                </p>

                <ul className="space-y-2 text-gray-300">
                    <li>• Design Principles & Color Theory</li>
                    <li>• Wireframing & Prototyping</li>
                    <li>• Figma Mastery</li>
                    <li>• User Personas & Research</li>
                    <li>• Responsive Design</li>
                    <li>• Design System & Branding</li>
                    <li>• Portfolio & Case Study Building</li>
                </ul>
                 <a  href="https://wa.me/919967853969?text=I%20am%20interested%20in%20this%20training.%20I%20want%20to%20know%20more%20details."
                target="_blank"
                className="px-6 py-3 mt-5 rounded-lg gradient-bg text-white font-semibold hover:opacity-90 transition block text-center"
            >
                Enroll
            </a>
            </div>

        </div>

    </div>
</section>
   )

}