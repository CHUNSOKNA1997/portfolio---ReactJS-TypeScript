import { motion } from 'framer-motion';
export function Home() {
  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
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
      className="max-w-4xl mx-auto pt-16 md:pt-20 relative"
    >
      <motion.img
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=300"
        alt="Decorative Code"
        className="absolute -z-10 top-0 right-0 w-48 h-48 opacity-10 rounded-lg hidden md:block"
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 0.1,
          scale: 1,
        }}
        transition={{
          delay: 0.8,
        }}
      />
      <motion.img
        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=300"
        alt="Decorative Tech"
        className="absolute -z-10 bottom-0 left-0 w-40 h-40 opacity-10 rounded-lg hidden md:block"
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 0.1,
          scale: 1,
        }}
        transition={{
          delay: 1,
        }}
      />
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        <div className="w-full md:w-3/5 space-y-6">
          <div className="space-y-4">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="text-[#64ffda] font-mono"
            >
              Hi, my name is
            </motion.h1>
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="text-4xl md:text-6xl font-bold text-gray-100"
            >
              John Doe.
            </motion.h2>
            <motion.h3
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
              }}
              className="text-3xl md:text-5xl font-bold text-gray-400"
            >
              I build things for the web.
            </motion.h3>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
            }}
            className="flex gap-4 py-4"
          >
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity"
              whileHover={{
                scale: 1.1,
                rotate: 360,
              }}
              transition={{
                duration: 0.8,
              }}
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="TypeScript"
              className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity"
              whileHover={{
                scale: 1.1,
              }}
            />
            <motion.img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
              className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity"
              whileHover={{
                scale: 1.1,
              }}
            />
          </motion.div>
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
            }}
            className="text-gray-400 leading-relaxed"
          >
            I'm a software engineer specializing in building exceptional digital
            experiences. Currently, I'm focused on building accessible,
            human-centered products.
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
            }}
          >
            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href="#contact"
              className="inline-block px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] 
                       hover:bg-[#64ffda]/10 transition-colors duration-200 rounded"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          transition={{
            delay: 0.6,
          }}
          {...floatingAnimation}
          className="relative w-64 h-64 flex-shrink-0"
        >
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#64ffda]/20"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.div
            className="absolute inset-2 rounded-full"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-[#64ffda]/30"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 30}deg) translateY(-35px)`,
                }}
              />
            ))}
          </motion.div>
          <motion.div
            className="absolute inset-4 rounded-full border-2 border-[#64ffda]/40"
            animate={{
              boxShadow: [
                '0 0 20px rgba(100,255,218,0.2)',
                '0 0 10px rgba(100,255,218,0.1)',
                '0 0 20px rgba(100,255,218,0.2)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute inset-6 overflow-hidden rounded-full border-2 border-[#64ffda] shadow-lg shadow-[#64ffda]/10"
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <motion.div
              className="w-full h-full"
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=500"
                alt="Profile"
                className="w-full h-full object-cover"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.3,
                }}
              />
            </motion.div>
          </motion.div>
          <div className="absolute inset-6 rounded-full blur-xl bg-[#64ffda]/5 -z-10" />
        </motion.div>
      </div>
    </motion.div>
  );
}
