import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/login/Login";
import Department from "./pages/organization/department/Department";
import Desgination from "./pages/organization/designation/Desgination";
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

import Project from "./pages/projects/project";
import AddProject from "./pages/projects/addproject";
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
              <div class="parent d-flex gap-lg-3 gap-2 justify-content-between">
                <div className="child-1">
                  <Navbar />
                </div>
                <div class="child-2">
                  {auth.isAuthenticated && (
                    <Routes>
                      {user.role === "admin" || user.role === "hr" ? (
                        <Route path="/" element={<Dashboard />} />
                      ) : (
                        <Route
                          path="/"
                          element={<Navigate replace to="/tasks" />}
                        />
                      )}

                      {user.role === "admin" || user.role === "hr" ? (
                        <Route
                          path="/department"
                          element={<Department user={user} />}
                        />
                      ) : (
                        <Route
                          path="/department"
                          element={<Navigate replace to="/tasks" />}
                        />
                      )}

                      {user.role === "admin" ? (
                        <Route path="/employees" element={<Employees />} />
                      ) : (
                        <Route
                          path="/employees"
                          element={<Navigate replace to="/tasks" />}
                        />
                      )}
                      {user.role === "admin" || user.role === "hr" ? (
                        <Route
                          path="/employees/addemployee"
                          element={<AddEmployee />}
                        />
                      ) : (
                        <Route
                          path="/employees/addemployee"
                          element={<Navigate replace to="/tasks" />}
                        />
                      )}
                      {user.role === "admin" || user.role === "hr" ? (
                        <Route
                          path="/employees/editEmployee/:id"
                          element={<EditEmployee />}
                        />
                      ) : (
                        <Route
                          path="//employees/editEmployee/:id"
                          element={<Navigate replace to="/tasks" />}
                        />
                      )}
                      {user.role === "admin" || user.role === "hr" ? (
                        <Route path="/designation/" element={<Desgination />} />
                      ) : (
                        <Route
                          path="/designation"
                          element={<Navigate replace to="/tasks" />}
                        />
                      )}
                      <Route path="/tasks/" element={<Task />} />
                      {user.role === "admin" ? (
                        <Route path="/tasks/addtask" element={<AddTask />} />
                      ) : (
                        <Route
                          path="/tasks/addtask"
                          element={<Navigate replace to="/tasks" />}
                        />
                      )}

                      <Route path="/projects/" element={<Project />} />
                      {user.role === "admin" ? (
                        <Route
                          path="/projects/addproject"
                          element={<AddProject />}
                        />
                      ) : (
                        <Route
                          path="/projects/addproject"
                          element={<Navigate replace to="/tasks" />}
                        />
                      )}
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
