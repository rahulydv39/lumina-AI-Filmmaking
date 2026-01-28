import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioToggle: React.FC = () => {
    const [muted, setMuted] = useState(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const toggleAudio = () => {
        if (audioRef.current) {
            // Browsers block autoplay, so we need user interaction first
            if (muted) {
                audioRef.current.play().catch(e => console.log("Audio play failed", e));
                audioRef.current.volume = 0.5;
            } else {
                audioRef.current.pause();
            }
            setMuted(!muted);
        }
    };

    return (
        <button
            onClick={toggleAudio}
            className="fixed bottom-10 right-10 z-50 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all group"
        >
            {/* Simple Drone Sound URL */}
            <audio ref={audioRef} loop src="https://assets.mixkit.co/active_storage/sfx/2515/2515-preview.mp3" />

            {muted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6 text-lumina-cyan group-hover:scale-110 transition-transform" />}
        </button>
    );
};
