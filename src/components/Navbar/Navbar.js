import "./navbar.css";
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
        <ul class="links d-flex flex-column gap-lg-2 gap-1">
          <li class="d-flex gap-3 align-items-center">
            <a href="/" class="nav-text">
              <i class="fa-solid fa-gauge"></i>
              <span>Dashboard</span>
            </a>
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
                    <a class="dropdown-item" href="/designation">
                      Designation
                    </a>
                    <a class="dropdown-item" href="/department">
                      Department
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
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
                <a class="dropdown-item" href="/department">
                  Department
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/designation">
                  Designation
                </a>
              </li>
            </ul>
          </li>
          <li class="d-flex gap-3 align-items-center">
            <a href="/employees" class="nav-text">
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
