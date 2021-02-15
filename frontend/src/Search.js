import React, { useEffect, useState } from 'react';
import './Search.css';

function getUsers() {
    return fetch(`/api/users`)
        .then((response) => {
            return response.json();
        })
        .then(users => {
            console.log(users);
            return users;
        });
}

//The search bar should just have a simple filter that only returns the names that have the search term in it.

function Search() {
    const [users, setUsers] = useState(null);
    const [input, setInput] = useState('');

    useEffect(() => {
        getUsers().then((data) => {
            console.log(data);
            setUsers(data);
        });
    }, []);

    const updateInput = async (input) => {
        console.log(`input is: ${input}`);
        console.log(`users is: ${users}`);
        const currentList = users.filter(user => {
            console.log(`current user is : ${user.name}`);
            return user.name.toLowerCase().includes(input.toLowerCase());
        })
        setInput(input);
        // if(currentList.length == 0){
        //     setUsers(users);
        // } else {
        //     setUsers(currentList);
        // }
        if(input != ''){
            setUsers(currentList);
        } else {
            setUsers(users);
        }
        console.log(`currentList is: ${currentList}`);
    }

    return(
        <div>
            <h1>Search</h1>
            <input
                className="search"
                type="text"
                placeholder="Search for anything..."
                input={input}
                onChange={(e) => updateInput(e.target.value)}
                />
            <table className="users">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Location</th>
                        <th>Registered?</th>
                    </tr>
                    {users ? users.map((user) => {return <tr>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.location}</td>
                        <td>{user.is_registered == 1 ? "Yes" : "No"}</td>
                     </tr>}) : ""}
                </tbody>
            </table>
        </div>
    );
}

export default Search;

