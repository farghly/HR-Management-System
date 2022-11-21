import "./navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authActions.action";
import { useState } from "react";
import { useEffect } from "react";
import { getEmployeeById } from "../../api/employeeAPI";
import logo from "./../../imgs/01.png";
function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({});
  // console.log(auth);
  useEffect(() => {
    getEmployeeById(auth.user.id).then((res) => {
      setUser(res.data.data.data);
    });
  }, []);
  const activeLink = "active-link-nav";
  const normalLink = "";
  return (
    <aside>
      <div className="up text-center pb-5">
        <h1 className="logo mb-4 d-flex">
          <img src={logo} alt="" className="logo-img" />
        </h1>
        <div className="data">
          <h4 class="mb-3">{user.name}</h4>
          <div class="main-btn d-flex gap-lg-3 gap-2 justify-content-center">
            <Link to="#" className="setting">
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
              <NavLink
                to="/"
                id="nav-text"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <i class="fa-solid fa-gauge"></i>
                <span>Dashboard</span>
              </NavLink>
            </li>
          )}
          {(user.role === "admin" || user.role === "hr") && (
            <>
              <li className="d-flex gap-3 align-items-center">
                <NavLink
                  id="nav-text"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  title="Designation"
                  to="/designation"
                >
                  <i class="fa-brands fa-creative-commons-nd"></i>
                  <span>Desgination</span>
                </NavLink>
              </li>
              <li className="d-flex  gap-3 align-items-center">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  id="nav-text"
                  title="Department"
                  to="/department"
                >
                  <i className="fa-solid fa-building"></i>
                  <span>Department</span>
                </NavLink>
              </li>
              {/* =======
              <li className="d-flex d-lg-none gap-3 align-items-center">
                <Link className="nav-text" title="Designation" to="/designation">
                  <i className="fa-solid fa-gauge"></i>
                </Link>
              </li>
              <li className="d-flex d-lg-none gap-3 align-items-center">
                <Link className="nav-text" title="Department" to="/department">
                  <i className="fa-solid fa-gauge"></i>
                </Link>
              </li>

              <li className="d-lg-block d-none">
                <div class="accordion" id="accordionPanelsStayOpenExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                      <button
                        class="accordion-button collapsed drpdwn"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        <i class="fa-solid fa-sitemap"></i>
                        <span>Organization</span>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      class="accordion-collapse collapse "
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div class="accordion-body d-flex flex-column gap-3">
                        <Link class="dropdown-item ms-4" to="/designation">
                          Designation
                        </Link>
                        <Link class="dropdown-item ms-4" to="/department">
                          Department
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              </li>
>>>>>>> Sedky */}
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
              <NavLink
                to="/employees"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                id="nav-text"
              >
                <i class="fa-solid fa-user-group"></i>
                <span>Employees</span>
              </NavLink>
            </li>
          )}

          {/* <li className="d-flex gap-3 align-items-center">
            <Link to="#" className="nav-text">
              <i className="fa-solid fa-briefcase"></i> <span>Attendance</span>
            </Link>
          </li> */}

          <li className="d-flex gap-3 align-items-center">
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              id="nav-text"
              title="Projects"
            >
              <i className="fa-solid fa-briefcase"></i> <span>Projects</span>
            </NavLink>
          </li>
          <li className="d-flex gap-3 align-items-center">
            <NavLink
              to="/tasks"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              id="nav-text"
              title="Tasks"
            >
              <i className="fa-solid fa-briefcase"></i> <span>Tasks</span>
            </NavLink>
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
