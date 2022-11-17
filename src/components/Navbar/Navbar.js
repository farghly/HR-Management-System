import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authActions.action";
function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <aside>
      <div className="up text-center pb-5">
        <h1 className="logo mb-4 d-flex">
          <img src="https://via.placeholder.com/150" alt="" className="logo-img " />
        </h1>
        <div className="data">
          <img
            src="https://via.placeholder.com/150"
            alt=""
            className="profile-img mb-3"
          />
          <h4 className="mb-3">Thom Anderson</h4>
          <div className="main-btn d-flex gap-lg-2 gap-1 justify-content-center">
            <Link to="#" className="setting">
              <button onClick={handleLogout}>
                <i className="fa-solid fa-gear sett"></i>
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
      <div className="down">
        <ul className="links d-flex flex-column gap-lg-2 gap-1">
          <li className="d-flex gap-3 align-items-center">
            <Link to="/" className="nav-text">
              <i className="fa-solid fa-gauge"></i>
              <span>Dashboard</span>
            </Link>
          </li>
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
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button collapsed drpdwn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    <i className="fa-solid fa-sitemap"></i>
                    <span>Organization</span>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse "
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body d-flex flex-column gap-3">
                    <Link className="dropdown-item ms-4" title="Designation" to="/designation">
                      Designation
                    </Link>
                    <Link className="dropdown-item ms-4" to="/department">
                      Department
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
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
          <li className="d-flex gap-3 align-items-center">
            <Link to="/employees" className="nav-text" title="Employees">
              <i className="fa-solid fa-user-group"></i>
              <span>Employees</span>
            </Link>
          </li>

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
              <i className="fa-solid fa-briefcase" ></i> <span>Tasks</span>
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
