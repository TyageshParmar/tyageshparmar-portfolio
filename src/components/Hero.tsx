import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, MapPin, FileText } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden grid-background pt-16"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-data-purple/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-data-blue/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-data-teal text-lg font-medium"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold gradient-text pb-6 leading-normal py-2"
            >
              Tyagesh Parmar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl md:text-2xl text-foreground/90"
            >
              Data Scientist | ML Engineer | AI Engineer
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center justify-center gap-2 text-foreground/70"
            >
              <MapPin className="w-4 h-4" />
              <span>Ahmedabad, Gujarat</span>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg text-foreground/80 max-w-xl"
          >
            Transforming complex data into intelligent solutions through machine learning and deep learning.
            Specializing in RAG systems, NLP, Computer Vision, and predictive modeling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="group relative overflow-hidden">
              <a href="#projects">
                <span className="relative z-10">View My Projects</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-data-purple to-data-blue opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="group hover:border-primary transition-colors">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="secondary" size="lg" asChild className="group">
              <a href="https://drive.google.com/file/d/1KKgFeCnMx6GMKQnNdkOVczrCSdgN1BlB/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex gap-4 mt-6"
          >
            {[
              { href: "https://github.com/TyageshParmar?tab=repositories", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/tyagesh-parmar-740248333/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:tyageshrparmar2107@gmail.com", icon: Mail, label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="bg-secondary/50 p-3 rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          aria-label="Scroll to About section"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-foreground/60 hover:text-primary transition-colors" />
        </motion.a>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-10 w-3 h-3 rounded-full bg-data-purple"
      />
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/3 left-10 w-2 h-2 rounded-full bg-data-blue"
      />
      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-data-teal/50"
      />
    </section>
  );
};

export default Hero;
