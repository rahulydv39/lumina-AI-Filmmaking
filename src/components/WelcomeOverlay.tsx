import { useEffect } from 'react';
import { motion } from 'framer-motion';

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
            {/* Simple Gradient Background - No Video */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#050505]" />
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Central Pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lumina-accent/10 rounded-full blur-[120px] animate-pulse" />

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