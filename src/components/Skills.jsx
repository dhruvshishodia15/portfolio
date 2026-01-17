import { motion } from 'framer-motion';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPython, SiC } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: SiHtml5 },
        { name: 'CSS', icon: SiCss3 },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'React.js', icon: SiReact },
        { name: 'Tailwind CSS', icon: SiTailwindcss }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express.js', icon: SiExpress }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'SQL', icon: SiMysql }
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: SiPython },
        { name: 'C', icon: SiC }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills</h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors cursor-default">
                    <skill.icon className="w-6 h-6" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;