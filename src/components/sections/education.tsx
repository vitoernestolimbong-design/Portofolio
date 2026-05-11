"use client";

import { useState } from "react";
import { SectionWrapper } from "../ui/section-wrapper";
import { GlassCard } from "../ui/glass-card";
import { GraduationCap, Award, X, Maximize2 } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

export function EducationSection() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const certificates = [
    {
      title: "Google Gapura Digital — Digital Marketing & E-Commerce Training",
      description: "Participated in online professional training focused on digital marketing strategies, e-commerce optimization, and online product promotion.",
      info: "Issued by Google Gapura Digital • September 2021",
      image: "/cert-google.png"
    },
    {
      title: "Apple Developer Academy 2025 — Public Lecture Participant",
      description: "Attended a technology seminar discussing innovation, software development, and future readiness in the Apple developer ecosystem.",
      info: "Universitas Sanata Dharma • May 2025",
      image: "/cert-apple.jpg"
    }
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };
  
  const item: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 250, damping: 25 }
    }
  };

  return (
    <SectionWrapper id="education" className="bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Education */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold tracking-tight mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" /> Education
            </motion.h2>
            <motion.div variants={item}>
              <motion.a
                href="https://drive.google.com/file/d/1ElPOTBwIwDg0OYquNn5wlz4i7zMOMqyw/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block group"
              >
                <GlassCard glowHover className="p-8 relative overflow-hidden">
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-primary flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider">View Document</span>
                    <Maximize2 size={18} />
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">Bachelor of Informatics</h3>
                      <h4 className="text-lg text-primary font-medium">Sanata Dharma University</h4>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold whitespace-nowrap">
                      2021 - 2025
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    Graduated with a GPA of 3.20. Focused on intelligent systems, web technologies, and software engineering principles.
                  </p>
                </GlassCard>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Certificates */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold tracking-tight mb-8 flex items-center gap-3">
              <Award className="text-blue-500" /> Certificates
            </motion.h2>
            <div className="space-y-6">
              {certificates.map((cert, idx) => (
                <motion.div key={idx} variants={item}>
                  <div 
                    className="cursor-pointer group"
                    onClick={() => setSelectedCert(cert.image)}
                  >
                    <GlassCard glowHover className="p-6 relative overflow-hidden">
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-primary flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider">View Certificate</span>
                        <Maximize2 size={18} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 pr-8">{cert.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{cert.description}</p>
                      <div className="text-xs font-semibold text-primary">{cert.info}</div>
                    </GlassCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full h-auto max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl bg-secondary"
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              >
                <X size={24} />
              </button>
              <div className="relative w-full aspect-video md:aspect-[4/3]">
                <Image
                  src={selectedCert as string}
                  alt="Certificate"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
