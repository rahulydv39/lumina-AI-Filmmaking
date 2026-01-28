import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { BG_MUSIC_URL } from '../mediaConfig';

interface AudioManagerProps {
    autoPlay?: boolean;
}

export const AudioManager: React.FC<AudioManagerProps> = ({ autoPlay = false }) => {
    const [muted, setMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (autoPlay && audioRef.current) {
            audioRef.current.volume = 0.2;
            audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
        }
    }, [autoPlay]);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (muted) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
            setMuted(!muted);
        }
    };

    return (
        <>
            <audio ref={audioRef} loop src={BG_MUSIC_URL} />

            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                onClick={toggleAudio}
                className="fixed bottom-10 right-10 z-[60] p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all group"
            >
                {muted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6 text-lumina-cyan group-hover:scale-110 transition-transform" />}
            </motion.button>
        </>
    );
};
