import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/login/Login";
import Department from "./pages/organization/department/Department";
import Desgination from "./pages/organization/designation/Desgination";
import Register from "./pages/register/register";
import AddEmployee from "./pages/Employee/Addemployee";
import Employees from "./pages/Employee/Employee";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      
        <BrowserRouter>
        <div className="container-fluid main">
        <div class="parent d-flex">
             <div className="child-1">
               <Navbar />
             </div>
             <div class="child-2">
              <Routes>
                   <Route path="/" element={<Dashboard />} />
                   <Route path="/department" element={<Department />} />
                   <Route path="/login" element={<Login />} />
                   <Route path="/register" element={<Register />} />
                   <Route path="/employees" element={<Employees />} />
                   <Route
                     path="/employees/addemployee"
                     element={<AddEmployee />}
                   />
                   <Route path="/designation/" element={<Desgination />} />
                   </Routes>
             </div>
           </div>
      </div>
    </BrowserRouter>
       
    </>
  );
}

export default App;
