import Card from "../../components/Card/Card";
import "./dashboard.css";
function Dashboard() {
  return (
    <>
      <div className="details-cards d-grid gap-4 pb-5">
        <div className="one d-flex gap-4 flex-column details-card">
          <div className="first-card bg-white d-flex align-items-center p-3">
            <i className="fa-regular fa-user bgrebeccapurple"></i>
            <div className="card-text ms-2">
              <h4>10 Employes</h4>
              <a to="/">View Details</a>
            </div>
          </div>
          <div className="second-card bgrebeccapurple text-center p-3 text-light">
            <div className="num">0</div>
            <div className="second-card-text">Former Employees</div>
          </div>
        </div>
        <div className="one d-flex gap-4 flex-column details-card">
          <div className="first-card bg-white d-flex align-items-center p-3">
            <i className="fa-regular fa-file bglightblue"></i>
            <div className="card-text ms-2">
              <h4>10 Employes</h4>
              <a to="/">View Details</a>
            </div>
          </div>
          <div className="second-card bglightblue text-center p-3 text-light">
            <div className="num">0</div>
            <div className="second-card-text">Former Employees</div>
          </div>
        </div>
        <div className="one d-flex gap-4 flex-column details-card">
          <div className="first-card bg-white d-flex align-items-center p-3">
            <i className="fa-regular fa-calendar bglightcoral"></i>
            <div className="card-text ms-2">
              <h4>10 Employees</h4>
              <a to="/">View Details</a>
            </div>
          </div>
          <div className="second-card bglightcoral text-center p-3 text-light">
            <div className="num">0</div>
            <div className="second-card-text">Former Employees</div>
          </div>
        </div>
        <div className="one d-flex gap-4 flex-column details-card">
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
        </div>
      </div>

      {/* start of table */}
      <h3>Running Project/s</h3>
      <div className="details-table">
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
          </tbody>
        </table>
      </div>
      {/* end of table */}

      <div className="details-cards d-grid gap-4 pb-5">
        <Card title="10 Employees" details='View Details' former='Former Employees' />
        <Card title="10 Employees" details='View Details' former='Former Employees' />
        <Card title="10 Employees" details='View Details' former='Former Employees' />
        <Card title="10 Employees" details='View Details' former='Former Employees' />
      </div>
    </>
  );
}

export default Dashboard;
