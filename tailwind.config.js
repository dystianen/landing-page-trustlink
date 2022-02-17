const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                'xss': '320px',
                'xs': '480px',
                'tall': { raw: '(min-width: 1280px) and (max-height: 768px)'},
                'short': { raw: '(min-width: 1280px) and (max-height: 660px)'},
            },
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


