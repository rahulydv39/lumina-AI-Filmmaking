import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'outline';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
    // Both variants now share the "Glass" core aesthetic requested
    const baseStyles = "relative px-8 py-3 rounded-full font-medium tracking-wide uppercase text-sm transition-all duration-300 overflow-hidden group border";

    // Primary has slightly more presence, but still glass
    const variants = {
        primary: "bg-white/5 backdrop-blur-md border-white/20 text-white hover:bg-white/10 hover:border-white/40",
        outline: "bg-transparent border-white/10 text-white hover:bg-white/5 hover:border-white/30"
    };

    return (
        <motion.button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
            {/* Subtle Gradient Glow on Hover */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
    );
};
