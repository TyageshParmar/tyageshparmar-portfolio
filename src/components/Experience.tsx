import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "Rubixe AI Solutions Company",
      role: "Data Science and AI Consultant",
      duration: "October 2024 - Present",
      location: "Remote",
      type: "Full-time",
      highlights: [
        "Built and deployed ML models for classification and prediction tasks, improving decision accuracy by ~12%",
        "Performed EDA and feature engineering on structured datasets to extract actionable insights",
        "Created dashboards in Tableau to communicate model outcomes to non-technical stakeholders",
        "Optimized ML pipelines to reduce inference time and improve scalability"
      ]
    },
    {
      company: "Synobiz LLP",
      role: "Junior SAP Technical Supporter",
      duration: "May 2023 - November 2023",
      location: "Ahmedabad, Gujarat, India",
      type: "Full-time",
      highlights: [
        "Provided technical support for SAP ERP modules including SD, MM, and FICO",
        "Troubleshot and resolved system issues to ensure smooth business operations",
        "Collaborated with cross-functional teams to implement SAP customizations",
        "Documented technical solutions and created user guides for end-users"
      ]
    },
    {
      company: "Synobiz LLP",
      role: "Internship Trainee",
      duration: "December 2022 - May 2023",
      location: "Ahmedabad, Gujarat, India",
      type: "Internship",
      highlights: [
        "Gained hands-on experience with SAP ERP systems and business processes",
        "Assisted in data migration and system configuration tasks",
        "Participated in client meetings and requirement gathering sessions",
        "Completed training on SAP modules and enterprise software solutions"
      ]
    },
    {
      company: "Arvind Advanced Materials",
      role: "Junior Merchandiser",
      duration: "February 2022 - December 2022",
      location: "Ahmedabad, Gujarat, India",
      type: "Full-time",
      highlights: [
        "Managed product catalogs and inventory tracking for textile materials",
        "Coordinated with suppliers and vendors for timely order fulfillment",
        "Analyzed sales data to identify trends and optimize stock levels",
        "Prepared reports and presentations for management review"
      ]
    },
    {
      company: "Arvind Advanced Materials",
      role: "Computer Operator and Programming Assistant",
      duration: "December 2020 - February 2022",
      location: "Ahmedabad, Gujarat, India",
      type: "Full-time",
      highlights: [
        "Operated and maintained computer systems for daily business operations",
        "Developed automation scripts to streamline repetitive data entry tasks",
        "Managed databases and ensured data integrity across systems",
        "Provided technical support and training to staff members"
      ]
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Work Experience</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            My professional journey and career growth
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-data-blue to-data-teal hidden md:block" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-card/50 border border-white/10 relative hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block group-hover:scale-125 transition-transform duration-300" />

                    <CardContent className="p-6 md:ml-12">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-foreground/70 text-sm">{exp.duration}</p>
                          <p className="text-foreground/50 text-sm">{exp.location}</p>
                        </div>
                      </div>

                      <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full mb-3 font-medium">
                        {exp.type}
                      </span>

                      {exp.highlights.length > 0 && (
                        <ul className="text-foreground/80 text-sm space-y-2 mt-3">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1 text-lg">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
