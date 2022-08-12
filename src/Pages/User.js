import React, {useState} from 'react';
import {useSearchParams} from "react-router-dom";

const User = () => {
    const [name, setName] = useState("");
    //Query parameter with search
    const [searchParams, setSearchParams] = useSearchParams(); 
    const id = searchParams.get("id"); 
    const age = searchParams.get("age");
    
    const handleForm = (e) =>{
        e.preventDefault();
        setSearchParams({name:name})
    }
    
    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" value={name} onChange={(e)=>{
                    setName(e.target.value);
                }}/><br/>
                <button className="blog-btn" style={{marginTop: 5}} type="submit">Find User</button>
            </form>
            
            <h1>User Id {id}</h1>
            <h1>Name {name}</h1>
            <h1>Age {age}</h1>
        </div>
    );
};

export default User;
