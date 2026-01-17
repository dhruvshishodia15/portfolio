import { motion } from 'framer-motion';
import { FiCode, FiTrendingUp, FiTarget, FiBriefcase } from 'react-icons/fi';

const About = () => {
  const highlights = [
    { icon: FiCode, text: "Passionate about creating clean, efficient code" },
    { icon: FiTrendingUp, text: "Always learning new technologies and best practices" },
    { icon: FiTarget, text: "Focused on problem-solving and user experience" },
    { icon: FiBriefcase, text: "Ready to contribute to innovative projects" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I'm a passionate frontend and MERN-stack developer with a keen interest in creating clean, efficient, and user-friendly web applications.
              I love turning complex problems into simple, beautiful designs and am always eager to learn new technologies and improve my skills.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 text-gray-300"
                >
                  <item.icon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;