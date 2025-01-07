import axios from "axios";

const api=axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    "x-rapidapi-key": "c02171dccamshc9d34be56b653cap167ddcjsnb444fd47924d",
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
});

export default api;

