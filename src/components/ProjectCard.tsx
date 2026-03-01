import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  demoUrl,
  codeUrl
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card className="overflow-hidden bg-card/50 border border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30 group h-full">
        <div className="h-48 overflow-hidden bg-black/20 relative">
          <motion.img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Floating action buttons on hover */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            {demoUrl && (
              <Button size="sm" asChild className="flex-1">
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {codeUrl && (
              <Button variant="secondary" size="sm" asChild className="flex-1">
                <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                  <Link className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
        <CardHeader>
          <CardTitle className="group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
          <CardDescription className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Badge 
                  variant="secondary" 
                  className="bg-secondary/50 hover:bg-primary/20 transition-colors duration-300"
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/80 line-clamp-3">{description}</p>
        </CardContent>
        <CardFooter className="flex gap-3">
          {demoUrl && (
            <Button variant="default" size="sm" asChild className="group/btn">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                Live Demo
              </a>
            </Button>
          )}
          {codeUrl && (
            <Button variant="outline" size="sm" asChild className="group/btn hover:border-primary">
              <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                <Link className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                Code
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
