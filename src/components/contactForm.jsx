import React, { useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const INPUT_CLASSES = "w-full px-4 py-3 bg-slate-900/50 border border-emerald-500/20 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300";

const FormField = ({ label, id, type = "text", placeholder, required = true, rows, value, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold text-left text-slate-300 mb-2">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        name={id}
        required={required}
        rows={rows}
        value={value}
        onChange={onChange}
        className={`${INPUT_CLASSES} resize-none`}
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        value={value}
        onChange={onChange}
        className={INPUT_CLASSES}
        placeholder={placeholder}
      />
    )}
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'process.env.REACT_APP_WEB3FORMS_KEY', 
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-slate-950">
      {/* Dark Overlay for more depth */}
      <div className="absolute inset-0 bg-black opacity-20 pointer-events-none"></div>

      {/* Background Glow Effects - Emerald Green (matching Hero) */}
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

      <div className="w-full max-w-2xl relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-light to-accent bg-clip-text text-transparent mb-4 drop-shadow-2xl">
            Get In Touch
          </h2>
          <p className="text-slate-300 text-lg drop-shadow-lg mb-6">
            Have a project in mind? Let's talk about it.
          </p>
        <div className="bg-gradient-to-br from-slate-900/50 via-slate-950/50 to-slate-950/60 rounded-2xl border border-emerald-500/10 p-8 md:p-10 backdrop-blur-xl shadow-2xl shadow-emerald-500/10 hover:border-emerald-500/20 hover:shadow-emerald-500/20 transition-all duration-300">
          <div className="space-y-6">
            <FormField
              label="Name"
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />

            <FormField
              label="Email"
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
            />

            <FormField
              label="Subject"
              id="subject"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={handleChange}
            />

            <FormField
              label="Message"
              id="message"
              type="textarea"
              rows={6}
              placeholder="Please Enter Your Message Here..."
              value={formData.message}
              onChange={handleChange}
            />

            {/* Submit Button with Emerald Glow */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="relative w-full mt-8 group"
            >
              {/* Emerald Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-lg blur-lg group-hover:blur-xl group-hover:from-emerald-500/40 group-hover:to-cyan-500/40 transition-all duration-300 opacity-0 group-hover:opacity-100" />

              {/* Button */}
              <div className="relative bg-gradient-to-r from-accent to-primary text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 disabled:opacity-75 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isSubmitting ? '' : 'group-hover:translate-x-1'}`} />
              </div>
            </button>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 text-center animate-fadeIn">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center animate-fadeIn">
                ✗ Something went wrong. Please try again or email me directly.
              </div>
            )}
                      
          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://github.com/Sanuthi50" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-md group-hover:blur-lg group-hover:bg-emerald-500/30 transition-all duration-300"></div>
              <div className="relative bg-slate-900/50 p-3 rounded-full border border-emerald-500/20 hover:border-emerald-400 hover:bg-slate-800/50 transition-all duration-300">
                <Github className="w-6 h-6 text-slate-300 group-hover:text-emerald-400 transition-colors duration-300" />
              </div>
            </a>

            <a 
              href="http://www.linkedin.com/in/sanuthi-liyasika" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-md group-hover:blur-lg group-hover:bg-emerald-500/30 transition-all duration-300"></div>
              <div className="relative bg-slate-900/50 p-3 rounded-full border border-emerald-500/20 hover:border-emerald-400 hover:bg-slate-800/50 transition-all duration-300">
                <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-emerald-400 transition-colors duration-300" />
              </div>
            </a>
          </div>
            </div>  
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;