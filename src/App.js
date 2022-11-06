import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/login/Login'
import Department from './components/organization/Department'
import Register from "./components/register/register";

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/department" element={<Department />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
     </Routes>
  </BrowserRouter>
      
  );
}

export default App;
