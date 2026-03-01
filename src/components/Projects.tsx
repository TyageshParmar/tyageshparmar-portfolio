import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Agentic RAG Assistant for AWS",
      description: "Built an Agentic RAG assistant to answer complex technical questions from AWS Prescriptive Guidance. Features multi-agent architecture with Planner, Retrieval, Synthesis, and Generator agents. Uses ChromaDB for vector storage and Groq-hosted LLaMA 3.1 with zero hallucination policy.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tags: ["RAG", "LangChain", "LLaMA 3.1", "ChromaDB", "Streamlit"],
      demoUrl: "https://agentic-rag-aws.streamlit.app/",
      codeUrl: "https://github.com/TyageshParmar/Agentic-RAG"
    },
    {
      title: "AI Skincare",
      description: "AI-powered skincare analysis and recommendation system. Analyzes skin images to detect issues and provides personalized skincare routines.",
      image: "/skincare.png",
      tags: ["AI", "Skincare", "Machine Learning", "Deep Learning", "Computer Vision"],
      demoUrl: "https://huggingface.co/spaces/TyageshParmar/AI-Skincare",
      codeUrl: "https://huggingface.co/spaces/TyageshParmar/AI-Skincare/tree/main"
    },
    {
      title: "HR Policy RAG Chatbot",
      description: "Built a RAG chatbot to answer employee queries from internal HR policy PDF. Features document ingestion with semantic chunking, FAISS vector indexing with BM25 re-ranking, and Dockerized deployment with FastAPI backend and Streamlit UI.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tags: ["RAG", "FAISS", "FastAPI", "Docker", "LLaMA 3.1"],
      demoUrl: "https://chatbothr.netlify.app/",
      codeUrl: "https://github.com/TyageshParmar/rag-hr-chatbot"
    },
    {
      title: "Sign Language Recognition",
      description: "Deep learning solution for Indian Sign Language (ISL) gesture recognition using 55,500+ labeled images across 37 classes. Custom CNN with 2.3M parameters achieving 98.7% accuracy and F1-score of 0.984. Real-time gesture classification under 50ms per frame.",
      image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tags: ["CNN", "TensorFlow", "Computer Vision", "OpenCV", "Deep Learning"],
      demoUrl: "https://huggingface.co/spaces/TyageshParmar/SignLanguageRecognizer",
      codeUrl: "https://github.com/TyageshParmar/Sign-Language-Recognition"
    },
  ];

  const otherProjects = [
    {
      title: "Skin Disorder Prediction",
      description: "ML classification model to diagnose 6 types of skin disorders using clinical features. Tested Logistic Regression, Decision Tree, Random Forest, and XGBoost. Random Forest achieved 97.78% testing accuracy for medical diagnostic support.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tags: ["Scikit-learn", "Random Forest", "XGBoost", "Healthcare", "Classification"],
      codeUrl: "https://github.com/TyageshParmar/Detecting-the-Type-of-Skin-Disorder"
    },
    {
      title: "FicZon Inc. Sales Effectiveness",
      description: "Sales analysis and prediction model to improve business effectiveness using ML techniques.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tags: ["Sales Analytics", "Python", "ML"],
      codeUrl: "https://github.com/TyageshParmar/FicZon-Inc.---Sales-Effectiveness"
    },
    {
      title: "NBA Shot Selection Analysis",
      description: "Analyzed NBA player shot selection patterns using statistical methods and visualization.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tags: ["Sports Analytics", "EDA", "Python"],
      codeUrl: "https://github.com/TyageshParmar/NBA-Shot-Selection-Analysis"
    },
    {
      title: "Rice Leaf Disease Classification",
      description: "Deep learning model to classify rice leaf diseases for agricultural applications.",
      image: "/rice_leaf_disease.jpg",
      tags: ["CNN", "Agriculture", "Image Classification"],
      codeUrl: "https://github.com/TyageshParmar/Rice-Leaf-Disease-Classification"
    },
    {
      title: "Heart Disease Prediction",
      description: "Predictive model for heart disease diagnosis using patient clinical data.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tags: ["Healthcare", "Classification", "Scikit-learn"],
      codeUrl: "https://github.com/TyageshParmar/Heart-Disease-Prediction"
    },
    {
      title: "Telecom Churn Prediction",
      description: "Predict customer churn in telecom industry to reduce customer attrition.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tags: ["Churn Analysis", "ML", "Business Analytics"],
      codeUrl: "https://github.com/TyageshParmar/No-Churn-Telecom-Client-Live-Project-"
    },
    {
      title: "Global Weather Prediction",
      description: "Time series forecasting model for weather prediction using historical data.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tags: ["Time Series", "Forecasting", "ARIMA"],
      codeUrl: "https://github.com/TyageshParmar/Global-Weather-Prediction"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            End-to-end ML and AI solutions showcasing my expertise in RAG systems, deep learning, and predictive modeling
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                demoUrl={project.demoUrl}
                codeUrl={project.codeUrl}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-foreground/90 mb-4">More Projects</h3>
          <p className="text-foreground/70">
            Additional ML and data science projects across various domains
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {otherProjects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                codeUrl={project.codeUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
