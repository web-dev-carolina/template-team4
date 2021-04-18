import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:27017/api/",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});