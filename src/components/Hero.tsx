import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToNextSection = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative">
      <div className="text-center space-y-8 animate-fadeIn">
        <div className="mb-6">
          <div className="w-48 h-55 mx-auto rounded-[30%] overflow-hidden border-4 border-blue-500/30 shadow-xl">
            <img
              src="https://i.postimg.cc/hvzkn2Z2/IMG-1243.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Simon Abouelkhir
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Full Stack Developer specializing in building exceptional digital experiences
        </p>
        <div className="flex space-x-4 justify-center">
          <SocialLink href="https://github.com" icon={<Github />} label="GitHub" />
          <SocialLink href="https://www.linkedin.com/in/simon-abouelkhir-/" icon={<Linkedin />} label="LinkedIn" />
          <SocialLink href="mailto:simon.abouelkhir@gmail.com" icon={<Mail />} label="Email" />
        </div>
      </div>
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 cursor-pointer hover:text-gray-600 transition-colors duration-200"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} className="text-gray-400" />
      </button>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
      aria-label={label}
    >
      {icon}
    </a>
  );
}