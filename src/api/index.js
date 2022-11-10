import axios from 'axios';

const departmentUrl = 'http://localhost:9090/api/v1/department';

export const fetchDepartments = () => axios.get(departmentUrl);
export const deleteDepartment = (id) => axios.delete(`${departmentUrl}/${id}`);