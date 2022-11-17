import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/login/Login";
import Department from "./pages/organization/department/Department";
import Desgination from "./pages/organization/designation/Desgination";
import Register from "./pages/register/register";
import AddEmployee from "./pages/Employee/Addemployee";
import EditEmployee from "./pages/Employee/editEmployee";
import Employees from "./pages/Employee/Employee";
import Navbar from "./components/Navbar/Navbar";
import store from "./redux/store";
import { setAuthToken } from "./utils/setAuthToken";
import jwtDecode from "jwt-decode";
import { setCurrentUser, logout } from "./redux/auth/authActions.action";
import Task from "./pages/tasks/task";
import AddTask from "./pages/tasks/addtask";
import Project from './pages/projects/project'
import AddProject from './pages/projects/addproject'
import { getEmployeeById } from "./api/employeeAPI";
import { useState, useEffect } from "react";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwtDecode(token);
  console.log(setCurrentUser(decoded));
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/login";
  }
}

function App() {
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({});
  console.log(auth);
  useEffect(() => {
    getEmployeeById(auth.user.id).then((res) => {
      setUser(res.data.data.data);
    });
  }, []);
  console.log(user);

  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          {!auth.isAuthenticated && <Login />}
          {auth.isAuthenticated && (
            <div className="container-fluid main">
              <div class="parent d-flex">
                <div className="child-1">
                  <Navbar />
                </div>
                <div class="child-2">
                  {auth.isAuthenticated && (
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      {user.role === "admin" ? (
                        <Route path="/department" element={<Department />} />
                      ) : (
                        <Route
                          path="/department"
                          element={<Navigate replace to="/" />}
                        />
                      )}
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
                      <Route path="/tasks/" element={<Task />} />
                      <Route path="/tasks/addtask" element={<AddTask />} />

                      <Route path="/projects/" element={<Project />} />
                      <Route
                        path="/projects/addproject"
                        element={<AddProject />}
                      />
                    </Routes>
                  )}
                </div>
              </div>
            </div>
          )}
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
