import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export function Projects() {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 20,
      }}
      className="space-y-12 pt-16 md:pt-20"
    >
      <motion.h2 variants={item} className="text-3xl font-bold text-gray-100">
        Some Things I've Built
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{
              y: -8,
            }}
            className="bg-[#112240] rounded-lg overflow-hidden outline-[#64ffda] outline-1"
          >
            <div className="relative h-48 sm:h-56">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-4 sm:p-6 space-y-4">
              <h3 className="text-xl font-bold text-gray-100">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-sm text-[#64ffda] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#64ffda] transition-colors duration-200"
                >
                  <Github size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
