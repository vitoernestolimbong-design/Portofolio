"use client";

import { SectionWrapper } from "../ui/section-wrapper";
import { GlassCard } from "../ui/glass-card";
import Image from "next/image";
import { BrainCircuit, Server } from "lucide-react";
import { FaPython, FaFlask, FaReact, FaDatabase, FaLaravel, FaChartPie } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const projects = [
  {
    title: "Tourism Recommendation System",
    description: "An intelligent recommendation engine utilizing collaborative filtering to suggest personalized tourist destinations around Samosir and Lake Toba.",
    tech: [
      { name: "Python", icon: FaPython },
      { name: "Flask", icon: FaFlask },
      { name: "Machine Learning", icon: BrainCircuit },
      { name: "React", icon: FaReact },
      { name: "PostgreSQL", icon: FaDatabase }
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lake_Toba_and_the_surrounding_hills.jpg/960px-Lake_Toba_and_the_surrounding_hills.jpg"
  },
  {
    title: "Semicolon Psychological Test Platform",
    description: "A comprehensive MBTI psychological test platform featuring a React.js frontend, Laravel REST API backend, MySQL database, and interactive chart visualizations for test results.",
    tech: [
      { name: "React.js", icon: FaReact },
      { name: "Laravel", icon: FaLaravel },
      { name: "MySQL", icon: FaDatabase },
      { name: "REST API", icon: Server },
      { name: "Charts", icon: FaChartPie }
    ],
    image: "/semicolon-project.png"
  }
];

export function ProjectsSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 25 }
    }
  };

  return (
    <SectionWrapper id="projects" className="bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Featured <span className="text-blue-500 text-glow-blue">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Showcasing some of my recent work bridging the gap between intelligent systems and modern web development.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={item}>
              <GlassCard glowHover className="flex flex-col p-0 overflow-hidden group h-full">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, tIdx) => (
                      <span key={tIdx} className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md bg-secondary text-secondary-foreground border border-border/50">
                        <tech.icon className="w-3.5 h-3.5" /> {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
