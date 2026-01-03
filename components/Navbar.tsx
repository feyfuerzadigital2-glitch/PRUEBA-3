
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-black/40 backdrop-blur-md border border-white/10 px-8 py-4 rounded-[2rem]">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-neon rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:scale-110 transition-transform">
            <span className="text-black font-black text-xl italic">V</span>
          </div>
          <span className="text-white font-black tracking-tighter text-xl uppercase">Métodos VIP</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 bg-zinc-900/50 px-4 py-2 rounded-full border border-white/5">
            <div className="w-2 h-2 bg-brand-neon rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">365 Días restantes</span>
          </div>
          <button className="text-zinc-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-tighter">
            Salir
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
