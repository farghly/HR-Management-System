import "./styles.css";
import Navbar from "../Navbar/Navbar";
function Employees() {
  return (
    <>
      <div class="container">
        <a
          href="/employees/addemployee"
          class="btn btn-primary my-3 employee-list"
        >
          Add Employee
        </a>
        <h3 class="p-3 ps-4">Employee List</h3>
        <div class="ser d-flex gap-2">
          <h4>Search:</h4>
          <input type="search" />
        </div>
        <div class="tab p-3">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Employee Name</th>
                <th scope="col">PIN</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
                <th scope="col">User Type</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="employee-name">Mo</td>
                <td class="employee-pin">911</td>
                <td class="employee-email">mo911@mo.com</td>
                <td class="employee-contact">011111</td>
                <td class="employee-type">Super Admin</td>
                <td>
                  <button class="edit">
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td class="employee-name">Am</td>
                <td class="employee-pin">121</td>
                <td class="employee-email">am121@am.com</td>
                <td class="employee-contact">012111111</td>
                <td class="employee-type">Employee</td>
                <td>
                  <button class="edit">
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Employees;
