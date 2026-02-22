import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, MousePointerClick } from 'lucide-react';

interface TerminalProps {
  text: string;
}

const Terminal: React.FC<TerminalProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset state on text change
    setDisplayedText('');
    setIsTyping(true);
    let index = 0;
    const speed = 15; // ms per char
    
    // Clear any existing interval
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Initial delay before typing starts
    const startTimeout = setTimeout(() => {
        intervalRef.current = window.setInterval(() => {
        if (index < text.length) {
            setDisplayedText((prev) => prev + text.charAt(index));
            index++;
            
            // Auto scroll to bottom
            if (terminalRef.current) {
                terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
            }
        } else {
            setIsTyping(false);
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
        }, speed);

    }, 1000);
    
    return () => {
        clearTimeout(startTimeout);
        if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  const handleSkip = () => {
    if (!isTyping) return;
    
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayedText(text);
    setIsTyping(false);
    
    // Scroll to bottom immediately
    setTimeout(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, 10);
  };

  return (
    <div 
        className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-slate-700 bg-slate-900/90 backdrop-blur-sm transform transition-all hover:scale-[1.01] hover:shadow-green-900/20 group cursor-pointer"
        onClick={handleSkip}
        title={isTyping ? "Click to skip typing" : ""}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
          <TerminalIcon size={12} />
          <span>mission.txt</span>
        </div>
        <div className="w-8 flex justify-end">
            {isTyping && <MousePointerClick size={14} className="text-slate-500 animate-pulse" />}
        </div> 
      </div>

      {/* Terminal Body */}
      <div 
        ref={terminalRef}
        className="p-6 h-64 md:h-80 overflow-y-auto font-mono text-sm md:text-base text-green-400 leading-relaxed scroll-smooth"
      >
        <span className="text-blue-400">user@peak-ctf:~$</span>cat mission.txt<br />
        <span className="text-slate-500 mb-4 block">Executing...</span>
        
        <div className="whitespace-pre-wrap">
          {displayedText}
          <span className={`inline-block w-2 h-4 ml-1 bg-green-400 align-middle ${isTyping ? 'animate-pulse' : 'hidden'}`}></span>
        </div>

        {!isTyping && (
           <div className="mt-4">
               <span className="text-blue-400">user@peak-ctf:~$</span> <span className="animate-pulse">_</span>
           </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;