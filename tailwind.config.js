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
                'tall': { raw: '(min-width: 1280px) and (min-height: 768px)'},
                'short': { raw: '(min-width: 1280px) and (max-height: 760px)'},
                'xshort': { raw: '(min-width: 1280px) and (max-height: 620px)'},
                'tablet': '769px',
                'mobilel': '426px',
                'mobilem': '376px',
                'mobiles': '321px',
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
                '98': '26rem',
                '100': '28rem',
                '104': '32rem',
                '112': '42rem',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    important: '#tailwind-selector',
};


