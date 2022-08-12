import React, {useState} from 'react'; 
import {blogsData} from "../data";
import {Link} from "react-router-dom";

const Blogs = () => { 
    const [blogs, setBlog] = useState(blogsData);
    
    const truncateString = (str, num)=>{
        if (str.length > num){
            return str.slice(0, num) + "...";
        }else{
            return str;
        }
    }
    
    return (
        <div>
            <h1>Blogs Page</h1>
            <section>
                {blogs && blogs.map((blog)=> {
                    const {id, title, body} = blog;
                    return <article key={id}>
                        <h3>{title}</h3>
                        <p>{truncateString(body, 220)}</p>
                        <Link className="blog-btn" to={title}>Read More</Link>
                    </article>
                })}
            </section>  
        </div> 
    );
};

export default Blogs;