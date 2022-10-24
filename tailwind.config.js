/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            fontFamily: {
                body: "Inter",
            },
            colors: {
                primary: "#14b8a6",
                secondary: "#6b7280",
                dark: "#0f172a",
            },
        },
    },
    plugins: [],
};
