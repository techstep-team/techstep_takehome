import React from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Link } from "react-router-dom";
import { Input, Space, Layout, Row, Card, Col, Button } from "antd";

const { Search } = Input;

// confirm we have the ability to log a value
const onSearch = value => console.log("value", value);

const UserSearch = () => {
  return (
    <div className="user-search__container">
      <Link to="/">
        <Button className="user-search__go-back-home-button">
          <span className="buttonClick">Go back home</span>
        </Button>
      </Link>
      <div className="user-search__input-container">
      <Search className="user-search__input" placeholder="input search text" onSearch={onSearch} enterButton /></div>
    </div>
  );
};

export default UserSearch;
