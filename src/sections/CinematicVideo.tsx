import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const CinematicVideo: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 1], [5, -5]);
    const rotateY = useTransform(scrollYProgress, [0, 1], [-15, -5]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section ref={ref} className="py-32 flex items-center justify-center relative perspective-1000">
            <motion.div
                className="relative w-[80vw] md:w-[60vw] h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(124,58,237,0.3)] bg-black"
                style={{
                    rotateX: rotateX,
                    rotateY: rotateY,
                    y: y,
                    transformStyle: "preserve-3d",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Video Layer */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="https://cdn.pixabay.com/video/2019/04/20/22908-331614742_large.mp4" type="video/mp4" />
                </video>

                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] border border-white/10 z-10" />

                {/* Content on top */}
                <div className="absolute bottom-10 left-10 z-20 max-w-md">
                    <h3 className="text-3xl font-display font-bold uppercase text-white mb-2 mix-blend-difference">
                        Immersion Engine
                    </h3>
                    <p className="text-white/80 text-sm backdrop-blur-md bg-black/30 p-4 rounded-xl border border-white/10">
                        Experience the next generation of visual storytelling. Depth, motion, and emotion synchronized in real-time.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};
