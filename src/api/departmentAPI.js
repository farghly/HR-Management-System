import axios from "axios";
import { API } from "../config";

const departmentAPI = axios.create({
  baseURL: "http://localhost:9090/api/v1/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  },
});

export const getDepartments = () => departmentAPI.get("departments");

export const getDepartmentById = (id) => departmentAPI.get(`departments/${id}`);

export const createDepartment = (newDepartment) =>
  departmentAPI.post("departments", newDepartment);

export const deleteDepartment = (id) =>
  departmentAPI.delete(`departments/${id}`);

export const editDepartment = (id, department) =>
  departmentAPI.patch(`departments/${id}`, department);


  /**
   * const [departments , setDepartment] = useState([])
   * 
   * useEffect(()=>{
   * getDepartments().then((res)=>{
   * 
   * setDepartment(res.data.data.data)
   * 
   * })
   *
   * },[])
   * 
   * 
   * 
   */