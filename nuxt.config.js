export default {
    buildModules: [
      '@nuxt/postcss8',
      // ...
    ],
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
          },
        },
    },
    css: [
        '@/css/input.css',
    ],
}