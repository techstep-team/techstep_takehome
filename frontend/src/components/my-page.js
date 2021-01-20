import React, { useState } from "react";
import logo_green from "../logo_green.png";
import axios from "axios";
import SelectedUser from "./my-page-selected.component";
import { AutoComplete } from "antd";
import { Layout, Row, Card, Col, Button } from "antd";
const { Header, Content, Footer } = Layout;

const MyPage = () => {
  const [options, setOptions] = useState([]);
  const [selectedUser, setSelectedUser] = useState();

  const onSearch = (searchText) => {
    getInfo(searchText);
  };

  const getInfo = (query) => {
    axios
      .get("http://localhost:5000/api/routes/get-users", {
        params: {
          term: query,
        },
      })
      .then((res) => {
        let optionsCopy = [];
        for (let i in res.data) {
          optionsCopy.push({ value: res.data[i].name });
        }
        setOptions(optionsCopy);
      });
  };

  const onSelect = (username) => {
    axios
      .post("http://localhost:5000/api/routes/get-user", { username })
      .then((res) => {
        setSelectedUser(res.data);
      });
  };

  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Header
        style={{
          padding: "0 170px 60px 0",
          background: "white",
        }}
      >
        <img className="techstep-logo" src={logo_green} alt="logo" />
      </Header>
      <div
        className="my-page-container"
        style={{
          width: "600px",
          height: "600px",
          marginBottom: "200px",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "100px",
        }}
      >
        <h1 style={{ color: "#00ae8c" }}>Type a name</h1>
        <AutoComplete
          options={options}
          style={{
            width: "100%",
          }}
          onSelect={onSelect}
          onSearch={onSearch}
          placeholder="input here"
        />
        {selectedUser ? <SelectedUser selected={selectedUser} /> : null}
      </div>

      <Footer style={{ backgroundColor: "#182628", height: "200px" }}>
        <Card
          style={{
            width: "100%",
            backgroundColor: "#182628",
            borderColor: "#182628",
          }}
        >
          <center>
            <img
              className="techstep-logo"
              src={logo_green}
              alt="Techstep Logo"
            />
            <br />
            <br />
            <span style={{ color: "grey", paddingLeft: "40px" }}>
              {" "}
              © 2020 Techstep Inc.
            </span>
            <br />
            <span style={{ color: "grey", paddingLeft: "40px" }}>
              {" "}
              All Rights Reserved.
            </span>
          </center>
        </Card>
      </Footer>
    </Layout>
  );
};

export default MyPage;
