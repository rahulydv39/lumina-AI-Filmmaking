import React from 'react';
import { CustomCursor } from '../components/CustomCursor';
import { Navbar } from '../components/Navbar';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="relative min-h-screen font-sans text-white overflow-x-hidden selection:bg-lumina-accent selection:text-white">
            {/* 1. Global Background (now simpler) */}
            <div className="fixed inset-0 -z-50 pointer-events-none bg-[#050505]">
                {/* Cinematic Overlay (Dimmer) */}
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
                {/* Grain Texture */}
                <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            {/* 2. Global UI Elements */}
            <CustomCursor />
            <Navbar />

            {/* 3. Page Content */}
            <main className="relative z-10 w-full">
                {children}
            </main>
        </div>
    );
};
