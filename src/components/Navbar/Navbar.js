import './navbar.css'
function Navbar(){
    return(
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
          <div class="btns d-flex gap-1 justify-content-center">
            <i class="fa-solid fa-gear"></i>
            <i class="fa-solid fa-power-off log-out"></i>
          </div>
        </div>
      </div>
      <div class="down">
        <ul class="links d-flex flex-column gap-3">
          <li class="d-flex gap-3 align-items-center">
            <i class="fa-solid fa-gauge"></i>
            <a href="#" class="nav-text">Dashboard</a>
          </li>
          <li class="d-flex gap-3 align-items-center">
            <i class="fa-solid fa-sitemap"></i>
            <a href="#" class="nav-text">Organization</a>
          </li>
          <li class="d-flex gap-3 align-items-center">
            <i class="fa-solid fa-user-group"></i>
            <a href="#" class="nav-text">Employees</a>
          </li>
          <li class="d-flex gap-3 align-items-center">
            <i class="fa-solid fa-briefcase"></i>
            <a href="#" class="nav-text">Attendance</a>
          </li>
          <li class="d-flex gap-3 align-items-center">
            <i class="fa-solid fa-right-from-bracket"></i>
            <a href="#" class="nav-text">Leave</a>
          </li>
          <li class="d-flex gap-3 align-items-center">
            <i class="fa-solid fa-receipt"></i>
            <a href="#" class="nav-text">Payroll</a>
          </li>
          <li class="d-flex gap-3 align-items-center">
            <i class="fa-solid fa-hurricane"></i>
            <a href="#" class="nav-text">Loan</a>
          </li>
        </ul>
      </div>
    </aside>
    )
}

export default Navbar