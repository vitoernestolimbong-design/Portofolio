"use client";

import { SectionWrapper } from "../ui/section-wrapper";
import { GlassCard } from "../ui/glass-card";
import Image from "next/image";
import { Code2, Database, BrainCircuit, GraduationCap } from "lucide-react";
import { motion, Variants } from "framer-motion";

export function AboutSection() {
  const stats = [
    { label: "GPA", value: "3.20", icon: GraduationCap },
    { label: "Projects", value: "2+", icon: Database },
    { label: "Role", value: "React & Laravel Dev", icon: Code2 },
    { label: "Interest", value: "ML Enthusiast", icon: BrainCircuit },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const item: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    <SectionWrapper id="about" className="bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="lg:w-1/2 space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              About <span className="text-primary text-glow">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a Bachelor of Informatics graduate from Sanata Dharma University with a strong interest in Web Development, Machine Learning, and Data Analysis.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experienced with modern web technologies including React.js, Laravel, Python, and SQL. I bring strong analytical thinking, teamwork, and communication skills to every project I undertake.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <GlassCard className="p-6 relative overflow-hidden border-l-4 border-l-primary hover:border-l-blue-500 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <GraduationCap className="w-32 h-32" />
                </div>
                <div className="relative z-10 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                    <GraduationCap className="w-5 h-5" />
                    <span className="uppercase tracking-wider text-sm">Education</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Bachelor of Informatics</h3>
                    <h4 className="text-lg text-primary font-medium">Sanata Dharma University</h4>
                  </div>
                  <div className="inline-flex items-center w-fit px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mt-1 mb-2">
                    2021 - 2025
                  </div>
                  <p className="text-muted-foreground text-sm max-w-[90%]">
                    Graduated with a GPA of 3.20. Focused on intelligent systems, web technologies, and software engineering principles.
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
          >
            {stats.map((stat, idx) => (
              <motion.div key={idx} variants={item} className="h-full">
                <GlassCard glowHover className="flex flex-col items-center justify-center p-8 text-center h-full">
                  <div className="p-4 bg-primary/10 rounded-full mb-4 text-primary">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-foreground">{stat.value}</h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  );
}
