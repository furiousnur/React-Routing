import React, {useState, useEffect} from 'react'; 
import {useNavigate, useParams, useLocation} from "react-router-dom";
// import {blogsData} from "../data";

const Blog = () => { 
    const navigate = useNavigate();
    const {title} = useParams();
    const location = useLocation();
    // const [bodyData, setBodyData] = useState(""); 
    // useEffect(() => {
    //     const blogData = blogsData.filter((blog)=>blog.title === title);
    //     setBodyData(blogData[0].body);
    // }, []);
    
    return (
        <div>
            <h1>{title}</h1>
            <p>{location.state.body.slice(0,500)}</p>
            <p>{location.state.body.slice(501,10000)}</p>
            <button className="blog-btn" onClick={()=>{navigate("/blogs")}}>Back to Blogs</button>
        </div> 
    );
};

export default Blog;