/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    /*screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },*/
    /* The colors key allows you to customize the global color palette for your project */
    /*colors: {
      'white': '#ffffff',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'sky-100': '#EBEDF0',
      'sky-110': '#A4A4A4',
      'sky-120': '#7B7B7B',
      'sky-130': '#37474F',
      'sky-150': '#373737',
      'sky-200' : '#000FBE',
    },*/
    /*fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },*/
    extend: {
      boxShadow: {
        sky1: "0px 1px 24px 1px rgba(2, 2, 2, 0.1)",
      },
      zIndex: {
        '999': '999',
        '900': '900',
      },
      colors: {
        "sky-black": {
          100: "#000000",
          110: "#EBEDF0",
          120: "#37474F",
          130: "#373737",
          140: "#3C3C3C",
          200: "#3B424A",
          300: "#828282",
        },
        "sky-gray": {
          100: "#A4A4A4",
          110: "#7B7B7B",
          120: "#6E6E6E",
          130: "#9D9D9D",
          140: "#CDCDCD",
          200: "#9D9D9D80",
          300: "#D9D9D9",
          500: "#E0E0E0",
        },
        "sky-blue": {
          100: "#000FBE",
        },
        "sky-white": {
          100: "#FFFFFF",
          110: "#FBFBFB",
          300: "#EAEAEA",
        },
        "sky-red": {
          100: "#D80027",
          101: "#FF0000",
        },
        "sky-spectrum": {
          100: "#FF9E00",
          101: "#FF0000",
          102: "#B5007D",
          103: "#21429C",
          104: "#0071FF",
        },
        "sky-gradient": {
          navSuperior:
            "linear-gradient(90deg, #FF9E00 0%, #FF0000 33.93%, #B5007D 58.36%, #21429C 82.54%, #0071FF 100%)",
          blue: "linear-gradient(180deg, #000FBE 0%, #3D3DE0 50%, #000FBE 57.81%, #000FBE 100%)",
          spectrum:
            "linear-gradient(90deg, #FF9E00 100%, #FF0000 100%, #B5007D 100%, #21429C 100%, #0071FF 100%)",
        },
        primaryBack: '#000FBE',
        secondary: '#6E6E6E',
        tertiary: '#F7F7F7',
        cuaternary: '#CDCDCD',
        quinary: '#7B7B7B',
        senary: '#F2F2F2',
      },
      /*textColor:{
        'sky-200' : '#000FBE',
        'sky-737': '#373737',
        'sky-B7B': '#7B7B7B',
      },*/
      backgroundColor: {
        "sky-white": {
          100: "#FFFFFF",
          110: "#FBFBFB",
          200: "#EEEEEE",
          300: "#EAEAEA",
        },
        "sky-black": {
          200: "#3B424A",
        },
        "sky-blue": {
          100: "#000FBE",
          110: "#3D3DE0",
          200: "#7782FF",
        },
        "sky-gray": {
          100: "#A4A4A4",
          110: "#F2F2F2",
          120: "#6E6E6E",
          130: "#9D9D9D",
          140: "#CDCDCD",
          150: "#F8F8F8",
          160: "#F7F7F7",
          170: "#F0F0F0",
          200: "#B5B5B5",
        },
        "sky-green": {
          100: "#0B8B00",
        },
        "sky-linear-grad-consumo":
          "linear-gradient(81.34deg, #FF00A5 7.59%, #FF0A50 53.2%, #FF6400 94.29%)",
        "sky-linear-grad-card-paqBti":
          "linear-gradient(270.67deg, #FFFFFF 9.15%, rgba(255, 255, 255, 0) 99.24%)",
        "sky-linear-grad-":
          "linear-gradient(81.34deg, #FF00A5 7.59%, #FF0A50 53.2%, #FF6400 94.29%)",
      },
      fontFamily: {
        SkyText: 'SkyText',
        sans: ['SkyText', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        // blue linear gradient to b
        'blue-gradient': 'linear-gradient(180deg, #000fbe 0%, #3d3de0 50%, #000fbe 57.81%, #000fbe 100%)',
        // colorful linear gradient to r
        'colorful-gradient': 'linear-gradient(90deg, #ff9e00 0%, #ff0000 33.93%, #b5007d 58.36%, #21429c 82.54%, #0071ff 100%)',
        "select-icon": "url('/src/assets/vector/custom-select-icon.svg')",
        "close-icon": "url('/src/assets/vector/custom-close-icon.svg')",
        'download-icon': "url('/src/assets/vector/custom-download-icon.svg')",
        'banner-btgve': "url('/src/assets/images/placeholder.png')"
      },
      backgroundPosition: {
        "pos-select-icon": "right 0.875rem center",
        "pos-close-icon": "center",
      },
      animation: {
        'showFromBottom5': 'fadeinBottom 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 4s, fadeoutBottom 0.5s 4.5s',
        'showFromTop5': 'fadeinTop 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 4s, fadeoutTop 0.5s 4.5s',
        'showFromBottom10': 'fadeinBottom 0.5s, expand 0.5s 0.5s, stay 8s 1s, shrink 0.5s 9s, fadeoutBottom 0.5s 9.5s',
        'showFromTop10': 'fadeinTop 0.5s, expand 0.5s 0.5s, stay 8s 1s, shrink 0.5s 9s, fadeoutTop 0.5s 9.5s',
        'showFromBottom15': 'fadeinBottom 0.5s, expand 0.5s 0.5s, stay 13s 1s, shrink 0.5s 14s, fadeoutBottom 0.5s 14.5s',
        'showFromTop15': 'fadeinTop 0.5s, expand 0.5s 0.5s, stay 13s 1s, shrink 0.5s 14s, fadeoutTop 0.5s 14.5s',
        'fadeInRight': 'fadeInRight 0.3s ease-in forwards',
        'indeterminateAnimation': 'indeterminateAnimation 1s infinite linear',
        'LogoAffixed': 'LogoModify 2.5s linear infinite',
        'LoaderSpinCircle': 'spin 2.5s linear infinite',
        'reverse-spin': 'reverse-spin 1s linear infinite',
      },
      keyframes: {
        fadeInRight: {
          '0%': { right: '0', opacity: '0' },
          '100%': { right: '21.875rem', opacity: '1' },
        },
        fadeinTop: {
          '0%': { top: '0', opacity: '0' },
          '100%': { top: '1.875rem', opacity: '1' },
        },
        fadeinBottom: {
          '0%': { bottom: '0', opacity: '0' },
          '100%': { bottom: '1.875rem', opacity: '1' },
        },
        expand: {
          '0%': { 'min-width': '3.125rem' },
          '100%': { 'min-width': '21.875rem', 'max-width': 'fit-content', 'overflow': 'visible', 'max-height': '9.125rem' },
        },
        stay: {
          '0%': { 'min-width': '21.875rem', 'max-width': 'fit-content', 'max-height': '9.125rem', 'overflow': 'visible', 'width': 'fit-content' },
          '100%': { 'min-width': '21.875rem', 'max-width': 'fit-content', 'max-height': '9.125rem', 'overflow': 'visible', 'width': 'fit-content' },
        },
        shrink: {
          '0%': { 'min-width': '21.875rem' },
          '100%': { 'min-width': '3.125rem' },
        },
        fadeoutBottom: {
          '0%': { opacity: '1', bottom: '1.875rem' },
          '100%': { opacity: '0', bottom: '3.75rem' },
        },
        fadeoutTop: {
          '0%': { opacity: '1', top: '1.875rem' },
          '100%': { opacity: '0', top: '3.75rem' },
        },
        indeterminateAnimation: {
          '0%': { transform: 'translateX(0) scaleX(0)' },
          '40%': { transform: 'translateX(0) scaleX(0.4)' },
          '100%': { transform: 'translateX(100%) scaleX(0.5)' }
        },
        LogoModify: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          }
        },
      }
      /*spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }*/
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
  darkMode: "class",
}
