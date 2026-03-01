import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", proficiency: 95 },
    { name: "TensorFlow/Keras", proficiency: 88 },
    { name: "Scikit-Learn", proficiency: 92 },
    { name: "Pandas/NumPy", proficiency: 95 },
    { name: "SQL & NoSQL (MongoDB)", proficiency: 85 },
    { name: "Data Visualization (Power BI, Tableau)", proficiency: 85 },
    { name: "FastAPI/Docker", proficiency: 82 },
  ];

  const mlDomains = [
    { name: "Machine Learning", proficiency: 92 },
    { name: "Deep Learning (CNN, ANN)", proficiency: 88 },
    { name: "Natural Language Processing", proficiency: 90 },
    { name: "Computer Vision", proficiency: 85 },
    { name: "RAG Systems & LLMs", proficiency: 88 },
    { name: "Time Series (ARIMA)", proficiency: 80 },
    { name: "MLOps & Deployment", proficiency: 82 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Skills</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            My technical toolkit and expertise in data science and machine learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-center">Technical Skills</h3>
            <Card className="bg-card/50 border border-white/10 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6">
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {technicalSkills.map((skill, index) => (
                    <motion.div key={skill.name} variants={itemVariants} className="space-y-2 group">
                      <div className="flex justify-between">
                        <span className="group-hover:text-primary transition-colors">{skill.name}</span>
                        <span className="text-foreground/60">{skill.proficiency}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.proficiency} 
                          className="h-2 bg-secondary" 
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-center">ML/AI Domains</h3>
            <Card className="bg-card/50 border border-white/10 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6">
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {mlDomains.map((domain) => (
                    <motion.div key={domain.name} variants={itemVariants} className="space-y-2 group">
                      <div className="flex justify-between">
                        <span className="group-hover:text-primary transition-colors">{domain.name}</span>
                        <span className="text-foreground/60">{domain.proficiency}%</span>
                      </div>
                      <Progress 
                        value={domain.proficiency} 
                        className="h-2 bg-secondary" 
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 max-w-5xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Python", "SQL", "NumPy", "Pandas", "Matplotlib", "Seaborn",
              "TensorFlow", "Keras", "Scikit-learn", "PyTorch", "OpenCV",
              "LangChain", "ChromaDB", "FAISS", "Hugging Face", "Groq",
              "Ollama", "Streamlit", "FastAPI", "Docker", "Git", "GitHub",
              "Power BI", "Tableau", "MongoDB", "Google Cloud Platform",
              "MLflow", "Jupyter", "VS Code", "REST APIs", "Transfer Learning",
              "Sentiment Analysis", "Object Detection", "LLMs", "RAG Systems"
            ].map((skill, index) => (
              <motion.span 
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.02 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-3 py-1.5 bg-secondary/50 border border-white/10 rounded-full text-sm hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 max-w-5xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Problem-solving", "Adaptability", "Critical Thinking", "Teamwork", 
              "Business Acumen", "Intellectual Curiosity", "Communication", 
              "Leadership", "Initiative", "Attention to Detail", "Time Management"
            ].map((skill, index) => (
              <motion.span 
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-sm text-primary hover:bg-primary/30 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
