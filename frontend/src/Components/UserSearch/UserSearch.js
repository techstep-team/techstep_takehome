import React, { useState, useEffect, Fragment } from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Link } from "react-router-dom";
import { Input, Row, Card, Button } from "antd";
import axios from "axios";

const UserSearch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchUsers, setSearchUsers] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().startsWith(searchUsers.toLowerCase())
      )
    );
  }, [searchUsers, users]);

  if (loading) {
    return (
      <div className="user-search__loading-message">
        "Loading results, be patient!!!"
      </div>
    );
  }

  if (searchUsers.value === "") {
    return [];
  }

  return (
    <div className="user-search__container">
      <Link to="/">
        <Button className="user-search__go-back-home-button">
          <span className="user-search__go-back-home-text">Go back home</span>
        </Button>
      </Link>
      <div className="user-search__input-container">
        <Input
          type="text"
          className="user-search__input"
          placeholder="Search for a user"
          onChange={(e) => setSearchUsers(e.target.value)}
        />
      </div>
      <div className="user-search__search-results">
        {filteredUsers.map((user, id) => (
          <UserDetails key={id} {...user} />
        ))}
      </div>
    </div>
  );
};

const UserDetails = ({ name, email, age, location }) => {
  if (name === null) {
    name = "Unknown";
  }

  if (email === null) {
    email = "Unknown";
  }

  if (age === null) {
    age = "Unknown";
  }

  if (location === null) {
    location = "Unknown";
  }

  return (
    <Fragment>
      <Card className="user-search__card">
        <Row><b>Name:&nbsp;</b>{name}</Row>
        <Row><b>Email:&nbsp;</b>{email}</Row>
        <Row><b>Age:&nbsp;</b>{age}</Row>
        <Row><b>Location:&nbsp;</b>{location}</Row>
      </Card>
    </Fragment>
  );
};
export default UserSearch;
