import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const menuItems = [
    { name: "The Studio", path: "hero", sub: "Home" },
    { name: "Our Vision", path: "about", sub: "About" },
    { name: "Made with Lumina", path: "showcase", sub: "Showcase" },
    { name: "Plans", path: "pricing", sub: "Pricing" },
    { name: "Get Access", path: "contact", sub: "Contact" },
];

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else if (id === "hero") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-8 right-8 z-[60] flex items-center gap-3 group mix-blend-difference text-white"
            >
                <div className="hidden md:block overflow-hidden h-5">
                    <span className="block text-sm font-bold uppercase tracking-widest group-hover:-translate-y-full transition-transform duration-300">
                        {isOpen ? "Close" : "Menu"}
                    </span>
                    <span className="block text-sm font-bold uppercase tracking-widest group-hover:-translate-y-full transition-transform duration-300 text-lumina-cyan">
                        {isOpen ? "Close" : "Menu"}
                    </span>
                </div>
                <div className="p-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md group-hover:bg-white/10 transition-colors">
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </div>
            </button>

            {/* Logo */}
            <a href="/" onClick={(e) => scrollToSection('hero', e)} className="fixed top-8 left-8 z-[60] mix-blend-difference text-white">
                <span className="font-display font-bold text-2xl tracking-tighter uppercase">Lumina</span>
            </a>

            {/* Cinematic Curtain */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-[55] bg-[#050505] flex items-center justify-center h-screen w-screen overflow-y-auto overscroll-contain"
                    >
                        {/* Background Decoration */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none fixed">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lumina-accent/20 rounded-full blur-[200px]" />
                        </div>

                        <ul className="flex flex-col gap-6 md:gap-10 items-center justify-center relative z-10 w-full px-6 py-20 min-h-screen">
                            {menuItems.map((item, i) => (
                                <motion.li
                                    key={item.path}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 50 }}
                                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                                    className="w-full max-w-4xl border-b border-white/10 pb-6 group"
                                >
                                    <a
                                        href={`#${item.path}`}
                                        onClick={(e) => scrollToSection(item.path, e)}
                                        className="flex items-center justify-between w-full"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                                            <span className="text-xs font-mono text-white/40 uppercase tracking-widest">{`0${i + 1}`}</span>
                                            <span className="font-display text-4xl md:text-7xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 group-hover:to-lumina-cyan transition-all duration-500">
                                                {item.name}
                                            </span>
                                        </div>
                                        <div className="hidden md:flex items-center gap-2 opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-lumina-cyan">
                                            <span className="text-sm font-bold uppercase tracking-wider">{item.sub}</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
