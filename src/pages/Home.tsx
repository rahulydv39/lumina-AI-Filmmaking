import React, { useState } from 'react';
import { Hero } from '../sections/Hero';
import { TiltCard } from '../components/TiltCard';
import { ShowcaseGallery } from '../sections/ShowcaseGallery';
import { AboutSection } from '../sections/AboutSection';
import { PricingSection } from '../sections/PricingSection';
import { ContactFooter } from '../sections/ContactFooter';
import { WelcomeOverlay } from '../components/WelcomeOverlay';
import { AudioManager } from '../components/AudioManager';
import { Footer } from '../components/Footer';
import { ArrowRight, Wand2, Activity, Aperture, Layers, Zap } from 'lucide-react';
import { CARD_IMAGE_1, CARD_IMAGE_2, CARD_IMAGE_3, CARD_IMAGE_4, CARD_IMAGE_5 } from '../mediaConfig';

// Simplified config, all valid videos
const homeCards = [
    {
        title: "Motion Brush",
        icon: <Wand2 />,
        desc: "Paint motion into static scenes.",
        colSpan: "col-span-1 md:col-span-2",
        height: "h-80",
        // The link is valid, but check if it actually plays in your browser!
        media: "/videos/project-1.mp4",
        isVideo: true
    },
    {
        title: "Lip Sync",
        icon: <Activity />,
        desc: "Perfect audio-visual alignment.",
        colSpan: "col-span-1",
        height: "h-80",
        media: CARD_IMAGE_2,
        isVideo: true
    },
    {
        title: "Camera Control",
        icon: <Aperture />,
        desc: "Direct every angle.",
        colSpan: "col-span-1",
        height: "h-96",
        media: CARD_IMAGE_3,
        isVideo: true
    },
    {
        title: "Generative Fill",
        icon: <Layers />,
        desc: "Expand your canvas infinitely.",
        colSpan: "col-span-1 md:col-span-2",
        height: "h-96",
        media: CARD_IMAGE_4,
        isVideo: true
    },
    {
        title: "Realtime Render",
        icon: <Zap />,
        desc: "Zero latency preview.",
        colSpan: "col-span-1 md:col-span-3",
        height: "h-56",
        media: CARD_IMAGE_5,
        isVideo: true
    },
];

export const Home: React.FC = () => {
    const [isStarted, setIsStarted] = useState(false);

    return (
        <div className="pt-20">
            {/* Welcome Gate */}
            {!isStarted && <WelcomeOverlay onStart={() => setIsStarted(true)} />}

            {/* Audio Engine */}
            <AudioManager autoPlay={isStarted} />

            <Hero />

            <section id="features" className="container mx-auto px-6 py-32">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter loading-none">
                        Limitless <br /> <span className="text-white/40">Creation.</span>
                    </h2>
                    <p className="max-w-md text-white/60 mt-6 md:mt-0">
                        Our suite of tools covers every aspect of the filmmaking process, from initial moodboarding to final color grading.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {homeCards.map((card, i) => (
                        <TiltCard key={i} className={`${card.colSpan} ${card.height} group relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden hover:border-lumina-cyan/50 transition-colors`}>
                            {/* Media Background */}
                            <div className="absolute inset-0">
                                {card.isVideo ? (
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="auto" // Added preload
                                        onError={(e) => console.error("Video failed to play", e)} // Debugging
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 scale-100 group-hover:scale-105 transition-transform duration-700"
                                    >
                                        <source src={card.media} type="video/mp4" />
                                    </video>
                                ) : (
                                    <img src={card.media} alt={card.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 scale-100 group-hover:scale-105 transition-transform duration-700" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                            </div>

                            <div className="absolute top-6 left-6 p-3 rounded-full bg-white/10 text-lumina-cyan backdrop-blur-md border border-white/10">
                                {card.icon}
                            </div>

                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="font-display text-2xl font-bold uppercase mb-2">{card.title}</h3>
                                <p className="text-sm text-white/70">{card.desc}</p>
                            </div>

                            <ArrowRight className="absolute top-6 right-6 w-5 h-5 text-white/80 group-hover:text-white transition-colors -rotate-45 group-hover:rotate-0 transform duration-300" />
                        </TiltCard>
                    ))}
                </div>
            </section>

            <ShowcaseGallery />
            <PricingSection />
            <AboutSection />
            <ContactFooter />
            <Footer />
        </div>
    );
};
