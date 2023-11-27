module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      title: ["Anton", "sans-serif"],
      body: ["Poppins", "sans-serif"],
      round:["Poiret One","sans-serif"],
      dela:["Dela Gothic One", "san-serif"],
      dorsa:["Dorsa","serif"],
      museoModerno:["MuseoModerno","serif"]
    },
    extend: {
      colors: {
        customRed: "#ee3131",
        customBlack: "#171716",
        customYellow:'#E5C43C'
      },
      after: ["hover"],
      before: ["hover"],
    },
  },
  plugins: [],
};
