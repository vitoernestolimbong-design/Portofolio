"use client";

import { useState } from "react";
import { SectionWrapper } from "../ui/section-wrapper";
import { GlassCard } from "../ui/glass-card";
import Image from "next/image";
import { Award, Calendar, Building2, X, ZoomIn } from "lucide-react";
import { motion, Variants, AnimatePresence } from "framer-motion";

const certificates = [
  {
    title: "AI untuk Excel & Keuangan",
    organization: "Marvin Foundation",
    date: "16 May 2026",
    description: "Pelatihan AI untuk Excel & Keuangan: Otomatisasi Data, Rumus, dan Laporan Kerja",
    image: "/certificates/ai-excel-2026.jpg"
  },
  {
    title: "Seminar IT DAYS 2023",
    organization: "HMIF Universitas Sanata Dharma",
    date: "4 November 2023",
    description: "Seminar IT DAYS 2023 - \"Navigating Digital Careers: Exploring Opportunities and Skills\"",
    image: "/certificates/it-days-2023.jpg"
  },
  {
    title: "Sharing Ngos-Ngosan",
    organization: "HMIF Universitas Sanata Dharma",
    date: "3 Agustus 2022",
    description: "Sharing Ngos-Ngosan dengan tema \"Ngobrol Santai Dapat Ilmu\"",
    image: "/certificates/ngos-ngosan-2022.jpg"
  },
  {
    title: "IT DAYS 2021 Animo",
    organization: "FST Universitas Sanata Dharma",
    date: "31 Desember 2021",
    description: "Technology Development to Enhance Local \"UMKM\"",
    image: "/certificates/it-days-2021.jpg"
  },
  {
    title: "Kuliah Umum 2021",
    organization: "Informatika Universitas Sanata Dharma",
    date: "17 September 2021",
    description: "Kuliah Umum 2021 dengan tema \"Penerapan A.I. di Industri 4.0\"",
    image: "/certificates/kuliah-umum-2021.jpg"
  },
  {
    title: "Google Gapura Digital",
    organization: "Google Gapura Digital",
    date: "September 2021",
    description: "Digital Marketing & E-Commerce Training",
    image: "/certificates/cert-google.png"
  },
  {
    title: "Apple Developer Academy 2025",
    organization: "Universitas Sanata Dharma",
    date: "May 2025",
    description: "Public Lecture Participant",
    image: "/certificates/cert-apple.jpg"
  }
];

export function CertificatesSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 25 }
    }
  };

  return (
    <SectionWrapper id="certificates" className="bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            My <span className="text-amber-500 text-glow-amber">Certificates</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            A collection of certifications and seminars I've participated in to continuously expand my knowledge and skills.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert, idx) => (
            <motion.div key={idx} variants={item} className="h-full">
              <GlassCard glowHover className="flex flex-col p-0 overflow-hidden group h-full hover:border-amber-500/30 transition-colors">
                <div 
                  className="relative h-48 w-full bg-secondary/50 overflow-hidden flex items-center justify-center cursor-pointer"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  {/* Fallback icon in case image doesn't load/exist yet */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <Award className="w-24 h-24 text-amber-500" />
                  </div>
                  
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 z-10"
                    onError={(e) => {
                      // Hide image if it fails to load
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{cert.description}</p>
                  
                  <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-border/50 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-amber-500" />
                      <span className="truncate">{cert.organization}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center z-[105]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={selectedImage} 
                alt="Certificate full view" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
