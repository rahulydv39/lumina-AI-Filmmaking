import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-32 container mx-auto px-6 border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="max-w-4xl mx-auto text-center"
            >
                <span className="inline-block py-1 px-3 border border-lumina-accent/50 rounded-full bg-lumina-accent/10 text-xs font-medium tracking-widest text-lumina-accent mb-8 uppercase">
                    Our Vision
                </span>

                <h2 className="font-display text-5xl md:text-8xl font-bold uppercase mb-12 tracking-tighter leading-[0.9]">
                    Democratizing <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-lumina-cyan to-lumina-magenta">Infinity.</span>
                </h2>

                <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light mb-20">
                    We believe that the future of cinema isn't just about better cameras—it's about removing the barrier between imagination and reality. Lumina is the bridge.
                </p>

                {/* Team Grid Stub */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-20 border-t border-white/10 pt-20">
                    <div>
                        <h3 className="text-2xl font-bold uppercase text-white mb-2">The Architects.</h3>
                        <p className="text-white/40">A collective of engineers, filmmakers, and dreamers.</p>
                    </div>
                    <div>
                        <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                            <p className="text-sm text-white/60">"We are building the tools we wished we had."</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
