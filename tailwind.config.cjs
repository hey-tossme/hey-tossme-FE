/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#ec7357",
                secondary: "#fdd692",
                dark: "#754f44",
                light: "#fbffb9",
                "color-gray-100": "#f2f2f2",
                "color-gray-700": "#474747",
                "color-gray-800": "#333333",
                "dark-bg-color" : "rgba(71, 71, 71, 0.8)",
            },
        },
    },
    plugins: [require("daisyui")],
};
