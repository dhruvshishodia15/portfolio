import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-gray-400 text-lg mb-8">Let's work together</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:dhruvrana1503@gmail.com"
              className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <FiMail className="w-5 h-5" />
              <span>Email Me</span>
            </a>
            <a
              href= "https://www.linkedin.com/in/dhruv-shishodia-3113a333a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <FiLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/dhruvshishodia15"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 border border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <FiGithub className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;