import React, { useState } from 'react';
import { motion, Reorder } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Youtube, User, Briefcase, Sun, Moon, BookOpen, Lightbulb, Image } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import ProjectCard from './components/ProjectCard';
import { projects, skills, blogPosts, gallery } from './data/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import BlogCard from './components/BlogCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };


  const SkillsCard = () => {
    return (
      <div className="flex flex-col h-full">
        {/* Title */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Skills</h2>
          <Lightbulb className="w-6 h-6 text-yellow-400" />
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }} // Floating effect on hover
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className={`px-6 py-4 rounded-full shadow-md text-sm font-medium transition-all
              ${isDarkMode ? "bg-[#2a2a2a] text-white" : "bg-gray-200 text-gray-800"}
            `}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

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

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full rounded-lg shadow-lg"
      >
        {gallery.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  const SocialCard = () => (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-semibold mb-6">Profiles</h2>
      <div className="flex flex-col gap-4">
        <a
          href="https://github.com/vaibhavi-2-0-2-3"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 hover:text-gray-400 transition-colors ${isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'
            }`}
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>
        <a
          href="mailto:your.vaibhavigaonkar760@example.com"
          className={`flex items-center gap-3 transition-colors ${isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'
            }`}
        >
          <Mail className="w-5 h-5" />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/vaibhavi-gaonkar-4660522a6/"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 transition-colors ${isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'
            }`}
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>
        <a
          href="https://leetcode.com/u/vaibhavi_2_0_2_4/"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 transition-colors ${isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}
        >
          <Code2 className="w-5 h-5 text-500" />
          LeetCode
        </a>
        <a
          href="https://www.youtube.com/@vaibhavigaonkar1525"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 transition-colors ${isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}
        >
          <Youtube className="w-5 h-5 text-500" />
          Youtube
        </a>
      </div>
    </div>
  );


  const [items, setItems] = useState([
    { id: 'skills', component: SkillsCard, span: 'lg:col-span-2' },
    { id: 'blogs', component: () => <BlogCard isDarkMode={isDarkMode} /> },
    { id: 'gallery', component: GalleryCard, span: 'lg:col-span-2' },
    ...projects.map(project => ({ id: project.title, project, span: '' })),
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Vaibhavi Gaonkar</h1>
                <div className="h-20">
                  <div dangerouslySetInnerHTML={{
                    __html: ` Hey! I am <span class="font-bold font-[cursive] text-purple-500">Vaibhavi</span>, hailing from Goa - India! 🌊 `
                  }} />

                  <TypeAnimation
                    sequence={[
                      'Currently building a cool carpooling platform 🚗💨',
                      2000,
                      'My world revolves around web development 🕸️',
                      2000,
                      'And yes, my code runs better than my jokes! 😆💻',
                      2000,
                    ]}
                    wrapper="div"
                    speed={50}
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
            className={`rounded-3xl p-8 flex items-center justify-center cursor-pointer ${isDarkMode ? 'bg-[#1a1a1a] text-white' : 'bg-white text-gray-900'
              } shadow-lg`}
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
              className={`w-20 h-10 flex items-center rounded-full p-1 ${isDarkMode ? "bg-gray-800" : "bg-gray-300"
                }`}
            >
              <motion.div
                layout
                animate={{ x: isDarkMode ? 32 : 0 }} // Moves left/right smoothly
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`w-8 h-8 flex items-center justify-center rounded-full shadow-md ${isDarkMode ? "bg-black" : "bg-white"
                  }`}
              >
                <motion.span
                  animate={{ rotate: isDarkMode ? 360 : 0 }} // Rotates emoji
                  transition={{ duration: 0.5 }}
                  className="text-2xl" // Increases emoji size
                >
                  {isDarkMode ? "🌙" : "☀️"}
                </motion.span>
              </motion.div>
            </motion.div>
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