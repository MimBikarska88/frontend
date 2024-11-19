import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5193/api/",
});
export default client;
