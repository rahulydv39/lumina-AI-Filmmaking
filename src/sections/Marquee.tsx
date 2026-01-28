import React from 'react';
import { motion } from 'framer-motion';

const features = ["RTX RENDERING", "8K RESOLUTION", "NEURAL SYNC", "REAL-TIME LATENCY", "DOLBY VISION", "AI COLOR GRADING"];

export const Marquee: React.FC = () => {
    return (
        <section className="py-20 overflow-hidden bg-black relative border-y border-white/5">
            <div className="absolute inset-0 bg-lumina-accent/5 blur-3xl" />
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-16 items-center"
                    animate={{ x: "-50%" }}
                    transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                >
                    {[...features, ...features, ...features, ...features].map((feature, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 uppercase tracking-widest">
                                {feature}
                            </span>
                            <div className="w-2 h-2 bg-lumina-cyan rounded-full shadow-[0_0_10px_#22D3EE]" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
