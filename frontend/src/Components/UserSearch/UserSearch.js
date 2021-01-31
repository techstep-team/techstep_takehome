import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Link } from "react-router-dom";
import { Input, Space, Layout, Row, Card, Col, Button } from "antd";
import axios from "axios";

// let userResults;
// const onSearch = async () => {
//   userResults = await axios.get("/users");
//   console.log("result", userResults);
// };

// const userSearch = useState[userResults];

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

  console.log(setSearchUsers)

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
      <div
        className="user-search__search-results"
        // userSearch={userSearch}
      ></div>
    </div>
  );
};

export default UserSearch;
