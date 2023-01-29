/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                slide: {
                    "0%, 33%": { transform: "translate(-0%)" },
                    "39%, 73%": { transform: "translate(-100%)" },
                    "89%, 93%": { transform: "translate(-200%)" },
                    "100%": { transform: "translate(-0%)" },
                },
            },
            animation: {
                slide: "slide 20s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};