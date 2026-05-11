"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { AnimatedBackground } from "../animated-background";
import Image from "next/image";

export function HeroSection() {
  const titles = ["Data Analyst", "Web Developer", "Administration"];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="max-w-4xl order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-primary font-space font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 text-glow opacity-80">
                Welcome to my portfolio
              </h2>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-foreground font-satoshi"
            >
              Vito Ernesto <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 dark:from-purple-400 dark:to-cyan-400">
                Limbong, S.Kom
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-12 md:h-16 mb-6 flex items-center overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={titleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-4xl font-bold font-space text-foreground/90 tracking-wide"
                >
                  {titles[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
            >
              Informatics graduate passionate about intelligent systems, modern web development, and data-driven solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-primary border border-transparent rounded-full hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                View Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://drive.google.com/uc?id=1EzJhJwnpMMzZH-UnuHURjxLz1YYx16z1&export=download" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-foreground transition-all duration-200 bg-transparent border border-border rounded-full hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary glass hover:border-primary/50"
              >
                Download CV
                <Download className="w-4 h-4 ml-2 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Refined Circular Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 15, 
              delay: 0.2
            }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 2, 0, -2, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]"
            >
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-full blur-2xl animate-pulse" />
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full border-2 border-primary/20 p-3 bg-background/50 backdrop-blur-sm shadow-2xl overflow-hidden group">
                <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">
                  <Image 
                    src="/vito-profile.png" 
                    alt="Vito Ernesto Limbong" 
                    fill
                    priority
                    className="object-cover object-top transition-all duration-700 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/10 group-hover:to-primary/20 transition-all" />
                </div>
              </div>

              {/* Decorative accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary rounded-full blur-lg opacity-50" />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-500 rounded-full blur-xl opacity-30" />
            </motion.div>
          </motion.div>

        </div>
      </div>
      
      {/* Decorative gradient blur */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 aspect-square bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
