/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            screens: {
                // Mobile devices
                'xs': '320px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
                
                // iPad specific breakpoints
                'ipad': '768px',
                'ipad-lg': '1024px',
                'ipad-pro': '1024px',
                'ipad-pro-lg': '1366px',
                
                // iPad Pro orientations
                'ipad-portrait': { 'raw': '(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)' },
                'ipad-landscape': { 'raw': '(min-width: 1024px) and (max-width: 1366px) and (orientation: landscape)' },
                'ipad-pro-portrait': { 'raw': '(min-width: 1024px) and (max-width: 1366px) and (orientation: portrait)' },
                'ipad-pro-landscape': { 'raw': '(min-width: 1366px) and (max-width: 2048px) and (orientation: landscape)' },
                
                // Desktop and large screens
                'desktop': '1440px',
                'wide': '1920px',
                'ultrawide': '2560px',
            },
            fontFamily: {
                'sf': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'system-ui', 'sans-serif'],
                'sf-mono': ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'monospace'],
            },
            fontSize: {
                // Responsive font sizes for different devices
                'xs': ['0.75rem', { lineHeight: '1rem' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'base': ['1rem', { lineHeight: '1.5rem' }],
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1' }],
                '6xl': ['3.75rem', { lineHeight: '1' }],
                '7xl': ['4.5rem', { lineHeight: '1' }],
                '8xl': ['6rem', { lineHeight: '1' }],
                '9xl': ['8rem', { lineHeight: '1' }],
                '10xl': ['10rem', { lineHeight: '1' }],
                '11xl': ['12rem', { lineHeight: '1' }],
                '12xl': ['14rem', { lineHeight: '1' }],
                '13xl': ['16rem', { lineHeight: '1' }],
                '14xl': ['18rem', { lineHeight: '1' }],
                '15xl': ['20rem', { lineHeight: '1' }],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
                '144': '36rem',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};
