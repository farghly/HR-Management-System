import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/login/Login";
import Department from "./pages/organization/department/Department";
import Desgination from "./pages/organization/designation/Desgination";
import Register from "./pages/register/register";
import AddEmployee from "./pages/Employee/Addemployee";
import EditEmployee from "./pages/Employee/editEmployee";
import Employees from "./pages/Employee/Employee";
import Navbar from "./components/Navbar/Navbar";
// import store from "./redux/store";
import Task from "./pages/tasks/Task";
import AddTask from "./pages/tasks/AddTask";


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Provider store={store}> */}
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <div className="container-fluid main">
          <div class="parent d-flex">
            <div className="child-1">
              <Navbar />
            </div>
            <div class="child-2">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/department" element={<Department />} />
                {/* <Route path="/register" element={<Register />} /> */}
                <Route path="/employees" element={<Employees />} />
                <Route
                  path="/employees/addemployee"
                  element={<AddEmployee />}
                />
                <Route
                  path="/employees/editEmployee/:id"
                  element={<EditEmployee />}
                />
                <Route path="/designation/" element={<Desgination />} />
                <Route path="/tasks" element={<Task />} />
                <Route path="/tasks/addtask" element={<AddTask />} />
              </Routes>
            </div>
          </div>
        </div>
        {/* </Provider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
