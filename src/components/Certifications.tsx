import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const Certifications = () => {
  const certifications = [
    {
      title: "Artificial Intelligence Engineer",
      issuer: "NASSCOM",
      category: "AI/ML"
    },
    {
      title: "Artificial Intelligence Expert",
      issuer: "IABAC",
      category: "AI/ML"
    },
    {
      title: "Certified Data Scientist",
      issuer: "IABAC, NASSCOM, Future Skills-Prime",
      category: "Data Science"
    },
    {
      title: "Data Science Foundation",
      issuer: "IABAC",
      category: "Data Science"
    },
    {
      title: "Prompt Engineering for GenAI Models",
      issuer: "IABAC",
      category: "GenAI"
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      category: "GenAI"
    },
    {
      title: "Career Essentials in Data Analysis",
      issuer: "Microsoft & LinkedIn",
      category: "Data Analysis"
    },
    {
      title: "Certified Data Scientist Certification Training",
      issuer: "Certificate of Completion",
      category: "Data Science"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML":
        return "bg-data-purple/20 text-data-purple";
      case "Data Science":
        return "bg-primary/20 text-primary";
      case "GenAI":
        return "bg-data-teal/20 text-data-teal";
      case "Data Analysis":
        return "bg-data-blue/20 text-data-blue";
      default:
        return "bg-secondary text-foreground/70";
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="certifications" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Certifications</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Professional certifications validating my expertise in AI, ML, and Data Science
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="bg-card/50 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="bg-primary/20 p-3 rounded-lg shrink-0"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Award className="text-primary h-6 w-6" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{cert.title}</h3>
                      <p className="text-foreground/60 text-sm mb-3">{cert.issuer}</p>
                      <motion.span 
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getCategoryColor(cert.category)}`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <BadgeCheck className="h-3 w-3" />
                        {cert.category}
                      </motion.span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
