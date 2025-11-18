'use client';

import React, { useState } from 'react';
import { Menu, X, Mail, Github, Linkedin } from 'lucide-react';

export default function BiographyWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Your Name</h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              {['about', 'work', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-slate-600 hover:text-slate-900 capitalize transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              {['about', 'work', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left text-slate-600 hover:text-slate-900 capitalize py-2"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            Hi! I'm <span className="text-blue-600">Your Name</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 mb-8">
            Your Professional Title or Tagline
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A brief introduction about yourself. What you do, what you're passionate about, 
            and what makes you unique.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-slate-900 mb-8">About Me</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-slate-800 mb-4">Background</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                Your educational background, degree, and graduation year.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Additional information about your journey, interests, or what drives you.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-slate-800 mb-4">Skills & Languages</h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Programming: JavaScript, React, Next.js, Python</li>
                <li>• Design: Figma, Adobe Creative Suite</li>
                <li>• Languages: English (Native), Spanish (Conversational)</li>
                <li>• Other skills relevant to you</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Work/Portfolio Gallery Section */}
      <section id="work" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-slate-900 mb-12">My Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group relative aspect-square bg-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Project {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-slate-900 mb-12">Featured Projects</h3>
          <div className="space-y-8">
            <div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-semibold text-slate-800 mb-3">Project Name</h4>
              <p className="text-slate-600 mb-4">
                A description of what this project is about, what technologies you used, 
                and what you learned or achieved.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:underline">View Demo →</a>
                <a href="#" className="text-blue-600 hover:underline">View Code →</a>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-semibold text-slate-800 mb-3">Another Project</h4>
              <p className="text-slate-600 mb-4">
                Description of your second featured project. Include interesting details 
                about the development process or impact.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:underline">View Demo →</a>
                <a href="#" className="text-blue-600 hover:underline">View Code →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-slate-900 mb-8">Get In Touch</h3>
          <p className="text-lg text-slate-600 mb-8">
            The easiest way to contact me is through email! Feel free to reach out 
            for collaborations, questions, or just to say hi.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              <Mail size={20} />
              Send me an email
            </a>
            <p className="text-slate-500">or email me at: your.email@example.com</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
              <Github size={28} />
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Your Name. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}