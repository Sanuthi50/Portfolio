import React from 'react';

const Hero = () => {
    return (
        <>
         <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-slate-950">
            
            {/* Dark Overlay for more depth */}
            <div className="absolute inset-0 bg-black opacity-20 pointer-events-none"></div>

            {/* Background Glow Effects - Emerald Green */}
            <div className="absolute top-0 left-0 w-screen h-screen rounded-full blur-3xl opacity-30 pointer-events-none"
                 style={{
                     background: 'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.3), transparent 50%)',
                     animation: 'float 8s ease-in-out infinite'
                 }}>
            </div>
            
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
                 style={{
                     background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2), transparent)',
                     animation: 'float 10s ease-in-out infinite reverse'
                 }}>
            </div>

            {/* Dark shadow vignette */}
            <div className="absolute inset-0 pointer-events-none"
                 style={{
                     background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)'
                 }}>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/*Left Content*/}
                <div className="space-y-6">
                   <div className="text-slate-300 text-sm font-mono font-semibold drop-shadow-lg">
                    &lt; Hello, I'm Sanuthi Liyasika. Welcome to my portfolio. &gt;
                   </div>

                   <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-2xl">
                    <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-slate-200 bg-clip-text text-transparent">Software Developer</span>   
                   </h1>

                   <p className="text-slate-300 text-lg max-w-lg drop-shadow-lg leading-relaxed">
                    Software Engineering graduate who's passionate about crafting meaningful web experiences and exploring what's possible with AI. 
                    I enjoy working across the stack <span className="text-emerald-400 font-bold">Python, Django, PostgreSQL, React</span> and collaborating with others to bring ideas to life. 
                    I'm driven by curiosity, fueled by continuous learning, and genuinely excited about solving problems that matter. 
                    Always open to feedback, new perspectives, and growth.
                   </p>
                   <div className="flex gap-4 items-center">
                    <a href="#projects" className="inline-block bg-gradient-to-r from-accent to-primary text-white font-semibold rounded-lg px-8 py-3 hover:shadow-2xl hover:scale-105 transition duration-300 drop-shadow-lg text-center"
                        style={{
                            boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)'
                        }}>
                        View my Work
                    </a>
                    <a href="#contact" className="px-8 py-3 border border-emerald-500/30 rounded-lg font-semibold hover:border-light hover:text-dark transition-all duration-300 text-slate-300 text-center"
                        style={{
                            boxShadow: '0 10px 30px rgba(16, 185, 129, 0.2)'
                        }}>
                        Get in Touch
                    </a>
                    </div>
                 </div>

                {/*Right Content - Profile Picture Circle*/}
                <div className="flex justify-center items-center">
                    <div className="relative w-80 h-80">
                        {/* Large Outer Glow */}
                        <div className="absolute -inset-12 rounded-full" 
                             style={{ 
                                 background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4), transparent)',
                                 boxShadow: '0 0 80px rgba(16, 185, 129, 0.6), 0 0 120px rgba(16, 185, 129, 0.3)',
                                 animation: 'pulse 3s ease-in-out infinite'
                             }}>
                        </div>

                        {/* Mid Glow Layer */}
                        <div className="absolute -inset-6 rounded-full" 
                             style={{ 
                                 background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2), transparent)',
                                 boxShadow: '0 0 40px rgba(16, 185, 129, 0.4)',
                                 animation: 'float 4s ease-in-out infinite'
                             }}>
                        </div>

                        {/* Shiny Emerald Border Ring */}
                        <div className="absolute inset-0 rounded-full border-8" 
                             style={{ 
                                 borderColor: '#10b981',
                                 boxShadow: '0 0 40px rgba(16, 185, 129, 0.8), inset 0 0 20px rgba(16, 185, 129, 0.4), 0 20px 40px rgba(0, 0, 0, 0.5)'
                             }}>
                        </div>

                        {/* Inner Circle for Image */}
                        <div className="absolute inset-2 rounded-full overflow-hidden bg-slate-100 shadow-2xl"
                             style={{
                                 boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.3), 0 20px 50px rgba(0, 0, 0, 0.5)'
                             }}>
                            <img 
                                src="/profile.jpeg" 
                                alt="Sanuthi Liyasika" 
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Top Light Reflection */}
                        <div className="absolute inset-2 rounded-full"
                             style={{
                                 background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), transparent 50%)',
                                 pointerEvents: 'none'
                             }}>
                        </div>

                        {/* Animated Shimmer Effect */}
                        <div className="absolute inset-0 rounded-full"
                             style={{
                                 boxShadow: '0 0 60px rgba(16, 185, 129, 0.6)',
                                 animation: 'glow 3s ease-in-out infinite'
                             }}>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes glow {
                    0%, 100% { box-shadow: 0 0 60px rgba(16, 185, 129, 0.6); }
                    50% { box-shadow: 0 0 100px rgba(16, 185, 129, 0.9); }
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.05); opacity: 0.8; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
            `}</style>
        </section>
        </>
    );
}
export default Hero;