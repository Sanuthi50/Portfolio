import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Code2, Zap, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [laptopColor, setLaptopColor] = useState('hsl(200, 85%, 45%)');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      const x = (e.clientY - window.innerHeight / 2) * 0.05;
      const y = (e.clientX - window.innerWidth / 2) * 0.05;
      setRotateX(x);
      setRotateY(y);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const colors = [
    'hsl(200, 85%, 45%)',
    'hsl(180, 80%, 45%)',
    'hsl(140, 75%, 45%)',
    'hsl(210, 90%, 50%)',
  ];

  const mainProject = {
    title: 'AI Chat Interface',
    category: 'ai/ml',
    desc: 'Real-time chat application with ML integration and natural language processing capabilities',
    longDesc: 'A sophisticated AI-powered chat interface built with React and integrated with advanced ML models. Features real-time message processing, context awareness, and intelligent response generation. The application handles complex conversations with state management and provides a seamless user experience.',
    tags: ['React', 'Node.js', 'WebSocket', 'TensorFlow', 'Python'],
    image: '🤖',
    status: 'In Development',
    link: '#',
    github: '#',
    features: [
      'Real-time message streaming',
      'Context-aware responses',
      'User authentication',
      'Conversation history',
      'Model selection interface'
    ]
  };

  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'fullstack',
      desc: 'Full-featured e-commerce solution with payment integration',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://example.com',
      github: '#',
      hosted: true,
      image: '💳'
    },
    {
      title: 'Design System',
      category: 'frontend',
      desc: 'Reusable component library with Storybook documentation',
      tags: ['React', 'TypeScript', 'Tailwind', 'Storybook'],
      link: '#',
      github: '#',
      hosted: false,
      image: '🎨'
    },
    {
      title: 'Image Classification API',
      category: 'ai/ml',
      desc: 'Deep learning model for image recognition and classification',
      tags: ['Python', 'TensorFlow', 'FastAPI', 'OpenCV'],
      link: '#',
      github: '#',
      hosted: false,
      image: '🖼️'
    },
    {
      title: 'Task Management App',
      category: 'fullstack',
      desc: 'Collaborative workspace with real-time updates',
      tags: ['React', 'Firebase', 'Firestore', 'Tailwind'],
      link: 'https://example.com',
      github: '#',
      hosted: true,
      image: '✓'
    },
    {
      title: 'Data Visualization Dashboard',
      category: 'frontend',
      desc: '3D interactive analytics dashboard with real-time data',
      tags: ['React', 'Three.js', 'D3.js', 'WebGL'],
      link: '#',
      github: '#',
      hosted: false,
      image: '📊'
    },
    {
      title: 'Recommendation Engine',
      category: 'ai/ml',
      desc: 'ML-powered recommendation system using collaborative filtering',
      tags: ['Python', 'Scikit-learn', 'FastAPI', 'Redis'],
      link: '#',
      github: '#',
      hosted: false,
      image: '🎯'
    },
    {
      title: 'Portfolio Website',
      category: 'frontend',
      desc: 'Minimal and modern portfolio with smooth animations',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      link: 'https://example.com',
      github: '#',
      hosted: true,
      image: '🌐'
    },
    {
      title: 'Chat Application',
      category: 'fullstack',
      desc: 'Real-time messaging app with end-to-end encryption',
      tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      link: '#',
      github: '#',
      hosted: false,
      image: '💬'
    },
    {
      title: 'Sentiment Analysis Tool',
      category: 'ai/ml',
      desc: 'NLP model for analyzing text sentiment and emotions',
      tags: ['Python', 'NLTK', 'FastAPI', 'React'],
      link: '#',
      github: '#',
      hosted: false,
      image: '😊'
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Projects', color: 'emerald' },
    { id: 'frontend', label: 'Frontend', color: 'green' },
    { id: 'fullstack', label: 'Fullstack', color: 'lime' },
    { id: 'ai/ml', label: 'AI/ML', color: 'teal' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          style={{
            left: `${mousePos.x - 192}px`,
            top: `${mousePos.y - 192}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/50 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {'</>'}
          </div>
          
          <div className="hidden md:flex gap-8">
            {['home', 'work', 'about', 'contact'].map(item => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setActiveSection(item)}
                className={`capitalize transition-all duration-300 ${
                  activeSection === item 
                    ? 'text-cyan-400 font-semibold' 
                    : 'text-slate-400 hover:text-cyan-300'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cyan-400"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="text-cyan-400 text-sm font-mono font-semibold">
              Welcome to my portfolio
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Creative Developer & Innovator
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg max-w-lg">
              Crafting immersive digital experiences with cutting-edge technology, 3D elements, and minimalist design philosophy.
            </p>

            <div className="flex gap-4">
              <a 
                href="#work"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Work
              </a>
              <a 
                href="#contact"
                className="px-8 py-4 border border-slate-700 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 flex items-center justify-center border border-slate-700 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* 3D Laptop with Enhanced Effects */}
          <div className="relative perspective-1000">
            <div 
              className="relative w-full max-w-md mx-auto"
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {/* Glow effect */}
              <div 
                className="absolute inset-0 blur-2xl opacity-50 rounded-2xl"
                style={{ backgroundColor: laptopColor }}
              />
              
              {/* Main laptop body */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-3 shadow-2xl border border-slate-700">
                {/* Screen */}
                <div 
                  className="relative rounded-lg overflow-hidden aspect-video border-4 border-slate-900"
                  style={{ boxShadow: `0 0 40px ${laptopColor}40` }}
                >
                  {/* Screen glow */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${laptopColor}20, transparent)`,
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="text-6xl mb-4">💻</div>
                      <div 
                        className="text-2xl font-bold"
                        style={{ color: laptopColor }}
                      >
                        Portfolio
                      </div>
                      <div className="text-xs text-slate-500">Click to change color</div>
                    </div>
                  </div>

                  {/* Bezel */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-700 rounded-full" />
                </div>

                {/* Stand with 3D effect */}
                <div className="h-4 bg-gradient-to-b from-slate-800 to-slate-900 rounded-b-2xl shadow-lg" />
              </div>

              {/* Floating particles */}
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full animate-pulse"
                  style={{
                    backgroundColor: laptopColor,
                    top: `${20 + i * 15}%`,
                    right: `${-10 - i * 5}%`,
                    animationDelay: `${i * 0.3}s`,
                    boxShadow: `0 0 10px ${laptopColor}`,
                  }}
                />
              ))}
            </div>

            {/* Color selector */}
            <div className="flex gap-3 justify-center mt-8">
              {colors.map((color, i) => (
                <button
                  key={i}
                  onClick={() => setLaptopColor(color)}
                  className="w-5 h-5 rounded-full border-2 border-slate-600 hover:border-cyan-400 transition-all duration-300 transform hover:scale-125 shadow-lg hover:shadow-cyan-500/50"
                  style={{
                    backgroundColor: color,
                    boxShadow: `0 0 20px ${color}60`
                  }}
                  title={`Color ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a 
          href="#work"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 hover:text-cyan-400 transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </a>
      </section>

      {/* Main Featured Project */}
      <section id="work" className="min-h-screen px-6 py-20 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="text-cyan-400 text-sm font-mono mb-4">Featured Project</div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Showcasing my latest work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-slate-900/50 to-slate-950/50 rounded-3xl p-8 border border-slate-800/50 backdrop-blur-xl">
            {/* Project Info */}
            <div className="space-y-6">
              <div className="flex gap-3 items-center">
                <span className="px-4 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/30">
                  {mainProject.category}
                </span>
                <span className="px-4 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-semibold border border-blue-500/30">
                  {mainProject.status}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold">{mainProject.title}</h3>
              <p className="text-slate-400 leading-relaxed">{mainProject.longDesc}</p>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-cyan-400">Key Features</h4>
                <ul className="space-y-2">
                  {mainProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-400">
                      <ArrowRight className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {mainProject.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-800/50 rounded-lg text-sm text-slate-300 border border-slate-700/50">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <a 
                  href={mainProject.link}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href={mainProject.github}
                  className="px-6 py-3 border border-slate-700 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>

            {/* Visual Preview with 3D effect */}
            <div className="relative">
              <div 
                className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-12 border border-slate-700/50 shadow-2xl transform hover:scale-105 transition-transform duration-500"
                style={{
                  transform: `perspective(1000px) rotateY(${rotateY * 0.3}deg) rotateX(${-rotateX * 0.3}deg)`
                }}
              >
                <div className="text-9xl text-center filter drop-shadow-2xl">
                  {mainProject.image}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-20 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Other Projects
            </h2>
            <p className="text-slate-400 text-lg">
              A collection of frontend, fullstack, and AI/ML projects
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 backdrop-blur border ${
                  selectedCategory === cat.id
                    ? `bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-cyan-400 shadow-lg shadow-cyan-500/30`
                    : `bg-slate-800/30 text-slate-300 border-slate-700/50 hover:border-cyan-500/50 hover:text-cyan-400`
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <div
                key={i}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-gradient-to-br from-slate-900/80 to-slate-950/80 rounded-xl border border-slate-800/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2 backdrop-blur-xl"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300" />

                {/* Project Visual */}
                <div className="relative p-8 border-b border-slate-800/50">
                  <div className="text-6xl text-center filter group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>

                  {/* Floating particles on hover */}
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        top: `${30 + i * 20}%`,
                        right: `${10 + i * 10}%`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <div className="flex gap-2 items-center">
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                    {project.hosted && (
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-semibold">
                        Live
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{project.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, j) => (
                      <span key={j} className="px-2 py-1 bg-slate-800/50 rounded text-xs text-slate-400">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-2 py-1 bg-slate-800/50 rounded text-xs text-slate-400">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 py-2 text-center bg-cyan-500/10 text-cyan-400 rounded-lg text-sm font-semibbold hover:bg-cyan-500/20 transition-colors"
                      >
                        View
                      </a>
                    )}
                    <a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 py-2 text-center border border-slate-700 text-slate-300 rounded-lg text-sm font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen px-6 py-20 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>

          <div className="space-y-8 bg-gradient-to-br from-slate-900/50 to-slate-950/50 rounded-3xl p-8 border border-slate-800/50 backdrop-blur-xl">
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a developer passionate about creating beautiful, functional digital experiences. With expertise in modern web technologies and a keen eye for design, I transform ideas into interactive realities with immersive 3D elements and smooth animations.
            </p>

            <p className="text-slate-400 leading-relaxed">
              My approach combines clean code with thoughtful design, ensuring each project is both performant and delightful to use. I specialize in frontend development, fullstack applications, and machine learning solutions.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
                  <Code2 className="w-6 h-6" />
                  Frontend & Design
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Tailwind', 'Three.js', 'WebGL'].map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Backend & AI/ML
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'].map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-slate-400 text-lg">
              Have a project in mind? Let's create something amazing together.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 rounded-2xl border border-slate-800/50 p-8 backdrop-blur-xl shadow-2xl">
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST"
              className="space-y-6"
            >
              {/* Replace with your actual Web3Forms access key */}
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              
              {/* Honeypot for spam prevention */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-4 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                Send Message
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-slate-800/50">
              <p className="text-slate-400 text-center mb-4">Or reach out via</p>
              <div className="flex justify-center gap-4">
                {[
                  { icon: Github, label: 'GitHub', link: '#' },
                  { icon: Linkedin, label: 'LinkedIn', link: '#' },
                  { icon: Mail, label: 'Email', link: 'mailto:your@email.com' }
                ].map(({ icon: Icon, label, link }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}