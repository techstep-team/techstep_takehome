import React from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Link } from "react-router-dom";
import { Layout, Row, Card, Col, Button } from "antd";

const Search = () => {
  return (
    <div className="search__container">
      <Link to="/">
        <Button className="search__go-back-home-button">
          <span className="buttonClick">Go back home</span>
        </Button>
      </Link>
      <div className="search__input-container">I am a search!!!!</div>
    </div>
  );
};

export default Search;
