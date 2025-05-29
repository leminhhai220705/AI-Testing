"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechSolutions Inc.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    quote: "Working with XYZ Agency transformed our digital presence. Their strategic approach to social media and content marketing helped us increase our engagement by 150% in just 3 months.",
    rating: 5
  },
  {
    id: 2,
    name: "David Rodriguez",
    role: "CEO",
    company: "Startup Ventures",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    quote: "As a startup, we needed a marketing partner who understood our goals and budget constraints. XYZ Agency delivered exceptional results within our budget, helping us establish a strong online presence.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "E-commerce Manager",
    company: "Fashion Forward",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    quote: "The SEO strategy implemented by XYZ Agency increased our organic traffic by 200% and conversions by 85%. Their data-driven approach and regular reporting made the entire process transparent.",
    rating: 5
  },
  {
    id: 4,
    name: "Michael Barnes",
    role: "Operations Director",
    company: "Global Logistics",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    quote: "Their team's expertise in PPC advertising helped us reduce cost per acquisition by 40% while increasing lead quality. I highly recommend XYZ Agency for any business looking to optimize their advertising spend.",
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-primary font-semibold mb-3"
          >
            TESTIMONIALS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300"
          >
            Don't just take our word for it. Hear what our clients have to say about their experience working with us.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote marks */}
          <div className="absolute -top-10 left-0 text-6xl text-primary/20 font-serif">"</div>
          <div className="absolute -bottom-10 right-0 text-6xl text-primary/20 font-serif">"</div>
          
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 20,
                  position: activeIndex === index ? "relative" : "absolute"
                }}
                transition={{ duration: 0.5 }}
                className="w-full"
                style={{ display: activeIndex === index ? "block" : "none" }}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-lg md:text-xl italic text-gray-700 dark:text-gray-200 text-center md:text-left">
                  {testimonial.quote}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 