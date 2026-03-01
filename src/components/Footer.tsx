import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-card py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div>
            <p className="font-semibold gradient-text">Tyagesh Parmar | AI/ML Portfolio</p>
            <p className="text-foreground/60 text-sm mt-1">
              Data Scientist | ML Engineer | AI Engineer
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-foreground/80 hover:text-primary text-sm transition-colors"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          
          <div className="flex space-x-4 items-center">
            {[
              { href: "https://github.com/TyageshParmar?tab=repositories", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/tyagesh-parmar-740248333/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:tyageshrparmar2107@gmail.com", icon: Mail, label: "Email" }
            ].map((social) => (
              <motion.a 
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-foreground/80 hover:text-primary transition-colors"
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-sm text-center text-foreground/60"
        >
          &copy; {new Date().getFullYear()} Tyagesh Parmar | All Rights Reserved
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
