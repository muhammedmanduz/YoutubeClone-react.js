/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    //tailwind renk paletini genişletme
    extend: {
      //kendi rengimizi ekliyoruz
      colors: {
        gri: "#272727",
      },
    },
  },
  plugins: [],
};
