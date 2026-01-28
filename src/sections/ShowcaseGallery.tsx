import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const projects = [
    { title: "Neon Rain", category: "Music Video", color: "bg-lumina-accent", video: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-city-traffic-at-night-34563-large.mp4" },
    { title: "Mars 2099", category: "Short Film", color: "bg-lumina-cyan", video: "https://assets.mixkit.co/videos/preview/mixkit-red-smoke-swirling-in-the-dark-44284-large.mp4" },
    { title: "Neural Dreams", category: "Experimental", color: "bg-lumina-magenta", video: "https://assets.mixkit.co/videos/preview/mixkit-abstract-blue-liquid-ink-swirl-1097-large.mp4" },
    { title: "Cyber Noir", category: "Commercial", color: "bg-purple-500", video: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-neon-circle-12799-large.mp4" },
];

export const ShowcaseGallery: React.FC = () => {
    return (
        <section id="showcase" className="py-32 container mx-auto px-6 border-t border-white/5">
            <div className="mb-20">
                <span className="text-xs font-bold uppercase tracking-widest text-lumina-cyan mb-4 block">Selected Works</span>
                <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white">
                    Made with <span className="text-transparent bg-clip-text bg-gradient-to-r from-lumina-cyan to-lumina-magenta">Lumina</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer"
                        onMouseEnter={(e) => {
                            const video = e.currentTarget.querySelector('video');
                            if (video) video.play();
                        }}
                        onMouseLeave={(e) => {
                            const video = e.currentTarget.querySelector('video');
                            if (video) {
                                video.pause();
                                video.currentTime = 0;
                            }
                        }}
                    >
                        {/* Video Element */}
                        <video
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                        >
                            <source src={project.video} type="video/mp4" />
                        </video>

                        {/* Default Overlay */}
                        <div className={`absolute inset-0 ${project.color} opacity-20 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none`} />

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                <Play className="w-6 h-6 fill-white text-white" />
                            </div>
                        </div>

                        {/* Label */}
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                            <h3 className="font-display text-2xl font-bold uppercase">{project.title}</h3>
                            <span className="text-xs font-mono text-lumina-cyan uppercase tracking-wider">{project.category}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
