import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HERO_VIDEO_URL } from '../mediaConfig';

interface WelcomeOverlayProps {
    onStart: () => void;
}

export const WelcomeOverlay: React.FC<WelcomeOverlayProps> = ({ onStart }) => {

    useEffect(() => {
        const handleWheel = () => {
            onStart();
        };

        window.addEventListener('wheel', handleWheel, { once: true });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [onStart]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center cursor-pointer overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, pointerEvents: 'none' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            onClick={onStart}
        >
            {/* 1. BACKGROUND VIDEO (User Requested "Video Card on Background") */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
                {/* Use the same reliable video or the Kling one if user prefers. 
                    User said "make a video card on the background", which typically means full screen video bg.
                    I'll use HERO_VIDEO_URL as it's the confirmed functional one.
                */}
                <source
                    src={HERO_VIDEO_URL}
                    type="video/mp4"
                />
            </video>

            {/* 2. GRADIENT OVERLAY (Makes text pop) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            <div className="relative z-10 text-center px-4">
                <motion.button
                    className="group relative px-10 py-5 overflow-hidden rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="relative z-10 font-sans text-xl font-bold uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-500 text-white/90">
                        Enter Universe
                    </span>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-lumina-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.button>

                <p className="mt-6 text-white/30 text-[10px] tracking-[0.3em] uppercase animate-pulse">
                    Initialize System
                </p>
            </div>
        </motion.div>
    );
};