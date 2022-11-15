import axios from "axios";

const taskAPI = axios.create({
  baseURL: "http://localhost:9090/api/v1/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  },
});

export const getTasks = () => taskAPI.get("tasks");

export const getTaskById = (id) => taskAPI.get(`tasks/${id}`);

export const createTask = (newTask) => taskAPI.post("tasks", newTask);

export const deleteTask = (id) => taskAPI.delete(`tasks/${id}`);

export const editTask = (id, task) => taskAPI.patch(`tasks/${id}`, task);
