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
        user.name.toLowerCase().includes(searchUsers.toLowerCase())
      )
    );
  }, [searchUsers, users]);

  if (loading) {
    return (
      <div className="user-search__loading-message">"Loading results, be patient!!!"</div>
    );
  }

  if (searchUsers.value === "") {
    return []
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
    name = "name unknown";
  }

  if (email === null) {
    email = "email unknown";
  }

  if (age === null) {
    age = "age unknown";
  }

  if (location === null) {
    location = "location unknown";
  }

  return (
    <Fragment>
      <Card className="user-search__card">
        <Row>{name}</Row>
        <Row>{email}</Row>
        <Row>{age}</Row>
        <Row>{location}</Row>
      </Card>
    </Fragment>
  );
};
export default UserSearch;
