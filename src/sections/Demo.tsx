import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Wand2, Layers, Video, MoveRight } from 'lucide-react';

const Card: React.FC<{ children: React.ReactNode; className?: string; title: string; icon: React.ReactNode }> = ({ children, className, title, icon }) => {
    return (
        <motion.div
            className={`relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 flex flex-col ${className}`}
            whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.2)" }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex items-center gap-3 mb-4 text-white/80">
                <div className="p-2 rounded-full bg-white/10 text-lumina-cyan">
                    {icon}
                </div>
                <h3 className="font-display font-bold uppercase tracking-wider text-sm">{title}</h3>
            </div>
            <div className="flex-1 relative">
                {children}
            </div>
        </motion.div>
    );
};

const TextToVideoCard = () => {
    const [text, setText] = useState("");
    const fullText = "A cyberpunk city in rain...";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i + 1));
            i++;
            if (i > fullText.length) {
                i = 0; // Loop it
                // Add a pause before resetting
                clearInterval(interval);
                setTimeout(() => {
                    setText("");
                    // restart loop logic if needed, but simple typing is fine
                }, 2000);
            }
        }, 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full flex flex-col justify-between">
            <div className="bg-black/40 rounded-xl p-4 border border-white/5 mb-4 h-32 relative overflow-hidden group">
                {/* Simulated Video Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-900 opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Video className="w-8 h-8 text-white/20" />
                </div>
                {/* Typewriter Input */}
                <div className="absolute bottom-4 left-4 right-4 h-10 bg-black/60 backdrop-blur-md rounded-lg flex items-center px-3 border border-white/10">
                    <span className="text-xs text-lumina-cyan font-mono">{text}<span className="animate-pulse">|</span></span>
                </div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed">
                Describe your vision. Lumina translates words into high-fidelity video streams instantly.
            </p>
        </div>
    )
}

const StyleTransferCard = () => {
    const [sliderPos, setSliderPos] = useState(50);

    return (
        <div className="h-full relative select-none">
            <div
                className="relative h-48 w-full rounded-xl overflow-hidden cursor-ew-resize group"
                onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    setSliderPos(Math.max(0, Math.min(100, x)));
                }}
            >
                {/* Before Image (Left) */}
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <span className="font-mono text-xs text-white/30">RAW FOOTAGE</span>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5d22719?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-40" />
                </div>

                {/* After Image (Right) - Clipped */}
                <div
                    className="absolute inset-0 bg-lumina-accent flex items-center justify-center"
                    style={{ clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)` }}
                >
                    <span className="font-mono text-xs text-white z-10 drop-shadow-md">CINEMATIC</span>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-r from-lumina-magenta/40 to-lumina-cyan/40 mix-blend-color-dodge" />
                </div>

                {/* Slider Handle */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(255,255,255,0.5)] z-20"
                    style={{ left: `${sliderPos}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <MoveRight className="w-3 h-3 text-black" />
                    </div>
                </div>
            </div>
            <p className="mt-4 text-white/40 text-xs">
                Apply cinematic styles with a single drag. Neural style transfer at 60fps.
            </p>
        </div>
    )
}

const DirectorCard = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center py-6">
            <motion.div
                className="relative w-32 h-32 mb-6"
                animate={{
                    rotateY: [0, 360],
                    rotateX: [0, 15, -15, 0]
                }}
                transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity
                }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Pseudo-3D Cube/Object construction with CSS would be complex, using a glowing orb instead for 'AI Core' feel */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lumina-cyan to-lumina-accent blur-md opacity-60 animate-pulse" />
                <div className="absolute inset-4 rounded-full bg-black z-10 flex items-center justify-center border border-white/20">
                    <Wand2 className="w-10 h-10 text-white" />
                </div>
                {/* Orbiting particles */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-full h-full border border-lumina-magenta/30 rounded-full"
                        style={{ rotate: i * 60 }}
                        animate={{ rotate: [i * 60, i * 60 + 360] }}
                        transition={{ duration: 8, ease: "linear", repeat: Infinity, delay: i }}
                    />
                ))}
            </motion.div>
            <h4 className="text-xl font-display font-bold text-white mb-2">AI Director</h4>
            <p className="text-center text-white/40 text-xs px-4">
                Automated camera angles, lighting adjustments, and scene composition.
            </p>
        </div>
    )
}

export const Demo: React.FC = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section ref={ref} className="relative py-32 container mx-auto px-6 z-10">
            <div className="mb-20">
                <motion.h2
                    className="text-4xl md:text-6xl font-display font-bold uppercase mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                >
                    Power to <span className="text-transparent bg-clip-text bg-gradient-to-r from-lumina-cyan to-lumina-magenta">Create.</span>
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] md:h-[400px]">
                {/* Card 1: Text to Video - Spans 1 col */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="h-full"
                >
                    <Card title="Text to Video" icon={<Video size={18} />} className="h-full bg-gradient-to-b from-white/10 to-transparent">
                        <TextToVideoCard />
                    </Card>
                </motion.div>

                {/* Card 2: Style Transfer - Spans 1 col */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="h-full"
                >
                    <Card title="Style Transfer" icon={<Layers size={18} />} className="h-full">
                        <StyleTransferCard />
                    </Card>
                </motion.div>

                {/* Card 3: AI Director - Spans 1 col */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="h-full"
                >
                    <Card title="AI Director" icon={<Wand2 size={18} />} className="h-full bg-gradient-to-tl from-lumina-accent/20 to-transparent">
                        <DirectorCard />
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};
