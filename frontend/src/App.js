import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Row, Card, Col, Button } from 'antd';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo_green from './logo_green.png';

import Home from './components/Home';
import Search from './components/Search';

const { Header, Footer } = Layout;

function App() {
  return (
    <Layout style={{ backgroundColor: 'white' }}>
      <Header
        style={{
          padding: '0 170px 60px 0',
          background: 'white',
        }}
      >
        <img className="techstep-logo" src={logo_green} alt="Techstep logo" />
      </Header>
      <Route path="/search" component={Search} />
      <Route exact path="/" component={Home} />
      <Footer style={{ backgroundColor: '#182628', height: '200px' }}>
        <Card
          style={{
            width: '100%',
            backgroundColor: '#182628',
            borderColor: '#182628',
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
            <span style={{ color: 'grey', paddingLeft: '40px' }}>
              {' '}
              © 2020 Techstep Inc.
            </span>
            <br />
            <span style={{ color: 'grey', paddingLeft: '40px' }}>
              {' '}
              All Rights Reserved.
            </span>
          </center>
        </Card>
      </Footer>
    </Layout>
  );
}

export default App;
