import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contacts() {
  const contactInfo = [
    {
        icon: Mail,
        title: 'Email',
        value: 'daguilgio@gmail.com',
        href: 'mailto:daguilgio@gmail.com',
        gradient: 'from-blue-400 to-cyan-400',
        shadowColor: 'shadow-blue-500/50',
    },
    {
        icon: Phone,
        title: 'Phone',
        value: '+1 (236) 882-8611',
        href: 'tel:+12368828611',
        gradient: 'from-purple-400 to-pink-400',
        shadowColor: 'shadow-purple-500/50',
    },
    {
        icon: MapPin,
        title: 'Location',
        value: 'Victoria, BC',
        gradient: 'from-pink-400 to-rose-400',
        shadowColor: 'shadow-pink-500/50',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900 relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
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
          Get In Touch
        </motion.h2>
        <motion.div 
          className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 shadow-lg shadow-purple-500/50"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-slate-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              Feel free to reach out!
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <motion.div 
                    className="flex gap-4 items-start group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div 
                      className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg ${item.shadowColor}`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className={`text-lg mb-1 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent font-semibold`}>
                        {item.title}
                      </h3>
                      {item.href ? (
                        <a href={item.href} className="text-slate-400 hover:text-white transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-400">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
                return <div key={item.title}>{content}</div>;
              })}
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <label htmlFor="name" className="block text-sm mb-2 text-slate-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-slate-500"
                  placeholder="Your name"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <label htmlFor="email" className="block text-sm mb-2 text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-slate-500"
                  placeholder="your.email@example.com"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <label htmlFor="message" className="block text-sm mb-2 text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none text-white placeholder-slate-500"
                  placeholder="Your message..."
                />
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg shadow-lg shadow-purple-500/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}