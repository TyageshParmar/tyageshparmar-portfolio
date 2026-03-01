import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Education</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-card/50 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-data-blue to-data-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <CardContent className="p-8">
              <motion.div 
                className="flex items-start gap-6"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="bg-primary/20 p-4 rounded-xl"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <GraduationCap className="text-primary h-8 w-8" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">Diploma in Information Technology</h3>
                  <p className="text-foreground/80 text-lg">
                    Government Polytechnic, Gandhinagar
                  </p>
                  <p className="text-foreground/60">
                    Gujarat Technological University
                  </p>
                  <motion.p 
                    className="text-primary font-medium mt-2 text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    2022
                  </motion.p>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
