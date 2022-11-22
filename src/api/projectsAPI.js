import axios from "axios";

const projectAPI = axios.create({
  baseURL: "http://localhost:9090/api/v1/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  },
});

export const getProjects = () => projectAPI.get("projects");

export const getProjectsBySearch = (key) =>
  projectAPI.get(`projects/search/${key}`);

export const getProjectById = (id) => projectAPI.get(`projects/${id}`);

export const createProject = (newProject) =>
  projectAPI.post("projects", newProject);

export const deleteProject = (id) => projectAPI.delete(`projects/${id}`);

export const editProject = (id, project) =>
  projectAPI.patch(`projects/${id}`, project);
