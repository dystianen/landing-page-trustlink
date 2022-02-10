const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                orange: '#FF6B00',
                secondary: '#E95436',
                grey: '#4F4F4F',
                profile: '#989898'
            },
            spacing: {
                '26': '6.5rem',
                '30': '7.5rem',
                '100': '28rem',
                '104': '32rem'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    important: '#tailwind-selector',
};


