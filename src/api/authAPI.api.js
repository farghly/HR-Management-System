import axios from "axios";

const loginAPI = axios.create({
  baseURL: "http://localhost:9090/api/v1/employees/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  },
});

export const loginApi = (employee) => loginAPI.post("login", employee);
