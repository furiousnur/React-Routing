import React, {useEffect, useState} from 'react';

const url = "https://rest-api-without-db.herokuapp.com/users";
const Users = () => {
    const [users, setUsers] = useState(null);
    
    const getAllUsers = () =>{
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error("Could not fetch");
                }
                return res.json();
            })
            .then((data) => {
                setUsers(data.users);
            });
    }
    
    useEffect(() => {
        getAllUsers();
    }, []);


    return (<div>
        <h1>Users List</h1>
        <section>
            {
                users && users.map((user)=>{
                    return <article key={user.id}>
                        <h3>{user.username}</h3>
                        <p>{user.email}</p>
                    </article>
                })
            }
        </section>
    </div>);
};

export default Users;