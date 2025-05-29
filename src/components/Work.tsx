"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Sample portfolio items
const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Growth Strategy",
    category: "Strategy",
    image: "https://placehold.co/600x400/3b82f6/ffffff?text=E-commerce+Strategy",
    stats: ["+156%", "Revenue Growth"],
    client: "FashionTrend Online"
  },
  {
    id: 2,
    title: "SaaS Marketing Campaign",
    category: "Marketing",
    image: "https://placehold.co/600x400/8b5cf6/ffffff?text=SaaS+Campaign",
    stats: ["+83%", "Lead Generation"],
    client: "CloudSoft Solutions"
  },
  {
    id: 3,
    title: "Local Restaurant SEO",
    category: "SEO",
    image: "https://placehold.co/600x400/10b981/ffffff?text=Restaurant+SEO",
    stats: ["+94%", "Search Visibility"],
    client: "Fine Dining Experience"
  },
  {
    id: 4,
    title: "B2B Content Strategy",
    category: "Content",
    image: "https://placehold.co/600x400/f59e0b/ffffff?text=B2B+Content",
    stats: ["+215%", "Engagement Rate"],
    client: "Industrial Solutions Inc."
  },
  {
    id: 5,
    title: "App Launch Campaign",
    category: "Marketing",
    image: "https://placehold.co/600x400/ef4444/ffffff?text=App+Launch",
    stats: ["+10k", "App Downloads"],
    client: "HealthTrack App"
  },
  {
    id: 6,
    title: "E-commerce PPC Overhaul",
    category: "PPC",
    image: "https://placehold.co/600x400/14b8a6/ffffff?text=PPC+Overhaul",
    stats: ["-32%", "Cost Per Acquisition"],
    client: "HomeGoods Direct"
  }
];

// Categories for filtering
const categories = [
  "All",
  "Strategy",
  "Marketing",
  "SEO",
  "Content",
  "PPC"
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-primary font-semibold mb-3"
          >
            OUR WORK
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Award-Winning Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300"
          >
            Explore our portfolio of successful digital marketing campaigns and strategies that have helped our clients achieve remarkable results.
          </motion.p>
        </div>

        {/* Filter Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
              style={{ height: "300px" }}
            >
              <div className="absolute inset-0 w-full h-full bg-black/20 z-10"></div>
              <div 
                className="relative w-full h-full overflow-hidden"
                style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/90 dark:bg-black/80 rounded-full text-xs font-medium text-gray-800 dark:text-white mb-3">
                    {item.category}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/90 mb-2 drop-shadow-md">
                    Client: {item.client}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/90 p-2 rounded-lg">
                      <span className="text-lg font-bold text-white">{item.stats[0]}</span>
                    </div>
                    <span className="text-sm text-white drop-shadow-md">{item.stats[1]}</span>
                  </div>
                </div>
              </div>
              
              {/* Hover Effect */}
              <motion.div 
                className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <button className="bg-white text-primary px-5 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                  View Case Study
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work; 