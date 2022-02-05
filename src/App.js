import { BrowserRouter, Routes, Route} from "react-router-dom"
import TopNav from "./components/TopNav"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import PrivateRoute from "./components/PrivateRoute";


//components
import Home  from "./booking/Home"
import Login from "./auth/Login"
import Register  from "./auth/Register"
import Dashboard from "./user/Dashboard";
import DashboardSeller from "./user/DashboardSeller";
import NewHotel from "./hotels/NewHotel";
function App() {
  return (
    
    
    <BrowserRouter>
    <TopNav />
    <ToastContainer position="top-center" />
    <Routes >
    <Route exact path ="/" element = {<Home />} />
    <Route exact path ="/login" element = {<Login />} />
    <Route exact path ="/register" element = {<Register />} />
    <Route path="/dashboard"  element={ <PrivateRoute> <Dashboard /> </PrivateRoute> } />
    <Route path="/dashboard/seller"  element={ <PrivateRoute> <DashboardSeller /> </PrivateRoute> } />
    <Route path="/hotels/new"  element={ <PrivateRoute> <NewHotel /> </PrivateRoute> } />
    </Routes> 
    </BrowserRouter>

    
  );
  }

export default App;
//<Route exact path="/dashboard"  element={<PrivateRoute> <Dashboard /> </PrivateRoute> }/>