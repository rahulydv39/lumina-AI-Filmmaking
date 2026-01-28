import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';

export const ContactFooter: React.FC = () => {
    return (
        <section id="contact" className="py-32 container mx-auto px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-lumina-accent/5">
            <div className="flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full max-w-lg p-8 md:p-12 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(34,211,238,0.1)]"
                >
                    <div className="text-center mb-10">
                        <h2 className="font-display text-4xl font-bold uppercase mb-2">Get Access</h2>
                        <p className="text-white/40 text-sm">Join the waitlist for early beta participation.</p>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-white/50">Email Frequency</label>
                            <input
                                type="email"
                                placeholder="director@studio.com"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-lumina-cyan transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-white/50">Project Type</label>
                            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lumina-cyan transition-colors appearance-none">
                                <option>Commercial</option>
                                <option>Narrative Film</option>
                                <option>Music Video</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <Button className="w-full">Request Access</Button>
                    </form>
                </motion.div>

                <footer className="mt-20 text-center text-xs text-white/20 font-mono">
                    LUMINA AI © 2026. ALL RIGHTS RESERVED.
                </footer>
            </div>
        </section>
    );
};
