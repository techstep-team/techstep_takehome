import React, { useEffect, useState } from 'react';
import './Search.css';

function getUsers() {
    //console.log("inside getUsers()");
    return fetch(`/api/users`)
        .then((response) => {
            return response.json();
        })
        .then(users => {
            console.log(users);
            return users;
        });
}

function cleanQuery(str){
    console.log(str)
    return str.replace(/\s+/g, '').toLowerCase();
}

function handleChange() {
    // const { users } = this.props;
    // let currentList = [];
    // if (e.target.value !== ""){
    //     currentList = users.filter((user) => (this.cleanQuery(user.name.includes(this.cleanQuery(e.target.value)))));
    //     this.setState({search : true});
    // } else {
    //     currentList = users;
    //     this.setState({searched : false});
    // }
    // this.setState({ filtered : currentList});
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
        console.log(input);
        console.log(users);
        const currentList = users.filter(user => {
            console.log(user.name)
            return user.name.toLowerCase().includes(input.toLowerCase())
        }) 
        setInput(input);
        setUsers(currentList);
        console.log(currentList);
    }

    const list =  users ? users.map((user) => {return <tr>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.location}</td>
                        <td>{user.is_registered == 1 ? "Yes" : "No"}</td>
                    </tr>}) : "";
    return(
        <div>
            <p>Search</p>
            <input
                className="search"
                type="text"
                placeholder="Search for anything..."
                input={input}
                onChange={(e) => updateInput(e.target.value)}
                />
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Location</th>
                        <th>Registered?</th>
                    </tr>
                    {list}
                </tbody>
            </table>
        </div>
    );
}

export default Search;

