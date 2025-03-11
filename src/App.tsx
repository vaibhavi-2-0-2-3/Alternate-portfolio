import React, { useState } from 'react';
import { motion, Reorder } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, User, Briefcase, Sun, Moon, BookOpen, Lightbulb, Image } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import ProjectCard from './components/ProjectCard';
import { projects, skills, blogPosts, gallery } from './data/projects';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const SkillsCard = () => (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Skills</h2>
        <Lightbulb className="w-6 h-6 text-yellow-400" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg ${
              isDarkMode ? 'bg-[#2a2a2a]' : 'bg-gray-100'
            }`}
          >
            <p className="font-medium">{skill.name}</p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {skill.level}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const BlogCard = () => (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Blog</h2>
        <BookOpen className="w-6 h-6 text-purple-400" />
      </div>
      <div className="space-y-4">
        {blogPosts.map((post, index) => (
          <a
            key={index}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <p className="font-medium group-hover:text-blue-400 transition-colors">
              {post.title}
            </p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {new Date(post.date).toLocaleDateString()}
            </p>
          </a>
        ))}
      </div>
    </div>
  );

  const GalleryCard = () => (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Gallery</h2>
        <Image className="w-6 h-6 text-pink-400" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {gallery.map((item, index) => (
          <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );

  const SocialCard = () => (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-semibold mb-6">Connect</h2>
      <div className="flex flex-col gap-4">
        <a
          href="https://github.com/vaibhavi-2-0-2-3"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 hover:text-gray-400 transition-colors ${
            isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'
          }`}
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>
        <a
          href="mailto:your.email@example.com"
          className={`flex items-center gap-3 transition-colors ${
            isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'
          }`}
        >
          <Mail className="w-5 h-5" />
          Email
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 transition-colors ${
            isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'
          }`}
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>
      </div>
    </div>
  );

  const [items, setItems] = useState([
    { id: 'skills', component: SkillsCard },
    { id: 'blog', component: BlogCard },
    { id: 'gallery', component: GalleryCard },
    ...projects.map(project => ({ id: project.title, project })),
    { id: 'social', component: SocialCard }
  ]);

  return (
    <div className={`min-h-screen px-6 py-12 md:py-24 transition-colors duration-300 ${isDarkMode ? 'bg-[#0a0a0a] text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto">
        <Reorder.Group as="div" axis="y" values={items} onReorder={setItems} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`rounded-3xl p-8 lg:col-span-2 overflow-hidden ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Vaibhavi</h1>
                <div className="h-20">
                  <TypeAnimation
                    sequence={[
                      'A passionate software developer',
                      2000,
                      'Building impactful solutions',
                      2000,
                      'Creating beautiful user experiences',
                      2000,
                      'Turning ideas into reality',
                      2000,
                    ]}
                    wrapper="p"
                    speed={50}
                    className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                    repeat={Infinity}
                  />
                </div>
              </div>
              <User className={`w-12 h-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            </div>
          </motion.div>

          {/* Theme Toggle Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`rounded-3xl p-8 cursor-pointer ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}
            onClick={toggleTheme}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Theme</h2>
              {isDarkMode ? (
                <Sun className="w-6 h-6 text-yellow-400" />
              ) : (
                <Moon className="w-6 h-6 text-blue-600" />
              )}
            </div>
            <p className={`mt-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Click to toggle {isDarkMode ? 'light' : 'dark'} mode
            </p>
          </motion.div>

          {items.map((item) => (
            <Reorder.Item
              key={item.id}
              value={item}
              as="div"
              className={`rounded-3xl p-8 ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}
            >
              {item.project ? (
                <ProjectCard {...item.project} isDarkMode={isDarkMode} />
              ) : (
                <item.component />
              )}
            </Reorder.Item>
          ))}
        </Reorder.Group>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className={`mt-8 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
        >
          <p>© 2024 Vaibhavi. All rights reserved.</p>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;