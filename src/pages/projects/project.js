import './project.css';
import { Link } from 'react-router-dom';
import ProjecstCard from '../../components/Cards/ProjecstCard';
function Project() {
  return (
    <>
      <Link to="/projects/addproject" class="btn btn-primary my-3 add-new-project">Add New Project</Link>
      <h3 class="p-3 ps-4">Project List</h3>
      <div class="ser d-flex gap-2">
        <h4>Search:</h4>
        <input type="search" />
      </div>
      <div class="tab p-3">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Project Name</th>
              <th scope="col">Status</th>
              <th scope="col">Employee</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            <ProjecstCard name='Final Project' status='Doing' employee='Students' startDate='01-11-2022' endDate='19-11-2022' />
            <ProjecstCard name='Final Project' status='Doing' employee='Students' startDate='01-11-2022' endDate='19-11-2022' />
            <ProjecstCard name='Final Project' status='Doing' employee='Students' startDate='01-11-2022' endDate='19-11-2022' />
            <ProjecstCard name='Final Project' status='Doing' employee='Students' startDate='01-11-2022' endDate='19-11-2022' />
            <ProjecstCard name='Final Project' status='Doing' employee='Students' startDate='01-11-2022' endDate='19-11-2022' />

          </tbody>
        </table>
      </div>
    </>

  );
}

export default Project;