import React, { useState } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';

const JoinForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="enter_your_email@gateway"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'success' || status === 'loading'}
            className="flex-1 bg-slate-800/50 border border-slate-600 text-slate-100 placeholder-slate-500 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent block w-full p-3 font-mono transition-all disabled:opacity-50"
            required
          />
          <button
            type="submit"
            disabled={status === 'success' || status === 'loading'}
            className={`
              flex items-center justify-center px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300
              ${status === 'success' 
                ? 'bg-green-600 text-white cursor-default' 
                : 'bg-green-500 hover:bg-green-400 text-slate-900 shadow-lg shadow-green-500/20 hover:shadow-green-500/40'
              }
              disabled:opacity-70 disabled:cursor-not-allowed
            `}
          >
            {status === 'loading' ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : status === 'success' ? (
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Joined</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span>Join Waitlist</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            )}
          </button>
        </div>
        {status === 'success' && (
          <p className="absolute -bottom-8 left-0 text-xs text-green-400 font-mono animate-fade-in">
            &gt; Access requested. We'll signal you soon.
          </p>
        )}
      </form>
    </div>
  );
};

export default JoinForm;