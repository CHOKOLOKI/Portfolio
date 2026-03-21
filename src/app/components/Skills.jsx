import { motion } from 'framer-motion';

export function Skills() {
  const allSkills = [
    'JavaScript', 'React', 'HTML',
    'CSS', 'Git', 'Tailwind', 'Testing', 'React Native', 'R',
    'Python', 'Docker', 'CI/CD', 'Agile', 'Business Intelligence'
  ];

  const duplicatedSkills = [...allSkills, ...allSkills];

  const skillCategories = [
    {
      title: 'Front-end',
      skills: ['React', 'Vite', 'Tailwinds', 'Testing', 'Vue', 'HTML/CSS', 'Figma'],
      color: 'from-blue-400 to-cyan-400',
      borderColor: 'border-blue-400/30',
      bgGlow: 'bg-blue-500/10'
    },
    {
      title: 'Back-end',
      skills: [ 'Django' ],
      color: 'from-purple-400 to-pink-400',
      borderColor: 'border-purple-400/30',
      bgGlow: 'bg-purple-500/10'
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'VS Code', 'Docker', 'Forge', 'Figma', 'RStudio', 'Android Studio'],
      color: 'from-pink-400 to-rose-400',
      borderColor: 'border-pink-400/30',
      bgGlow: 'bg-pink-500/10'
    }
  ];

   return (
    <section id="skills" className="py-20 px-4 bg-slate-900 overflow-hidden relative">
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 shadow-lg shadow-purple-500/50"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>

        <div className="mb-16 relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>

          <div className="overflow-hidden py-4">
            <motion.div
              className="flex gap-4 whitespace-nowrap"
              animate={{
                x: [0, -50 * allSkills.length]
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg shadow-purple-500/30 text-lg font-medium"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className={`bg-white/5 backdrop-blur-sm p-8 rounded-xl border ${category.borderColor} relative overflow-hidden group`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.2
              }}
              whileHover={{ y: -5 }}
            >
              {/* Animated hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className={`absolute top-0 right-0 w-20 h-20 ${category.bgGlow} rounded-full blur-2xl -z-10`}></div>

              <h3 className={`text-2xl mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent font-semibold relative`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 relative">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm text-slate-200 rounded-full text-sm border border-white/10 hover:border-white/30 transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.2 + skillIndex * 0.05
                    }}
                    whileHover={{
                      scale: 1.1
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;