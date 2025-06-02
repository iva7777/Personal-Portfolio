export default {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
    ],
    theme: {
        extend: {
            colors: {
                deepPurple: '#6a0dad',
                hotpink: '#c54b8c',
                violet: '#b284be',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}
