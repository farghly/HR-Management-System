import axios from "axios";

const employeeAPI = axios.create({
  baseURL: "http://localhost:9090/api/v1/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  },
});

export const getEmployees = () => employeeAPI.get(`employees`);

export const getEmployeesBySearch = (key) =>
  employeeAPI.get(`employees/search/${key}`);

export const getEmployeeById = (id) => employeeAPI.get(`employees/${id}`);

export const createEmployee = (newEmployee) =>
  employeeAPI.post("employees", newEmployee);

export const deleteEmployee = (id) => employeeAPI.delete(`employees/${id}`);

export const editEmployee = (id, employee) => {
  console.log(id, employee);
  employeeAPI.patch(`employees/${id}`, employee);
};
