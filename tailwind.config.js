/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                lumina: {
                    bg: "#050505",
                    text: "#F5F5F5",
                    accent: "#7C3AED", // Electric Violet
                    cyan: "#22D3EE",
                    magenta: "#D946EF",
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Syne', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-gradient': 'linear-gradient(to right, #000000, #1a1a2e)',
            },
            animation: {
                'slow-spin': 'spin 20s linear infinite',
            }
        },
    },
    plugins: [],
}
