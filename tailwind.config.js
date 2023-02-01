const colors = require('tailwindcss/colors');


module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
          'montserrat' : ['"Montserrat"'],
          'gochi-hand' : "'Gochi Hand', cursive",
        },
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
            height: {
                'quarter': '25vh',
                'half': '50vh',
                'sixth': '60vh',
                'three-q': '75vh'
            },
            width: {
                '110' : '110%'
            },
            colors: {
                orange: '#FF6B00',
                secondary: '#E95436',
                grey: '#4F4F4F',
                profile: '#989898',
                footer: '#04204D'
            },
            spacing: {
                '26': '6.5rem',
                '30': '7.5rem',
                '98': '26rem',
                '100': '28rem',
                '104': '32rem',
                '112': '42rem',
            },
            backgroundImage:()=>({
                'banner' : "url('/assets/banner_bg.svg')",
                'banner-orange': "url('/assets/v2/section-1/banner-1.jpg')",
                'banner-blue': "url('/assets/v2/section-1/banner-2.jpg')",
                'button-puple': "linear-gradient(180deg, #4056A9 9.27%, #1A2E6C 87.76%)",
                'button-orange': "linear-gradient(180deg, #FFA467 8.85%, #FF7113 100%)"
            })
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    important: '#tailwind-selector',
};


