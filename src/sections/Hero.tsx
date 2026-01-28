import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Button } from '../components/Button';
import { HERO_VIDEO_URL } from '../mediaConfig';

export const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Single Persistent Video Background */}
            <video
                key="hero-video-stable"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-50 opacity-60 fixed" // Added 'fixed' to ensure it stays as background if desired, or absolute for section. User asked for "Background Video". usually 'absolute' in 'fixed' container or 'fixed' in body. 
            // Wait, if I make it 'fixed' here, it will cover the footer when scrolling past hero if z-index is not handled.
            // Safest to keep it absolute in Hero for now as per previous stable state, OR fixed in Layout.
            // Let's stick to absolute in Hero but with the prompt's request "Persistent".
            // Actually, the user's prompt says "Go back to using ONE static background video loop in Layout.jsx or Hero.jsx". 
            // Standard SPA pattern: Fixed background in Layout, content scrolls over.
            // Let's try `fixed` here with -z-50.
            >
                <source src={HERO_VIDEO_URL} type="video/mp4" />
            </video>

            {/* Cinematic Tints (Restored) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-lumina-accent/30 rounded-full blur-[120px] animate-slow-spin" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-lumina-cyan/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-lumina-magenta/20 rounded-full blur-[80px]" />

                {/* Noise overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                {/* Darken overlay for text readability */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="container relative z-10 mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <span className="inline-block py-1 px-3 border border-white/10 rounded-full bg-white/5 text-xs font-medium tracking-widest text-lumina-cyan backdrop-blur-md uppercase mb-6">
                        Future of Filmmaking
                    </span>

                    <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter leading-none mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                        Dream it.<br />
                        <span className="text-white">Stream it.</span>
                    </h1>

                    <p className="max-w-xl mx-auto text-lg text-white/60 font-light mb-10 leading-relaxed">
                        Generate cinematic masterpieces from text in seconds.
                        The world's most advanced AI director is now at your fingertips.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Button>
                            Generate Video
                        </Button>
                        <Button variant="outline">
                            <Play className="w-4 h-4 fill-current" /> Watch Demo
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
            </motion.div>
        </section>
    );
};
