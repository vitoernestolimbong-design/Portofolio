"use client";

import { useState } from "react";
import { SectionWrapper } from "../ui/section-wrapper";
import { GlassCard } from "../ui/glass-card";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export function ContactSection() {
  const [formData, setFormData] = useState({
    subject: "",
    message: ""
  });

  const contactInfo = [
    { icon: Mail, label: "Email", value: "vitoernestolimbong@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=vitoernestolimbong@gmail.com" },
    { icon: FaLinkedin, label: "LinkedIn", value: "Vito Ernesto Limbong", href: "https://www.linkedin.com/in/vito-ernesto-limbong-01a745221/" },
    { icon: Phone, label: "WhatsApp", value: "+6285891189893", href: "https://wa.me/6285891189893" },
    { icon: MapPin, label: "Location", value: "Medan, North Sumatera", href: "https://maps.app.goo.gl/4zW6k9e14U6n8ddo7" },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { subject, message } = formData;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vitoernestolimbong@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    
    window.open(gmailUrl, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <SectionWrapper id="contact">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Get In <span className="text-primary text-glow">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          <GlassCard glowHover className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, idx) => (
                    <motion.a 
                      key={idx} 
                      href={info.href}
                      target={(info.href.startsWith("http") || info.href.startsWith("mailto")) ? "_blank" : undefined}
                      rel={(info.href.startsWith("http") || info.href.startsWith("mailto")) ? "noopener noreferrer" : undefined}
                      whileHover={{ scale: 1.02, x: 8 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-4 group hover:text-primary transition-all duration-300 p-2 rounded-xl hover:bg-primary/5"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(157,78,221,0.5)] transition-all duration-300">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Hello Vito..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Send Message
                </button>
              </form>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
