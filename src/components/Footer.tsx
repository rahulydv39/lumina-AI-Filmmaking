import React from 'react';
import { Twitter, Github, Disc as Discord } from 'lucide-react';

export const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full bg-black/90 backdrop-blur-md border-t border-white/10 py-12 px-6 relative z-50">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Left: Brand */}
                    <div className="text-center md:text-left">
                        <h2 className="font-display text-2xl font-bold uppercase tracking-tighter mb-2">Lumina</h2>
                        <p className="text-white/40 text-sm font-light">
                            © 2026 Lumina AI Inc.<br />All Rights Reserved.
                        </p>
                    </div>

                    {/* Center: Links */}
                    <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium uppercase tracking-widest text-white/50">
                        <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="hover:text-white transition-colors">Home</a>
                        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    </nav>

                    {/* Right: Socials */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="p-2 rounded-full border border-white/5 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                            <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="#" className="p-2 rounded-full border border-white/5 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="#" className="p-2 rounded-full border border-white/5 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                            <Discord className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Bottom decorative line */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-12" />
            </div>
        </footer>
    );
};
