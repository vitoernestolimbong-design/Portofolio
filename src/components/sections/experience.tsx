"use client";

import { SectionWrapper } from "../ui/section-wrapper";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Public Relations Division",
    organization: "KKN 68 Ngembringan",
    description: "Managed external communications, partnership building, and community engagement initiatives."
  },
  {
    role: "Temporary Executive Board",
    organization: "Sada Pardomuan",
    description: "Served on the executive board guiding organizational strategy and temporary administration tasks."
  },
  {
    role: "Sponsorship Division Staff",
    organization: "Samosir Christmas Committee",
    description: "Secured funding through strategic proposals and maintained relationships with corporate sponsors."
  },
  {
    role: "Interest and Talent Division",
    organization: "Parsamosir",
    description: "Organized events and programs focusing on developing student interests and extracurricular talents."
  }
];

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            My <span className="text-primary text-glow">Experience</span>
          </h2>
        </div>

        <div className="relative border-l border-border/50 ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: idx * 0.1 }}
              className="mb-12 relative pl-8 md:pl-0"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(157,78,221,0.8)] left-[-8.5px] top-1.5 md:left-1/2 md:-translate-x-1/2 md:top-2" />
              
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className={`md:text-right ${idx % 2 === 0 ? "md:col-start-1" : "md:col-start-2 md:text-left md:row-start-1"}`}>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <h4 className="text-lg text-primary font-medium mb-2">{exp.organization}</h4>
                </div>
                
                <div className={`mt-2 md:mt-0 ${idx % 2 === 0 ? "md:col-start-2" : "md:col-start-1 md:text-right md:row-start-1"}`}>
                  <p className="text-muted-foreground p-4 bg-secondary/20 rounded-xl border border-border/30 backdrop-blur-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
