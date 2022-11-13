import axios from "axios";

const designationAPI = axios.create({
  baseURL: "http://localhost:9090/api/v1/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  },
});

export const getDesignations = () => designationAPI.get("designation");

export const getDesignationById = (id) =>
  designationAPI.get(`designation/${id}`);

export const createDesignation = (newDesignation) =>
  designationAPI.post("designation", newDesignation);

export const deleteDesignation = (id) =>
  designationAPI.delete(`designation/${id}`);

export const editDesignation = (id, designation) =>
  designationAPI.patch(`designation/${id}`, designation);
