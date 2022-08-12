import React from 'react';
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Contact Page</h1>
            <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore doloribus eligendi illo modi non, odio quae ut! Autem ea esse ipsam omnis saepe? Cumque dolor eius facilis quidem quisquam totam veniam voluptates voluptatum? Blanditiis ex fuga fugit impedit inventore iure laboriosam modi necessitatibus, nesciunt officiis, optio praesentium quaerat quos ratione repudiandae sequi sunt temporibus unde ut veniam vero voluptatem voluptatum. Animi aspernatur blanditiis consequuntur fugit ipsam iste laborum officiis quia quod sapiente! Amet animi, asperiores cumque debitis deleniti dolore ducimus earum eius explicabo facere fugiat harum, iste maxime non odio placeat qui repellendus rerum, saepe tempore? Qui, repudiandae, veritatis?</p>
            <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore doloribus eligendi illo modi non, odio quae ut! Autem ea esse ipsam omnis saepe? Cumque dolor eius facilis quidem quisquam totam veniam voluptates voluptatum? Blanditiis ex fuga fugit impedit inventore iure laboriosam modi necessitatibus, nesciunt officiis, optio praesentium quaerat quos ratione repudiandae sequi sunt temporibus unde ut veniam vero voluptatem voluptatum. Animi aspernatur blanditiis consequuntur fugit ipsam iste laborum officiis quia quod sapiente! Amet animi, asperiores cumque debitis deleniti dolore ducimus earum eius explicabo facere fugiat harum, iste maxime non odio placeat qui repellendus rerum, saepe tempore? Qui, repudiandae, veritatis?</p>
            <button onClick={()=>{navigate("/")}}>Back to Home</button>
            <button onClick={()=>{navigate("/blogs")}}>Back to Blogs</button>
        </div>
    );
};

export default Contact;