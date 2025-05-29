"use client";

import { motion } from "framer-motion";
import { 
  MegaphoneIcon, 
  GlobeAltIcon, 
  PresentationChartLineIcon, 
  CursorArrowRaysIcon, 
  PencilSquareIcon, 
  RocketLaunchIcon 
} from "@heroicons/react/24/outline";
import ReadMore from "./ReadMore";

const services = [
  {
    icon: <MegaphoneIcon className="h-10 w-10" />,
    title: "Social Media Marketing",
    description: "Engage with your audience on multiple platforms with targeted content that converts followers into customers.",
    expandedText: "Our social media experts craft tailored strategies across Facebook, Instagram, LinkedIn, Twitter, and TikTok to maximize engagement and drive meaningful conversions. We analyze your audience demographics, behavior patterns, and competitor strategies to create content that resonates with your target market."
  },
  {
    icon: <GlobeAltIcon className="h-10 w-10" />,
    title: "Search Engine Optimization",
    description: "Improve your visibility in search results with our data-driven SEO strategies tailored to your industry.",
    expandedText: "We conduct comprehensive keyword research, optimize on-page elements, build high-quality backlinks, and enhance technical SEO to improve your organic rankings. Our team stays updated with the latest algorithm changes to ensure your website maintains and improves its position in search results."
  },
  {
    icon: <PresentationChartLineIcon className="h-10 w-10" />,
    title: "Analytics & Reporting",
    description: "Make informed decisions with comprehensive analytics and regular performance reports.",
    expandedText: "We set up advanced tracking systems to monitor key performance indicators and provide detailed monthly reports with actionable insights. Our dashboard solutions give you real-time access to your campaign performance data, allowing for quick adjustments and optimizations."
  },
  {
    icon: <CursorArrowRaysIcon className="h-10 w-10" />,
    title: "Pay-Per-Click Advertising",
    description: "Maximize ROI with targeted PPC campaigns on Google, Bing, and social media platforms.",
    expandedText: "Our PPC specialists create highly targeted ad campaigns that reach your ideal customers at the moment they're searching for your products or services. We continually optimize bids, ad copy, and landing pages to reduce your cost per acquisition and maximize conversion rates."
  },
  {
    icon: <PencilSquareIcon className="h-10 w-10" />,
    title: "Content Marketing",
    description: "Engage your audience with compelling content that builds brand authority and drives organic traffic.",
    expandedText: "From blog posts and whitepapers to videos and infographics, we create valuable content that addresses your audience's pain points and positions your brand as an industry leader. Our content strategy focuses on creating a consistent publishing schedule that aligns with your overall marketing goals."
  },
  {
    icon: <RocketLaunchIcon className="h-10 w-10" />,
    title: "Growth Strategy",
    description: "Comprehensive digital strategies to accelerate your business growth and outperform competitors.",
    expandedText: "We develop holistic growth strategies that integrate all digital marketing channels for maximum impact. Our approach includes market research, competitive analysis, and customer journey mapping to identify opportunities for expansion and improvement."
  }
];

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 flex flex-col h-full group"
    >
      <div className="p-4 rounded-xl bg-primary/10 dark:bg-primary/20 w-fit mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      
      <ReadMore 
        initialText={service.description}
        expandedText={service.expandedText}
        className="text-gray-600 dark:text-gray-300 flex-grow"
      />
      
      <motion.div 
        className="mt-6 flex items-center text-primary font-medium read-more"
        whileHover={{ x: 5 }}
      >
        Learn more 
        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-primary font-semibold mb-3"
          >
            OUR SERVICES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Comprehensive Digital Marketing Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300"
          >
            We offer end-to-end digital marketing services to help your business grow online, reach more customers, and increase revenue.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 