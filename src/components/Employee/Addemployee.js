import "./styles.css";
import Navbar from "../Navbar/Navbar";
function AddEmployee() {
  return (
    <section>
    <div class="container-fluid addemployee">
    <div className="parent d-flex">
    <div className="child-1">
            <Navbar />
        </div>  
      <div class="child-2">
      <a href="/employees" class="btn btn-primary my-3 employee-list">Employee List</a>
      <h3>Add New Employee</h3>
      <form action="" class="d-grid gap-4 my-5">
        <div class="data d-flex flex-column gap-2">
          <label for="fName">First Name</label>
          <input type="text" id="fName" autocomplete="off" />
        </div>
        <div class="data d-flex flex-column gap-2">
          <label for="lName">Last Name</label>
          <input type="text" id="lName" autocomplete="off" />
        </div>
        <div class="data d-flex flex-column gap-2">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" autocomplete="off" />
        </div>
        <div class="data d-flex flex-column gap-2">
          <label for="">Contact Number</label>
          <input type="number" />
        </div>
        <div class="data d-flex flex-column gap-2">
          <label for="department">Department </label>
          <select id="department" name="department" class="select">
            <option value="one">One</option>
            <option value="two">Two</option>
          </select>
        </div>
        <div class="data d-flex flex-column gap-2">
          <label for="designation">Designation </label>
          <select id="designation" name="designation" class="select">
            <option value="one">One</option>
            <option value="two">Two</option>
          </select>
        </div>
        <div class="data d-flex flex-column gap-2">
          <label for="role">Role</label>
          <select id="role" name="role" class="select">
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <div class="data d-flex flex-column gap-2">
          <label for="gender">Gender</label>
          <select id="gender" name="gender" class="select">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="data d-flex flex-column gap-2">
          <label for="birth-day">Date Of Birth</label>
          <input type="date" id="birth-day" name="birthday" />
        </div>
        <div class="data d-flex flex-column gap-2">
          <label for="joining-day">Date Of Joining</label>
          <input type="date" id="joining-day" name="joiningday" />
        </div>
        <div class="data d-flex flex-column gap-2">
          <label for="leaving-day">Date Of Leaving</label>
          <input type="date" id="leaving-day" name="leavingday" />
        </div>
        <div class="data d-flex flex-column gap-2">
          <label for="myimage">Image</label>
          <input type="file" id="myimage" name="" />
        </div>
        <div class="btns">
          <input class="btn btn-success me-3" type="submit" value="Save" />
          <input class="btn btn-danger" type="reset" value="Cancel" />
        </div>
      </form>           
      </div>
    </div>
    </div>
  </section>
  );
}

export default AddEmployee;
