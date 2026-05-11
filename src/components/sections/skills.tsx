"use client";

import { SectionWrapper } from "../ui/section-wrapper";
import { GlassCard } from "../ui/glass-card";
import { motion, Variants } from "framer-motion";

// Import Icons
import {
  FaPython, FaJava, FaHtml5, FaCss3, FaPhp, FaJs, FaNodeJs, FaReact, FaDatabase,
  FaFileExcel, FaFileWord, FaFilePowerpoint
} from "react-icons/fa";
import { MessageCircle, Lightbulb, Users, RefreshCw, BrainCircuit, Table2, PenTool } from "lucide-react";

const skillsData = [
  {
    category: "Technical",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3 },
      { name: "PHP", icon: FaPhp },
      { name: "JavaScript", icon: FaJs },
      { name: "Node.js", icon: FaNodeJs },
      { name: "React", icon: FaReact },
      { name: "SQL", icon: FaDatabase },
    ],
  },
  {
    category: "Software",
    skills: [
      { name: "Excel", icon: FaFileExcel },
      { name: "Word", icon: FaFileWord },
      { name: "PowerPoint", icon: FaFilePowerpoint },
      { name: "Google Spreadsheet", icon: Table2 },
      { name: "Canva", icon: PenTool },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Communication", icon: MessageCircle },
      { name: "Problem Solving", icon: Lightbulb },
      { name: "Teamwork", icon: Users },
      { name: "Adaptability", icon: RefreshCw },
      { name: "Analytical Thinking", icon: BrainCircuit },
    ],
  },
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

export function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            My <span className="text-primary text-glow">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities, software proficiency, and interpersonal skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((section, idx) => (
            <GlassCard key={idx} glowHover className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground border-b border-border/50 pb-4">
                {section.category}
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className="flex flex-wrap gap-3"
              >
                {section.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    variants={item}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default group"
                  >
                    <skill.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

