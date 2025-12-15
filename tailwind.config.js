/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            colors: {
                brand: {
                    blue: '#2563EB',
                    dark: '#111827',
                    yellow: '#FACC15',
                }
            }
        },
    },
    plugins: [],
}
