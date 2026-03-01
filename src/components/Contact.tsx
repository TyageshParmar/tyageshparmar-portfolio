import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare, User, Github, Linkedin, Calendar, Phone, FileText, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const Contact = () => {
  const contactItems = [
    { icon: User, label: "Name", value: "Tyagesh Parmar", color: "primary" },
    { icon: Mail, label: "Email", value: "tyageshrparmar2107@gmail.com", href: "mailto:tyageshrparmar2107@gmail.com", color: "data-blue" },
    { icon: Phone, label: "Phone", value: "+91 8758202474", href: "tel:+918758202474", color: "data-purple" },
    { icon: Calendar, label: "Availability", value: "Available for freelance & full-time opportunities", color: "data-teal" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Get In Touch</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Interested in hiring a data scientist or collaborating on an AI/ML project? Let's connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-5">
              {contactItems.map((item) => (
                <motion.div 
                  key={item.label} 
                  variants={itemVariants}
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className={`bg-${item.color}/20 p-3 rounded-full`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className={`text-${item.color} h-5 w-5`} />
                  </motion.div>
                  <div>
                    <p className="text-foreground/60">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-foreground/90 hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground/90 font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="bg-primary/20 p-3 rounded-full"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <MessageSquare className="text-primary h-5 w-5" />
                </motion.div>
                <div>
                  <p className="text-foreground/60">Connect</p>
                  <div className="flex gap-4 mt-2">
                    <a href="https://www.linkedin.com/in/tyagesh-parmar-740248333/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </a>
                    <a href="https://github.com/TyageshParmar?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="bg-data-blue/20 p-3 rounded-full"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <FileText className="text-data-blue h-5 w-5" />
                </motion.div>
                <div>
                  <p className="text-foreground/60">Resume</p>
                  <a 
                    href="https://drive.google.com/file/d/1KKgFeCnMx6GMKQnNdkOVczrCSdgN1BlB/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 text-foreground/90 hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" /> View Resume
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 border border-white/10 hover:border-primary/30 transition-all duration-300 group">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button asChild size="lg" className="w-full group/btn">
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLScyuPcmsMz3ualLcAF9rnHR4at1sAB4Kbx6zdQIHz82IWWePg/viewform" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-5 w-5 group-hover/btn:rotate-12 transition-transform" />
                      Open Contact Form
                    </a>
                  </Button>
                </motion.div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="font-medium mb-4 text-foreground/90">Quick Links</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { href: "https://www.linkedin.com/in/tyagesh-parmar-740248333/", icon: Linkedin, label: "LinkedIn" },
                      { href: "https://github.com/TyageshParmar?tab=repositories", icon: Github, label: "GitHub" },
                      { href: "mailto:tyageshrparmar2107@gmail.com", icon: Mail, label: "Email" },
                      { href: "https://drive.google.com/file/d/1KKgFeCnMx6GMKQnNdkOVczrCSdgN1BlB/view?usp=sharing", icon: FileText, label: "Resume" }
                    ].map((link) => (
                      <motion.div
                        key={link.label}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button variant="outline" size="sm" asChild className="w-full hover:border-primary">
                          <a href={link.href} target={link.href.startsWith("mailto") ? undefined : "_blank"} rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}>
                            <link.icon className="h-4 w-4 mr-2" />
                            {link.label}
                          </a>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
