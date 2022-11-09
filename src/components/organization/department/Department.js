import "./Department.css";
function Department() {
  return (
    <div class="gap-4 row department">
      <div class="left-side add-department col-lg-5 col-12">
        <h3 class="p-3 ps-4">Add Department</h3>
        <form action="" class="d-flex flex-column p-3 gap-3">
          <label for="">Department Name</label>
          <input type="text" name="" id="" />
          <div class="btns">
            <button class="save bg-success me-2">Save</button>
            <button class="cancel bg-danger">Cancel</button>
          </div>
        </form>
      </div>
      <div class="right-side department-list col-lg-6 col-12">
        <h3 class="p-3 ps-4">Department List</h3>
        <div class="tab p-3">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Department Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mo</td>
                <td class="d-flex gap-2">
                  <button class="edit">
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Mo</td>
                <td class="d-flex gap-2">
                  <button class="edit">
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Mo</td>
                <td class="d-flex gap-2">
                  <button class="edit">
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Mo</td>
                <td class="d-flex gap-2">
                  <button class="edit">
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Mo</td>
                <td class="d-flex gap-2">
                  <button class="edit">
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Mo</td>
                <td class="d-flex gap-2">
                  <button class="edit">
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Mo</td>
                <td class="d-flex gap-2">
                  <button class="edit">
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Department;
