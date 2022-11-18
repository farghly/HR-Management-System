import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authActions.action";
import { useState } from "react";
import { useEffect } from "react";
import { getEmployeeById } from "../../api/employeeAPI";
function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({});
  console.log(auth);
  useEffect(() => {
    getEmployeeById(auth.user.id).then((res) => {
      setUser(res.data.data.data);
    });
  }, []);
  return (
    <aside>
      <div className="up text-center pb-5">
        <div className="logo-img mb-4 d-flex">
          {/* <img src={logo} alt="" className="logo-img " /> */}
        </div>
        <div className="data">
          <h4 class="mb-3">
            {user.firstName} {user.lastName}
          </h4>
          <div class="main-btn d-flex gap-lg-3 gap-2 justify-content-center">
            <Link to="#" class="setting">
              <button>
                <i class="fa-solid fa-gear sett"></i>
              </button>
            </Link>
            <Link to="#" className="logOut">
              <button onClick={handleLogout}>
                <i className="fa-solid fa-power-off log-out"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div class="down">
        <ul class="links d-flex flex-column gap-lg-2 gap-1">
          {(user.role === "admin" || user.role === "hr") && (
            <li class="d-flex gap-3 align-items-center">
              <Link to="/" class="nav-text">
                <i class="fa-solid fa-gauge"></i>
                <span>Dashboard</span>
              </Link>
            </li>
          )}
          {(user.role === "admin" || user.role === "hr") && (
            <>
              <li className="d-flex gap-3 align-items-center">
                <Link
                  className="nav-text"
                  title="Designation"
                  to="/designation"
                >
                  <i class="fa-brands fa-creative-commons-nd"></i>
                  <span>Desgination</span>
                </Link>
              </li>
              <li className="d-flex  gap-3 align-items-center">
                <Link className="nav-text" title="Department" to="/department">
                  <i className="fa-solid fa-building"></i>
                  <span>Department</span>
                </Link>
              </li>
            </>
          )}
          {/* <li>
            <button
              className="btn btn-secondary dropdown-toggle drpdwn"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-solid fa-sitemap"></i>
              <span>Organization</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link className="dropdown-item" to="/department">
                  Department
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/designation">
                  Designation
                </Link>
              </li>
            </ul>
          </li> */}

          {(user.role === "admin" || user.role === "hr") && (
            <li class="d-flex gap-3 align-items-center">
              <Link to="/employees" class="nav-text">
                <i class="fa-solid fa-user-group"></i>
                <span>Employees</span>
              </Link>
            </li>
          )}

          {/* <li className="d-flex gap-3 align-items-center">
            <Link to="#" className="nav-text">
              <i className="fa-solid fa-briefcase"></i> <span>Attendance</span>
            </Link>
          </li> */}

          <li className="d-flex gap-3 align-items-center">
            <Link to="/projects" className="nav-text" title="Projects">
              <i className="fa-solid fa-briefcase"></i> <span>Projects</span>
            </Link>
          </li>
          <li className="d-flex gap-3 align-items-center">
            <Link to="/tasks" className="nav-text" title="Tasks">
              <i className="fa-solid fa-briefcase"></i> <span>Tasks</span>
            </Link>
          </li>

          {/* <li className="d-flex gap-3 align-items-center">
            <a href="#" className="nav-text">
              <i className="fa-solid fa-receipt"></i>
              <span>Payroll</span>
            </a>
          </li> */}
          {/* <li className="d-flex gap-3 align-items-center">
            <a href="#" className="nav-text">
              <i className="fa-solid fa-hurricane"></i>
              <span>Loan</span>
            </a>
          </li> */}
          {/* <li className="d-flex gap-3 align-items-center">
            <Link to="/login" className="nav-text">
              <i className="fa-solid fa-right-from-bracket"></i>
              <span>Leave</span>
            </Link>
          </li> */}
        </ul>
      </div>
    </aside>
  );
}

export default Navbar;
