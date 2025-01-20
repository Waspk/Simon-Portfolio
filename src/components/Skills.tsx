import React from 'react';
import { Code2, Database, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Globe className="w-6 h-6" />,
    skills: ['Javascript', 'React', 'TypeScript', 'Tailwind CSS', 'Elm'],
  },
  {
    title: 'Backend',
    icon: <Database className="w-6 h-6" />,
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Java', 'Testing', 'Vite'],
  },
  {
    title: 'Tools & Others',
    icon: <Code2 className="w-6 h-6" />,
    skills: ['Git', 'Github', 'Docker', 'Azure', 'CI/CD', 'Jenkins, GitHub Actions', 'CMS'],
  },
  {
    title: 'Cloud Services',
    icon: <Code2 className="w-6 h-6" />,
    skills: ['Google Cloud Platform (GCP)', 'Azure'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}