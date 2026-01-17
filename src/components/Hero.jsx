import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image Placeholder */}
          <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-500"
            >
              <img
                src="/profile.jpg"
                alt="Dhruv Rana"
                className="w-full h-full object-cover"
              />
          </motion.div>


          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Frontend / MERN-Stack Developer
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            I build clean, responsive, and scalable web applications using modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;