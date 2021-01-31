import React, { useState, useEffect, Fragment } from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Link } from "react-router-dom";
import { Input, Space, Layout, Row, Card, Col, Button } from "antd";
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
    return <p>Loading... be patient!!!</p>;
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
        <Col>{name}</Col>
        <Col>{email}</Col>
        <Col>{age}</Col>
        <Col>{location}</Col>
      </Card>
    </Fragment>
  );
};
export default UserSearch;
