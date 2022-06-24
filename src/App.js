import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Photos from "./components/Photos/Photos";
import Login from "./components/Login";
import SignUpWithValidation from "./components/Signup/SignUpWithValidation";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Component404 from "./components/404";
import PhotoEnlarged from "./components/PhotoEnlarged";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />

        <Routes>
          <Route path='/' element={<Photos/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUpWithValidation/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>

          {/* Dynamic Route requires paramas to be send after : */}

          <Route path='/photos/:id' element={<PhotoEnlarged/>}/>

          <Route path='*' element={<Component404/>}/> 
         
        </Routes>

        
      </Router>
    </div>
  );
};

export default App;
