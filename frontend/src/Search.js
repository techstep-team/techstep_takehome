import React, { useEffect, useState } from 'react';
import './Search.css';



function getUsers() {
    console.log("inside getUsers()");
    return fetch(`/api/users`)
        .then((response) => {
            console.log("inside fetch statement");
            return response.json();
        })
        .then(users => {return users});
}

function Search() {
    const [users, setUsers] = useState(null);
    useEffect(() => {
        getUsers().then((data) => {
            console.log(data);
            setUsers(data);
        });
    }, []);
    const list =  users ? users.map((user) => { return <li>
                        <span>id: {user.id}</span>
                        <span>name: {user.name}</span>
                        <span>age: {user.age}</span>
                        <span>location: {user.location}</span>
                        <span>is_registered: {user.is_registered}</span>
                    </li> }) : "";
    console.log(list);
    return(
        <div>
            <p>Search</p>
            <input
                type="text"
                placeholder="Search for anything..."/>
            <ul>
                {list}
            </ul>
        </div>
    );
}

export default Search;

