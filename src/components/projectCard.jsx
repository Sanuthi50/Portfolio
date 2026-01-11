import React, { useState } from 'react';
import { Github, ExternalLink, Linkedin } from 'lucide-react';
import projectsData from '../data/data.json';

const ProjectCard = ({ project, isFeatured = false }) => {
  return (
    <div className={`group relative rounded-xl overflow-hidden backdrop-blur-xl transition-all duration-300 ${
      isFeatured 
        ? 'bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800/50 hover:border-accent/50 shadow-2xl hover:shadow-accent/20' 
        : 'bg-gradient-to-br from-slate-900/60 to-slate-950/60 border border-slate-800/30 hover:border-accent/40 shadow-lg hover:shadow-accent/10'
    }`}>
      {/* Image Container - Featured Only */}
      {isFeatured && project.image && (
        <div className="relative h-56 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80"></div>
        </div>
      )}

      {/* Content */}
      <div className={`p-6 ${isFeatured ? '' : ''}`}>
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-xl font-bold text-light group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          {!isFeatured && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/20 text-accent whitespace-nowrap">
              {project.category}
            </span>
          )}
        </div>

        {isFeatured && (
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, isFeatured ? project.tech.length : 3).map((tech, idx) => (
            <span 
              key={idx}
              className="text-xs px-3 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-lg hover:border-accent hover:text-accent transition-all duration-300"
            >
              {tech}
            </span>
          ))}
          {!isFeatured && project.tech.length > 3 && (
            <span className="text-xs px-3 py-1 text-slate-500">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3 items-center flex-wrap">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:border-accent hover:text-accent hover:bg-slate-800 transition-all duration-300 text-sm font-medium"
              title="View on GitHub"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/20 border border-accent/50 text-accent hover:bg-accent/30 transition-all duration-300 text-sm font-medium"
              title="View Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
          )}

          {project.linkedinDemo && (
            <a
              href={project.linkedinDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/50 text-blue-400 hover:bg-blue-500/30 transition-all duration-300 text-sm font-medium"
              title="View Demo on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'UI/UX', 'AI/ML', 'Fullstack'];
  
  // Filter projects based on selected category
  const filteredOtherProjects = activeCategory === 'All' 
    ? projectsData.other 
    : projectsData.other.filter(p => p.category === activeCategory);
  
  return (
    <section id="projects" className="min-h-screen px-6 py-20 relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
           style={{
               background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3), transparent)',
               animation: 'float 8s ease-in-out infinite'
           }}>
      </div>

      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
           style={{
               background: 'radial-gradient(circle, rgba(196, 231, 233, 0.2), transparent)',
               animation: 'float 10s ease-in-out infinite reverse'
           }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-light to-accent bg-clip-text text-transparent drop-shadow-lg">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore my recent work showcasing full-stack development, UI/UX design, and AI/ML implementations.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projectsData.featured.map((project) => (
            <ProjectCard key={project.id} project={project} isFeatured={true} />
          ))}
        </div>

        {/* Category Tabs */}
        <div className="space-y-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-accent to-primary text-slate-950 shadow-lg shadow-accent/50'
                    : 'bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:border-accent/50 hover:text-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-96">
            {filteredOtherProjects.length > 0 ? (
              filteredOtherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isFeatured={false} />
              ))
            ) : (
              <div className="col-span-full flex items-center justify-center py-20">
                <p className="text-slate-400 text-lg">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default Projects;