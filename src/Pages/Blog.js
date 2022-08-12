import React, {useState, useEffect} from 'react'; 
import {useNavigate, useParams} from "react-router-dom";
import {blogsData} from "../data";

const Blog = () => { 
    const navigate = useNavigate();
    const {title} = useParams();
    const [bodyData, setBodyData] = useState("");

    useEffect(() => {
        const blogData = blogsData.filter((blog)=>blog.title === title);
        setBodyData(blogData[0].body);
    }, []);
    
    return (
        <div>
            <h1>{title}</h1>
            <p>{bodyData.slice(0,500)}</p>
            <p>{bodyData.slice(501,10000)}</p>
            <button className="blog-btn" onClick={()=>{navigate("/blogs")}}>Back to Blogs</button>
        </div> 
    );
};

export default Blog;