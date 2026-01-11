import React from 'react';
import { Code2, Zap } from 'lucide-react';

const FRONTEND_SKILLS = ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind'];
const BACKEND_SKILLS = ['Python', 'Django', 'PHP', 'Java', 'MySQL', 'PostgreSQL'];

const SkillBadge = ({ skill }) => (
  <span className="px-4 py-2 bg-primary rounded-lg text-sm border border-accent text-light hover:border-emerald-400 hover:text-emerald-200 hover:bg-slate-800/80 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 cursor-default">
    {skill}
  </span>
);

const SkillCategory = ({ icon: Icon, title, skills }) => (
  <div className="space-y-4 p-4 rounded-lg bg-light/40 border border-emerald-500/10 hover:border-emerald-500/20 hover:bg-slate-800/50 transition-all duration-300">
    <h3 className="text-xl font-bold text-gradient-to-r from-light to-accent flex items-center gap-2">
      <Icon className="w-6 h-6" />
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <SkillBadge key={skill} skill={skill} />
      ))}
    </div>
  </div>
);

const About = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen px-6 py-20 relative bg-slate-950 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Subtle Glow Effects - Dark Green */}
      <div 
        className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent)',
        }}
      />
      <div 
        className="absolute bottom-20 left-20 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2), transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-light to-accent bg-clip-text text-transparent drop-shadow-lg">
            About Me
          </h2>
        </div>

        {/* Content Card */}
        <div className="space-y-8 bg-gradient-to-br from-slate-900/50 via-slate-950/50 to-slate-950/60 rounded-3xl p-8 md:p-12 border border-emerald-500/10 backdrop-blur-xl shadow-2xl shadow-emerald-500/10 hover:border-emerald-500/20 hover:shadow-emerald-500/20 transition-all duration-300">
          
          {/* Bio Text */}
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              I am a Software Engineering graduate passionate about building practical, real-world applications that blend clean software design with intelligent systems. I enjoy working across the full stack, from crafting intuitive user interfaces to developing reliable backend APIs and databases.
            </p>

            <p>
              I have hands-on experience developing production-ready web applications using Python, Django, PostgreSQL, and React, along with integrating AI and data-driven features into modern systems. My project work includes RESTful API development, authentication and authorization systems, machine learning model integration, and data processing pipelines, with a strong emphasis on scalability and maintainability.
            </p>

            <p>
              I am highly motivated, self-driven, and eager to grow within collaborative, industry-level environments. I enjoy learning new technologies, solving complex problems, and continuously refining my skills through real-world projects. My goal is to contribute to impactful software products while evolving into a well-rounded software engineer.
            </p>
          </div>

          {/* Skills Section */}
          <div className="space-y-4">
            <p className="text-slate-400">
              Here are some of the technologies I've been working with recently:
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-4 text-light">
              <SkillCategory 
                icon={Code2} 
                title="Frontend & Design" 
                skills={FRONTEND_SKILLS} 
              />
              <SkillCategory 
                icon={Zap} 
                title="Backend & AI/ML" 
                skills={BACKEND_SKILLS} 
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;