import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";
import Error from "./Pages/Error";
import Navbar from "./Components/Navbar";
import Blog from "./Pages/Blog";
import User from "./Pages/User";

function App() {
  return ( 
    <BrowserRouter> 
        <Navbar/>
        <div className="route-body">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/user" element={<User />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/blogs" element={<Blogs />}/>
                <Route path="/blogs/:title" element={<Blog />}/>
                <Route path="*" element={<Error />}/>
            </Routes>
        </div>
    </BrowserRouter> 
  );
}

export default App;
