import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home  from "./booking/Home"
import Login from "./auth/Login"
import Register  from "./auth/Register"
import TopNav from "./components/TopNav"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import './App.css';

function App() {
  return (
    
    
    <BrowserRouter>
    <TopNav />
    <ToastContainer position="top-center" />
    <Routes >
    <Route exact path ="/" element = {<Home />} />
    <Route exact path ="/login" element = {<Login />} />
    <Route exact path ="/register" element = {<Register />} />
    </Routes>
    </BrowserRouter>

    
  );
}
<div  className="contaniner">
       
     </div>

export default App;
