/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'lg': {'max': '1026px'},
        },
        extend: {
            colors: {
                'hd-orange': '#e55511',
                'hd-dark-blue': '#0042c6',
            },
        },
        fontFamily: {
            sans: ["Oxygen", "sans-serif"],
        },
    },
    plugins: [],
};
