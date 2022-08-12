import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";
import Error from "./Pages/Error";
import Navbar from "./Components/Navbar";

function App() {
  return ( 
    <BrowserRouter> 
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />}/> 
            <Route path="/about" element={<About />}/> 
            <Route path="/contact" element={<Contact />}/> 
            <Route path="/blogs" element={<Blogs />}/> 
            <Route path="*" element={<Error />}/> 
        </Routes>
    </BrowserRouter> 
  );
}

export default App;
