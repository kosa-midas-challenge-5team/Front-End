import axios from "axios";

const customAxios = axios.create({
  baseURL: "http://paillo.iptime.org",
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default customAxios;
