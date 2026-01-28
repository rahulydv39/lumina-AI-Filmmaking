import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const projects = [
    { title: "Neon Rain", category: "Music Video", color: "bg-lumina-accent" },
    { title: "Mars 2099", category: "Short Film", color: "bg-lumina-cyan" },
    { title: "Neural Dreams", category: "Experimental", color: "bg-lumina-magenta" },
    { title: "Cyber Noir", category: "Commercial", color: "bg-purple-500" },
];

export const Showcase: React.FC = () => {
    return (
        <div className="pt-32 pb-20 px-6 container mx-auto">
            <h1 className="font-display text-6xl md:text-9xl font-bold uppercase mb-20 tracking-tighter text-white/10 fixed top-40 -z-10 select-none">
                Showcase
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer"
                    >
                        {/* Placeholder overlay */}
                        <div className={`absolute inset-0 ${project.color} opacity-20 group-hover:opacity-10 transition-opacity duration-500`} />

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                <Play className="w-6 h-6 fill-white text-white" />
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="font-display text-2xl font-bold uppercase">{project.title}</h3>
                            <span className="text-xs font-mono text-lumina-cyan uppercase tracking-wider">{project.category}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
