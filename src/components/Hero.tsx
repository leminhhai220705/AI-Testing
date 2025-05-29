"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 hero-gradient z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            We Grow Your Business with{" "}
            <span className="gradient-text">Digital Marketing</span> Magic
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
            Elevate your brand with our data-driven marketing strategies, designed to increase visibility, engagement, and conversion rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-xl text-center"
            >
              Get Started
            </Link>
            <Link
              href="#services"
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-3 px-8 rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-colors shadow-lg hover:shadow-xl text-center"
            >
              Our Services
            </Link>
          </div>
          
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700"
                ></div>
              ))}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-bold">500+</span> satisfied clients
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:w-1/2 relative"
        >
          <div className="relative w-full h-[400px] md:h-[500px] float">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl"></div>
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="w-[90%] h-[90%] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-gray-100 dark:bg-gray-700 p-6 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-4">
                    <div className="w-full h-4 bg-gray-200 dark:bg-gray-600 rounded mb-3"></div>
                    <div className="w-2/3 h-4 bg-gray-200 dark:bg-gray-600 rounded mb-6"></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="aspect-video bg-primary/20 rounded-lg"></div>
                      <div className="aspect-video bg-accent/20 rounded-lg"></div>
                      <div className="aspect-video bg-secondary/20 rounded-lg"></div>
                      <div className="aspect-video bg-primary/20 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="w-8 h-12 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 