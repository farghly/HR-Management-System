import "./navbar.css";
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <aside>
      <div class="up text-center pb-5">
        <h1 class="logo mb-4 d-flex">
          <img src="https://via.placeholder.com/150" alt="" class="logo-img " />
        </h1>
        <div class="data">
          <img
            src="https://via.placeholder.com/150"
            alt=""
            class="profile-img mb-3"
          />
          <h4 class="mb-3">Thom Anderson</h4>
          <div class="btns d-flex gap-lg-3 gap-2 justify-content-center">
            <Link to="#" class="setting">
              <i class="fa-solid fa-gear sett"></i>
            </Link>
            <Link to="#" class="logOut">
              <i class="fa-solid fa-power-off log-out"></i>
            </Link>
          </div>
        </div>
      </div>
      <div class="down">
        <ul class="links d-flex flex-column gap-lg-2 gap-1">
          <li class="d-flex gap-3 align-items-center">
            <Link to="/" class="nav-text">
              <i class="fa-solid fa-gauge"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
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
          {/* <li>
            <button
              class="btn btn-secondary dropdown-toggle drpdwn"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa-solid fa-sitemap"></i>
              <span>Organization</span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link class="dropdown-item" to="/department">
                  Department
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/designation">
                  Designation
                </Link>
              </li>
            </ul>
          </li> */}
          <li class="d-flex gap-3 align-items-center">
            <Link to="/employees" class="nav-text">
              <i class="fa-solid fa-user-group"></i>
              <span>Employees</span>
            </Link>
          </li>
          <li class="d-flex gap-3 align-items-center">
            <Link to="#" class="nav-text">
              <i class="fa-solid fa-briefcase"></i> <span>Attendance</span>
            </Link>
          </li>
          
          <li class="d-flex gap-3 align-items-center">
            <Link to="/tasks" class="nav-text">
              <i class="fa-solid fa-briefcase"></i> <span>tasks</span>
            </Link>
          </li>
       
          <li class="d-flex gap-3 align-items-center">
            <a href="#" class="nav-text">
              <i class="fa-solid fa-receipt"></i>
              <span>Payroll</span>
            </a>
          </li>
          <li class="d-flex gap-3 align-items-center">
            <a href="#" class="nav-text">
              <i class="fa-solid fa-hurricane"></i>
              <span>Loan</span>
            </a>
          </li>
          <li class="d-flex gap-3 align-items-center">
            <Link to="/login" class="nav-text">
              <i class="fa-solid fa-right-from-bracket"></i>
              <span>Leave</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Navbar;
