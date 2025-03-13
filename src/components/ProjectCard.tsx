import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import EmojiGenerator from './EmojiGenerator';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  isDarkMode?: boolean;
  component?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  isDarkMode = true,
  component
}) => {
  if (component === 'EmojiGenerator') {
    return <EmojiGenerator />;
  }

  return (
    <div className="space-y-4">
      <div className="aspect-video rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-[#2a2a2a] text-gray-300' : 'bg-gray-200 text-gray-700'
              }`}
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 text-sm transition-colors ${isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'
            }`}
        >
          <Github className="w-4 h-4" />
          Code
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-sm transition-colors ${isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'
              }`}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;