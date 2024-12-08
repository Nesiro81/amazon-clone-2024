import axios from "axios";

const axiosInstance = axios.create({
  // backend locally using express server on port 5000
  // baseURL: "http://localhost:5000",
  // render hosted backend api
  baseURL: "https://amazon-backend-react-api.onrender.com",
});

export { axiosInstance };
