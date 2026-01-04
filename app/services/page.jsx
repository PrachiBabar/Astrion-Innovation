"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Icons
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaVial, FaRocket } from "react-icons/fa";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function Services() {
  const router = useRouter();

const data = [
    {
      id: 1,
      title: "Web Development",
      description: "Build modern, responsive, and high-performance web applications tailored to your business needs using cutting-edge technologies.",
      details: [
        "Single Page Applications (SPA) - React, Vue, Angular for seamless user experiences",
        "Progressive Web Apps (PWA) - Offline-first apps with native-like capabilities",
        "E-commerce Platforms - Shopify, WooCommerce, custom solutions with payment integration",
        "Content Management Systems - WordPress, Contentful, custom CMS development",
        "Custom Backend Development - Node.js, Python, PHP with scalable database architecture",
        "API Integration & Development - RESTful APIs, GraphQL, third-party service connections",
        "Web Optimization - SEO-friendly code, fast loading times, Core Web Vitals optimization",
        "Cloud Deployment - AWS, Google Cloud, Azure hosting and DevOps setup"
      ],
      icon: <FaLaptopCode className="text-4xl text-blue-400" />,
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Create powerful, feature-rich mobile applications for iOS and Android with exceptional performance and user engagement.",
      details: [
        "Native iOS Apps - Swift & SwiftUI development with Apple ecosystem integration",
        "Native Android Apps - Kotlin & Jetpack Compose for optimal performance",
        "Cross-platform Solutions - React Native, Flutter for cost-effective multi-platform apps",
        "App UI/UX Design - Intuitive interfaces following platform-specific guidelines",
        "Backend & Database Integration - Firebase, AWS Amplify, custom APIs",
        "Push Notifications & Analytics - User engagement tracking and retention strategies",
        "App Store Deployment - Complete submission and approval process management",
        "Ongoing Maintenance & Updates - Bug fixes, feature updates, OS compatibility"
      ],
      icon: <FaMobileAlt className="text-4xl text-green-400" />,
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Design stunning, user-centered interfaces that combine aesthetics with functionality to deliver exceptional digital experiences.",
      details: [
        "User Research & Analysis - Understanding target audience, personas, and pain points",
        "Information Architecture - Organizing content for optimal navigation and findability",
        "Wireframing & Low-Fi Mockups - Structural layouts and early-stage concept validation",
        "Interactive Prototyping - Figma, Adobe XD prototypes for user testing",
        "Visual Design & Branding - Color systems, typography, iconography, style guides",
        "Responsive Design - Seamless experiences across desktop, tablet, and mobile devices",
        "Accessibility Design - WCAG compliant designs ensuring inclusivity for all users",
        "Design Systems - Scalable component libraries for consistent brand experiences"
      ],
      icon: <FaPaintBrush className="text-4xl text-pink-400" />,
    },
    {
      id: 4,
      title: "Software Testing & QA",
      description: "Ensure flawless software quality through comprehensive testing strategies that identify and eliminate bugs before deployment.",
      details: [
        "Manual Testing - Exploratory, functional, regression, and user acceptance testing",
        "Automation Testing - Selenium, Cypress, Jest for efficient continuous testing",
        "API Testing - Postman, REST Assured for backend validation and integration checks",
        "Performance Testing - Load, stress, and scalability testing using JMeter, LoadRunner",
        "Mobile App Testing - Device compatibility, OS versions, performance optimization",
        "Security Testing - Vulnerability assessments, penetration testing, data protection",
        "Cross-Browser Testing - Chrome, Firefox, Safari, Edge compatibility verification",
        "Detailed Bug Reports - Comprehensive documentation with reproduction steps and fixes"
      ],
      icon: <FaVial className="text-4xl text-yellow-400" />,
    },
    {
      id: 5,
      title: "Digital Marketing & Branding",
      description: "Amplify your brand's online presence with strategic marketing campaigns that drive traffic, engagement, and conversions.",
      details: [
        "SEO Strategy - Keyword research, on-page optimization, link building, technical SEO",
        "Content Marketing - Blog posts, video content, infographics, email campaigns",
        "Social Media Management - Instagram, LinkedIn, Facebook, Twitter strategy and execution",
        "Paid Advertising - Google Ads, Facebook Ads, LinkedIn Ads with ROI tracking",
        "Brand Identity Development - Logo design, brand guidelines, visual storytelling",
        "Lead Generation - Landing pages, conversion funnels, CRM integration",
        "Analytics & Reporting - Google Analytics, heatmaps, A/B testing, performance insights",
        "Influencer Marketing - Partnership strategies and campaign management"
      ],
      icon: <FaRocket className="text-4xl text-purple-400" />,
    },
  ];

  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (id) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

//   const goToDetails = (id) => {
//     router.push(`/services/${id}`);
//   };

  return (
    <section className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1
          className="text-5xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Services
        </motion.h1>

        <div className="space-y-12">
          {data.map((service, index) => (
            <motion.div
              key={service.id}
              className="glass-strong p-8 rounded-2xl border border-white/10 cursor-pointer hover:scale-[1.02] transition-all"
            //   onClick={() => goToDetails(service.id)}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h2 className="text-3xl font-bold">{service.title}</h2>
              </div>

              <p className="text-gray-300 mb-4">{service.description}</p>

              {/* Accordion Header */}
              <div
                className="flex justify-between items-center mt-4"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAccordion(service.id);
                }}
              >
                <span className="text-lg font-semibold">View Details</span>

                {openAccordions[service.id] ? (
                  <IoChevronUp size={24} />
                ) : (
                  <IoChevronDown size={24} />
                )}
              </div>

              {/* Accordion Content */}
              {openAccordions[service.id] && (
                <motion.ul
                  className="space-y-2 text-gray-400 ml-5 mt-4 list-disc"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                >
                  {service.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </motion.ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
