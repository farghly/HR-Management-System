import "./navbar.css";
function Navbar() {
  return (
    <aside>
      <div class="up text-center pb-5">
        <h1 class="logo mb-4">HR Project</h1>
        <div class="data">
          <img
            src="https://via.placeholder.com/150"
            alt=""
            class="profile-img mb-3"
          />
          <h3 class="mb-3">Thom Anderson</h3>
          <div class="btns d-flex gap-lg-3 gap-2 justify-content-center">
            <a href="#" class="setting">
              <i class="fa-solid fa-gear sett"></i>
            </a>
            <a href="#" class="logOut">
              <i class="fa-solid fa-power-off log-out"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="down">
        <ul class="links d-flex flex-column gap-lg-3 gap-2">
          <li class="d-flex gap-3 align-items-center">
            <a href="#" class="nav-text">
              <i class="fa-solid fa-gauge"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li class="d-flex gap-3 align-items-center">
            <a href="#" class="nav-text">
              <i class="fa-solid fa-sitemap"></i>
              <span>Organization</span>
            </a>
          </li>
          <li>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="d-flex gap-3 align-items-center">
            <a href="#" class="nav-text">
              <i class="fa-solid fa-user-group"></i>
              <span>Employees</span>
            </a>
          </li>
          <li class="d-flex gap-3 align-items-center">
            <a href="#" class="nav-text">
              <i class="fa-solid fa-briefcase"></i> <span>Attendance</span>
            </a>
          </li>
          <li class="d-flex gap-3 align-items-center">
            <a href="#" class="nav-text">
              <i class="fa-solid fa-right-from-bracket"></i>
              <span>Leave</span>
            </a>
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
        </ul>
      </div>
    </aside>
  );
}

export default Navbar;
