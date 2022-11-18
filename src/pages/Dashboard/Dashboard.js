import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDepartments } from "../../api/departmentAPI";
import { getDesignations } from "../../api/designationAPI";
import { getEmployees } from "../../api/employeeAPI";
// import Card from "../../components/Card/Card";
import "./dashboard.css";
function Dashboard() {
  const [getCountDepartment, setCountDepartment] = useState();
  const [getCountEmployee, setCountEmployee] = useState();
  const [getCountDesgination, setCountDesignation] = useState();
  useEffect(() => {
    getDepartments().then((getcount) => {
      setCountDepartment(getcount.data.data.data.length);
    });
    getEmployees().then((getcount) => {
      setCountEmployee(getcount.data.data.data.length);
    });
    getDesignations().then((getcount) => {
      setCountDesignation(getcount.data.data.data.length);
    });
  }, []);
  return (
    <>
      <div className="details-cards d-grid gap-4 pb-5">
        <div className="one d-flex gap-3 flex-column details-card">
          <div className="first-card gap-3 bg-white d-flex align-items-center p-3">
            <i className="fa-regular fa-user bgrebeccapurple"></i>
            <div className="card-text ms-2">
              <h5>{getCountEmployee} Employes</h5>
              <Link to="/employees">View Details</Link>
            </div>
          </div>
          <div className="second-card bgrebeccapurple text-center p-3 text-light">
            <div className="num">{getCountEmployee}</div>
            <div className="second-card-text">Former Employees</div>
          </div>
        </div>
        <div className="one d-flex gap-3 flex-column details-card">
          <div className="first-card gap-3 bg-white d-flex align-items-center p-3">
            <i className="fa-regular fa-file bglightblue"></i>
            <div className="card-text ms-2">
              <h5>{getCountDepartment} Departments</h5>
              <Link to="/department">View Details</Link>
            </div>
          </div>
          <div className="second-card bglightblue text-center p-3 text-light">
            <div className="num">{getCountDepartment}</div>
            <div className="second-card-text">Former Departments</div>
          </div>
        </div>
        <div className="one d-flex gap-3 flex-column details-card">
          <div className="first-card gap-3 bg-white d-flex align-items-center p-3">
            <i className="fa-regular fa-calendar bglightcoral"></i>
            <div className="card-text ms-2">
              <h5>{getCountDesgination} designations</h5>
              <Link to="/designation">View Details</Link>
            </div>
          </div>
          <div className="second-card bglightcoral text-center p-3 text-light">
            <div className="num">{getCountDesgination}</div>
            <div className="second-card-text">Former designations</div>
          </div>
        </div>
        {/* <div className="one d-flex gap-4 flex-column details-card">
          <div className="first-card bg-white d-flex align-items-center p-3">
            <i className="fa-solid fa-dollar-sign bglimegreen"></i>
            <div className="card-text ms-2">
              <h4>10 Employees</h4>
              <a to="/">View Details</a>
            </div>
          </div>
          <div className="second-card bglimegreen text-center p-3 text-light">
            <div className="num">0</div>
            <div className="second-card-text">Former Employees</div>
          </div>
        </div> */}
      </div>

      {/* start of table */}
      <h3>Running Project/s</h3>
      <div className="details-table running-table table-scrl">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="title">
                <a to="/">Mo</a>
              </td>
              <td className="start-date">Jan 2, 2022</td>
              <td className="end-date">Jan 10, 2022</td>
            </tr>
            <tr>
              <td className="title">
                <a to="/">Mo</a>
              </td>
              <td className="start-date">Jan 2, 2022</td>
              <td className="end-date">Jan 10, 2022</td>
            </tr>
            <tr>
              <td className="title">
                <a to="/">Mo</a>
              </td>
              <td className="start-date">Jan 2, 2022</td>
              <td className="end-date">Jan 10, 2022</td>
            </tr>
            <tr>
              <td className="title">
                <a to="/">Mo</a>
              </td>
              <td className="start-date">Jan 2, 2022</td>
              <td className="end-date">Jan 10, 2022</td>
            </tr>
            <tr>
              <td className="title">
                <a to="/">Mo</a>
              </td>
              <td className="start-date">Jan 2, 2022</td>
              <td className="end-date">Jan 10, 2022</td>
            </tr>
            <tr>
              <td className="title">
                <a to="/">Mo</a>
              </td>
              <td className="start-date">Jan 2, 2022</td>
              <td className="end-date">Jan 10, 2022</td>
            </tr>
            <tr>
              <td className="title">
                <a to="/">Mo</a>
              </td>
              <td className="start-date">Jan 2, 2022</td>
              <td className="end-date">Jan 10, 2022</td>
            </tr>
            <tr>
              <td className="title">
                <a to="/">Mo</a>
              </td>
              <td className="start-date">Jan 2, 2022</td>
              <td className="end-date">Jan 10, 2022</td>
            </tr>
            <tr>
              <td className="title">
                <a to="/">Mo</a>
              </td>
              <td className="start-date">Jan 2, 2022</td>
              <td className="end-date">Jan 10, 2022</td>
            </tr>
            <tr>
              <td className="title">
                <a to="/">Mo</a>
              </td>
              <td className="start-date">Jan 2, 2022</td>
              <td className="end-date">Jan 10, 2022</td>
            </tr>
            <tr>
              <td className="title">
                <a to="/">Mo</a>
              </td>
              <td className="start-date">Jan 2, 2022</td>
              <td className="end-date">Jan 10, 2022</td>
            </tr>
            <tr>
              <td className="title">
                <a to="/">Mo</a>
              </td>
              <td className="start-date">Jan 2, 2022</td>
              <td className="end-date">Jan 10, 2022</td>
            </tr>
            <tr>
              <td className="title">
                <a to="/">Mo</a>
              </td>
              <td className="start-date">Jan 2, 2022</td>
              <td className="end-date">Jan 10, 2022</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* end of table */}

      {/* <div className="details-cards d-grid gap-4 pb-5">
        <Card title="10 Employees" details='View Details' former='Former Employees' />
        <Card title="10 Employees" details='View Details' former='Former Employees' />
        <Card title="10 Employees" details='View Details' former='Former Employees' />
        <Card title="10 Employees" details='View Details' former='Former Employees' />
      </div> */}
    </>
  );
}

export default Dashboard;
