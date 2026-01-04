"use client";

import React, { useState } from "react";
import { Briefcase, MapPin, Clock, TrendingUp, Users, Zap } from "lucide-react";

export default function CareerPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    linkedIn: "",
    coverLetter: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const jobPositions = [
    {
      title: "MERN Stack Developer",
      type: "Full-time",
      location: "Remote / Mumbai",
      experience: "0-2 years",
      email: "astrioninnovation@gmail.com",
      skills: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "JavaScript",
        "REST APIs",
      ],
      description:
        "We're looking for a passionate MERN Stack Developer to build scalable web applications. You'll work on both frontend and backend development, creating seamless user experiences and robust server-side solutions.",
      responsibilities: [
        "Develop and maintain full-stack web applications using MERN stack",
        "Design and implement RESTful APIs and microservices",
        "Write clean, maintainable, and efficient code",
        "Collaborate with UI/UX designers to implement responsive designs",
        "Optimize applications for maximum speed and scalability",
        "Participate in code reviews and team discussions",
      ],
      requirements: [
        "Strong proficiency in JavaScript (ES6+)",
        "Experience with MongoDB, Express.js, React, and Node.js",
        "Understanding of RESTful APIs and asynchronous programming",
        "Knowledge of Git version control",
        "Problem-solving mindset and attention to detail",
        "Good communication and teamwork skills",
      ],
    },
    {
      title: "Software Tester (QA Engineer)",
      type: "Full-time",
      location: "Remote / Mumbai",
      experience: "0-1 year",
      email: "astrioninnovation@gmail.com",
      skills: [
        "Manual Testing",
        "Test Cases",
        "Bug Tracking",
        "Selenium",
        "API Testing",
        "Agile",
      ],
      description:
        "Join our quality assurance team to ensure our products meet the highest standards. You'll be responsible for identifying bugs, creating test cases, and working closely with developers to deliver flawless software.",
      responsibilities: [
        "Design, develop, and execute comprehensive test plans and test cases",
        "Perform manual and automated testing of web and mobile applications",
        "Identify, document, and track bugs using bug tracking tools",
        "Conduct regression, functional, and integration testing",
        "Collaborate with development team to resolve issues",
        "Participate in requirement analysis and design reviews",
      ],
      requirements: [
        "Understanding of software testing methodologies and QA processes",
        "Experience with manual testing and test case creation",
        "Familiarity with bug tracking tools (Jira, Bugzilla, etc.)",
        "Basic knowledge of automation testing tools (Selenium is a plus)",
        "Strong analytical and problem-solving skills",
        "Excellent attention to detail and documentation skills",
      ],
    },
  ];

  const [selectedJob, setSelectedJob] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    const subject = `Job Application - ${formData.position} - ${formData.fullName}`;
    const body = `
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Position: ${formData.position}
Experience: ${formData.experience}
Portfolio: ${formData.portfolio}
LinkedIn: ${formData.linkedIn}

Cover Letter:
${formData.coverLetter}
`;

    window.location.href = `mailto:astrioninnovation@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitMessage(
      "Application initiated! Please send the email from your email client."
    );
    setIsSubmitting(false);

    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        portfolio: "",
        linkedIn: "",
        coverLetter: "",
      });
      setSubmitMessage("");
    }, 5000);
  };

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <div className="relative overflow-hidden py-32 px-4">
        <div className="absolute inset-0 glass-strong"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-black dark:text-gray-200">
            Build Your <span className="gradient-text">Career</span> With Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
            Join a team that values innovation, growth, and work-life balance
          </p>
          <button
            onClick={() =>
              document
                .getElementById("positions")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="gradient-bg px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition "
          >
            View Open Positions
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* WHY JOIN */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-black dark:text-gray-200">
            Why <span className="gradient-text">Astrion Innovation?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Cutting-Edge Projects",
                desc: "Work with the latest technologies and solve real-world problems that matter.",
              },
              {
                icon: TrendingUp,
                title: "Growth & Learning",
                desc: "Continuous learning opportunities, mentorship, and career advancement paths.",
              },
              {
                icon: Users,
                title: "Remote-First Culture",
                desc: "Flexible working hours, work from anywhere, and excellent work-life balance.",
              },
            ].map((item, i) => (
              <div key={i} className="glass-strong p-8 rounded-3xl card-hover">
                <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black dark:text-gray-200">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* OPEN POSITIONS */}
        <div id="positions" className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-black dark:text-gray-200">
            Open <span className="gradient-text">Positions</span>
          </h2>

          <div className="space-y-6">
            {jobPositions.map((job, idx) => (
              <div
                key={idx}
                className="glass-strong rounded-3xl p-8 card-hover"
              >
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-3 gradient-text">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      <span className="glass px-4 py-2 rounded-full flex items-center gap-2 text-black dark:text-gray-200">
                        <Briefcase size={16} /> {job.type}
                      </span>
                      <span className="glass px-4 py-2 rounded-full flex items-center gap-2 text-black dark:text-gray-200">
                        <MapPin size={16} /> {job.location}
                      </span>
                      <span className="glass px-4 py-2 rounded-full flex items-center gap-2 text-black dark:text-gray-200">
                        <Clock size={16} /> {job.experience}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedJob(job);
                      setFormData((p) => ({ ...p, position: job.title }));
                      document
                        .getElementById("application-form")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                    className="gradient-bg px-3 py-0.5 rounded-full font-bold hover:scale-105 transition text-black dark:text-gray-200"
                  >
                    Apply Now →
                  </button>
                </div>

                <p className="text-gray-400 mb-6 text-lg">
                  {job.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-bold mb-3 text-gray-400 dark:text-gray-200">Required Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, i) => (
                      <span key={i} className="glass px-4 py-2 rounded-l">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 text-gray-400 dark:text-gray-200">Responsibilities:</h4>
                    <ul className="space-y-2 text-gray-400 ">
                      {job.responsibilities.map((r, i) => (
                        <li key={i}>• {r}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-3 text-gray-400 dark:text-gray-200">Requirements:</h4>
                    <ul className="space-y-2 text-gray-400">
                      {job.requirements.map((r, i) => (
                        <li key={i}>• {r}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <p>
                    <span className="font-semibold text-gray-400 dark:text-gray-200">Send applications to:</span>{" "}
                    <a
                      href={`mailto:${job.email}`}
                      className="gradient-text"
                    >
                      {job.email}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Application Form */}
<div
  id="application-form"
  className="glass-strong rounded-3xl shadow-2xl p-8 md:p-12"
>
  <div className="text-center mb-8">
    <h2 className="text-4xl md:text-5xl font-black mb-4 text-black dark:text-gray-200">
      Apply <span className="gradient-text">Now</span>
    </h2>
    <p className="text-gray-400 text-lg">
      Fill out the form below and we&apos;ll get back to you within 48 hours
    </p>
  </div>

  {submitMessage && (
    <div className="bg-teal-500/10 border border-teal-500 text-teal-400 rounded-2xl p-4 mb-8 text-center font-semibold">
      {submitMessage}
    </div>
  )}

  <div className="space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <label className="block font-semibold mb-2 text-gray-400 dark:text-gray-200">Full Name *</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="John Doe"
          className="w-full glass px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2 text-gray-400 dark:text-gray-200">Email Address *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="w-full glass px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2 text-gray-400 dark:text-gray-200">Phone Number *</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91 98765 43210"
          className="w-full glass px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2 text-gray-400 dark:text-gray-200">Position *</label>
        <select
          name="position"
          value={formData.position}
          onChange={handleChange}
          className="w-full glass px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="">Select Position</option>
          <option>MERN Stack Developer</option>
          <option>Software Tester (QA Engineer)</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-2 text-gray-400 dark:text-gray-200">Experience</label>
        <select
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full glass px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="">Select Experience</option>
          <option>0–1 years</option>
          <option>1–2 years</option>
          <option>2–4 years</option>
          <option>5+ years</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-2 text-gray-400 dark:text-gray-200">Portfolio URL</label>
        <input
          type="url"
          name="portfolio"
          value={formData.portfolio}
          onChange={handleChange}
          placeholder="https://portfolio.com"
          className="w-full glass px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div className="md:col-span-2">
        <label className="block font-semibold mb-2 text-gray-400 dark:text-gray-200">LinkedIn Profile</label>
        <input
          type="url"
          name="linkedIn"
          value={formData.linkedIn}
          onChange={handleChange}
          placeholder="https://linkedin.com/in/yourprofile"
          className="w-full glass px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
    </div>

    <div>
      <label className="block font-semibold mb-2 text-gray-400 dark:text-gray-200">Cover Letter *</label>
      <textarea
        name="coverLetter"
        value={formData.coverLetter}
        onChange={handleChange}
        placeholder="Tell us why you're a great fit for this role..."
        className="w-full h-40 glass px-4 py-3 rounded-xl outline-none resize-none focus:ring-2 focus:ring-teal-500"
      ></textarea>
    </div>

    <div className="text-center">
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="gradient-bg px-12 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit Application 🚀"}
      </button>

      <p className="text-gray-400 mt-4">
        Your application will be sent to:{" "}
        <span className="gradient-text font-semibold">
          astrioninnovation@gmail.com
        </span>
      </p>
    </div>
  </div>
</div>

{/* Contact Section */}
<div className="mt-16 text-center glass-strong rounded-3xl p-12">
  <h3 className="text-3xl font-bold mb-4 text-black dark:text-gray-200">
    Have <span className="gradient-text">Questions?</span>
  </h3>
  <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
    We&apos;re here to help! Reach out to us and we&apos;ll respond within 24
    hours.
  </p>
  <a
    href="mailto:astrioninnovation@gmail.com"
    className="inline-block gradient-bg px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
  >
    📧 astrioninnovation@gmail.com
  </a>
</div>

      </div>
    </div>
  );
}
