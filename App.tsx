import React, { useState } from 'react';
import { Shield, Target, Users, MapPin, ChevronDown, Github, Twitter, Mail } from 'lucide-react';
import Terminal from './components/Terminal';
import Logo from './components/Logo';
import JoinForm from './components/JoinForm';
import MatrixRain from './components/MatrixRain';
import { MISSION_TEXT } from './constants';

function App() {
  const [activeSection, setActiveSection] = useState<'mission' | 'join'>('mission');

  return (
    <div className="min-h-screen bg-peak-dark text-slate-200 selection:bg-green-500/30 selection:text-green-200 overflow-x-hidden">
      
      {/* Dynamic Background */}
      <MatrixRain />
      
      {/* Ambient Gradient Glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[128px] pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation */}
        <nav className="w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
           <div className="flex items-center space-x-2 font-mono font-bold text-lg tracking-tighter cursor-default">
             <div className="w-3 h-3 bg-green-500 rounded-sm animate-pulse"></div>
             <span>PEAK_CTF</span>
           </div>
           <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-400">
             <a href="#mission" className="hover:text-green-400 transition-colors">Mission</a>
             <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
           </div>
        </nav>

        {/* Hero Section */}
        <main className="flex-grow flex flex-col items-center justify-center px-4 pt-10 pb-20 text-center space-y-8 md:space-y-12">
          
          <div className="animate-fade-in-down relative">
            <Logo size="xl" className="mb-6 drop-shadow-[0_0_25px_rgba(16,185,129,0.2)]" />
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 font-sans glitch" data-text="PEAK CTF TEAM">
              PEAK CTF
            </h1>
            <p className="text-green-400 font-mono text-sm md:text-lg tracking-widest uppercase opacity-90">
              Curiosity. Grit. Challenge.
            </p>
            <div className="mt-2 flex items-center justify-center space-x-2 text-slate-500 text-xs md:text-sm font-mono">
              <MapPin size={14} />
              <span>COLORADO SPRINGS, CO</span>
            </div>
          </div>

          <div className="w-full max-w-4xl px-4 animate-fade-in-up delay-200">
             <Terminal text={MISSION_TEXT} />
          </div>

          <div className="animate-bounce mt-10 text-slate-600">
            <ChevronDown size={24} />
          </div>
        </main>

        {/* Pillars Section */}
        <section id="mission" className="py-20 bg-slate-900/50 border-y border-slate-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              
              {/* Pillar 1 */}
              <div className="group p-8 rounded-2xl bg-slate-800/60 border border-slate-700/50 hover:border-green-500/30 hover:bg-slate-800/80 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Community First</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Rooted in Colorado Springs. We are committed to strengthening local talent. No gatekeeping. No egos. Just people ready to learn.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="group p-8 rounded-2xl bg-slate-800/60 border border-slate-700/50 hover:border-green-500/30 hover:bg-slate-800/80 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Passion &gt; Pedigree</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Whether you're a seasoned pro or have never touched a terminal. If you have the drive to learn and refuse to quit, you have a seat at the table.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="group p-8 rounded-2xl bg-slate-800/60 border border-slate-700/50 hover:border-green-500/30 hover:bg-slate-800/80 transition-all duration-300">
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="text-red-400" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">United by Challenge</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  We grow by teaching each other, failing forward together, and celebrating every flag captured along the way.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* Footer */}
        <footer id="contact" className="py-8 border-t border-slate-800 bg-slate-900 text-slate-500 text-sm">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2 font-mono font-bold text-slate-300">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>PEAK_CTF</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:text-green-400 transition-colors"><Github size={18} /></a>
              <a href="#" className="hover:text-green-400 transition-colors"><Twitter size={18} /></a>
              <a href="mailto:contact@peakctf.com" className="hover:text-green-400 transition-colors"><Mail size={18} /></a>
            </div>

            <div className="text-xs font-mono">
              &copy; {new Date().getFullYear()} PEAK CTF Team. All rights reserved.
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;