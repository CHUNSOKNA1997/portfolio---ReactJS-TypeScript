import { motion } from 'framer-motion';
export function Education() {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Stanford University',
      period: '2019 - 2021',
      description:
        'Specialized in Artificial Intelligence and Machine Learning',
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'MIT',
      period: '2015 - 2019',
      description: 'Focus on Software Engineering and Web Development',
    },
  ];
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
      x: -20,
    },
    show: {
      opacity: 1,
      x: 0,
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
      className="max-w-3xl pt-16 md:pt-20"
    >
      <motion.h2
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="text-3xl font-bold text-gray-100 mb-8"
      >
        Education
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-12"
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={item}
            className="relative pl-8 before:content-[''] before:absolute before:left-0 
                     before:top-0 before:w-px before:h-full before:bg-[#64ffda]/30"
          >
            <motion.div
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                delay: 0.5 + index * 0.2,
              }}
              className="absolute left-0 top-2 w-2 h-2 bg-[#64ffda] rounded-full 
                        transform -translate-x-1/2"
            />
            <div className="space-y-2">
              <div className="text-[#64ffda] font-mono">{edu.period}</div>
              <h3 className="text-xl font-bold text-gray-100">{edu.degree}</h3>
              <div className="text-gray-400">{edu.school}</div>
              <p className="text-gray-400">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
