module.exports = {
    content: [
        "./*.{html,js}",
        "./components/*.{html,js}",
    ],
    theme: {
        extend: {
            animation: {
                fade: 'fade 1s ease-out',
            },
            keyframes: {
                fade: {
                  '0%': {opacity: '0', transform: 'translateY(10px)'},
                  '100%': {opacity: '1', transform: 'translateY(0px)'},
                }
            },
        },
    },
    plugins: [],
}
