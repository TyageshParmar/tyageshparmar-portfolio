import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding relative dot-pattern">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Data Scientist and Machine Learning Engineer passionate about building end-to-end AI solutions
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            "I'm a Data Scientist and Machine Learning Engineer with hands-on experience in building end-to-end ML and deep learning solutions using Python, SQL, TensorFlow, and Scikit-learn.",
            "Experienced in RAG systems, computer vision, NLP, time-series analysis, and predictive modeling. I have a strong background in data preprocessing, feature engineering, model evaluation, and deployment using FastAPI, Docker, and cloud platforms.",
            "Passionate about applying AI to solve real-world business problems. I'm constantly exploring new techniques and frameworks in the rapidly evolving field of AI/ML, with a focus on developing robust and scalable solutions."
          ].map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-foreground/90 text-lg leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
