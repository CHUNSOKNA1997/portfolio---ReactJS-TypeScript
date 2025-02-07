import { Github, Linkedin, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  const socialIcons = [
    {
      icon: <Github size={24} />,
      href: 'https://github.com/CHUNSOKNA1997',
    },
    {
      icon: <Linkedin size={24} />,
      href: 'https://www.linkedin.com/in/chun-sokna-449bba32b/',
    },
    {
      icon: <Facebook size={24} />,
      href: 'https://www.facebook.com/sokna.chun.1997',
    },
  ];
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
      className="max-w-2xl pt-16 md:pt-20"
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
        transition={{
          delay: 0.2,
        }}
        className="text-3xl font-bold text-gray-100 mb-8"
      >
        Let's Talk Together
      </motion.h2>
      <div className="space-y-6">
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
            delay: 0.3,
          }}
          className="text-gray-400"
        >
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </motion.p>
        <motion.a
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
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          href="mailto:chun.sokna.1222@gmail.com"
          className="inline-block px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] 
                   hover:bg-[#64ffda]/10 transition-colors duration-200 rounded"
        >
          Email Me
        </motion.a>
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
            delay: 0.5,
          }}
          className="pt-8"
        >
          <div className="flex space-x-6">
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                href={social.href}
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-400 hover:text-[#64ffda] transition-colors duration-200"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
