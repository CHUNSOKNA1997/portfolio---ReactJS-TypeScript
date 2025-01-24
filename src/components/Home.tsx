import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export function Home() {
  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="max-w-4xl mx-auto pt-16 md:pt-20 relative"
    >
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        <div className="w-full md:w-3/5 space-y-6">
          <div className="space-y-4">
            <motion.h1
              variants={textAnimation}
              transition={{ delay: 0.2 }}
              className="text-[#64ffda] font-mono"
            >
              Hi, my name is
            </motion.h1>
            <motion.h2
              variants={textAnimation}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-gray-100"
            >
              SOKNA Chun.
            </motion.h2>
            <motion.h3
              variants={textAnimation}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold text-gray-400"
            >
              I build things for the web.
            </motion.h3>
          </div>
          <motion.div
            variants={textAnimation}
            transition={{ delay: 0.7 }}
            className="flex gap-4 py-4"
          >
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="react"
              className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1, rotate: 180 }}
            />
            {skills.map((icon, index) => (
              <motion.img
                key={index}
                src={icon.src}
                alt={icon.alt}
                className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
                loading="lazy"
              />
            ))}
          </motion.div>
          <motion.p
            variants={textAnimation}
            transition={{ delay: 0.5 }}
            className="text-gray-400 leading-relaxed text-[18.5px]"
          >
            Welcome to my portfolio! I am embarking on my journey as a Web
            Developer with 6 months of experience creating responsive and
            user-friendly web interfaces. I am passionate about designing
            seamless user experiences and dedicated to continuously enhancing my
            skills to deliver impactful digital solutions.
          </motion.p>
          <motion.div variants={textAnimation} transition={{ delay: 0.6 }}>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] 
                hover:bg-[#64ffda]/10 transition-colors duration-200 rounded"
            >
              Let's talk
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
