import React, { useEffect, useState } from 'react';
import './Search.css';


//The search bar should just have a simple filter that only returns the names that have the search term in it.


class Search extends React.Component {
    constructor(){
        this.handleChange = this.handleChange.bind(this);
        this.state = {filtered: this.getUsers()}
    }

    cleanQuery(str){
        return str.replace(/\s+/g, '').toLowerCase();
    }

    getUsers() {
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

    handleChange(e){
        const { users } = this.props;
        let currentList = [];
        if (e.target.value !== ""){
            currentList = users.filter((user) => (this.cleanQuery(user.name.includes(this.cleanQuery(e.target.value)))));
            this.setState({search : true});
        } else {
            currentList = users;
            this.setState({searched : false});
        }
        this.setState({ filtered : currentList});
    }

    render() {
        const [users, setUsers] = useState(null);
        useEffect(() => {
            getUsers().then((data) => {
                console.log(data);
                setUsers(data);
            });
        }, []);
        const list =  users ? users.map((user) => { return <tr>
                <td> {user.name} </td>
                <td> {user.age} </td>
                <td> {user.location} </td>
                <td> {user.is_registered == 1 ? "Yes" : "No"} </td>
            </tr> }) : "";
        return(
            <div>
                <p>Search</p>
                <input
                    class="search"
                    type="text"
                    placeholder="Search for anything..."
                    onChange={this.handleChange}
                    />
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Location</th>
                        <th>Registered?</th>
                    </tr>
                    {list}
                </table>
            </div>
        )
    }

}

export default Search;


