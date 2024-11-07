import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d3bd06b051d941ba94b88b85b316511a",
  },
});

