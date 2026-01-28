import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
            style={{
                background: 'white',
                boxShadow: '0 0 20px 2px rgba(255, 255, 255, 0.5)',
            }}
            animate={{
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
            }}
            transition={{
                type: 'spring',
                damping: 30,
                stiffness: 200,
                mass: 0.5,
            }}
        />
    );
};
