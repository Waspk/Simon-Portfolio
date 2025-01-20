import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Portfolio',
    description: 'A full-stack application built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    tech: ['React', 'Node.js'],
    github: 'https://github.com/Waspk/Personal-Portfolio-Website',
    live: 'https://simonabouelkhir.netlify.app/',
  },
  {
    title: 'Bulk Local Landing Pages',
    description: 'Bulk Automated Local Landing Pages',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    tech: ['TypeScript', 'tailwind', 'Node.js'],
    github: 'https://github.com/Waspk/B-L-L-P',
    live: 'https://example.com',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, image, tech, github, live }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {item}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
          >
            <Github size={20} />
            <span>Code</span>
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
          >
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}