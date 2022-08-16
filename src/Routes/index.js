import React, {useState} from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import User from "../Pages/User";
import Contact from "../Pages/Contact";
import Blogs from "../Pages/Blogs";
import Blog from "../Pages/Blog";
import Error from "../Pages/Error";
import Navbar from "../Components/Navbar";
import Protected from "./Protected";

const Index = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <BrowserRouter>
            <Navbar/>
            {isLoggedIn ? <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>Log Out</button> : <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>Log In</button>}
            <div className="route-body">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/user" element={<User />}/>
                    <Route path="/contact" element={<Contact />}/> 
                    <Route path="/blogs" element={<Protected isLoggedIn={isLoggedIn}><Blogs /></Protected>}/>
                    <Route path="/blogs/:title" element={<Protected isLoggedIn={isLoggedIn}><Blog /></Protected>}/>
                    <Route path="*" element={<Error />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Index;
