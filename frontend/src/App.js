import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Row, Card } from 'antd';
import logo_green from './logo_green.png';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ backgroundColor: 'white' }}>
      <Header
        style={{
          padding: '0 170px 60px 0',
          background: 'white',
        }}
      >
        <img className='techstep-logo' src={logo_green} alt='logo' />
      </Header>
      <Content style={{ backgroundColor: 'white', paddingBottom: '200px' }}>
        <Row className='card-container'>
          <Card style={{ width: '1500px', height: '280px' }}>
            <Row className='title-container'>
              <h1 className='title'>
                Welcome to the TechStep takehome assessment!
              </h1>
            </Row>
            <Row className='title-button'>
              <button>To your page</button>
            </Row>
          </Card>
        </Row>
      </Content>
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
              className='techstep-logo'
              src={logo_green}
              alt='Techstep Logo'
            />
            <br />
            <br />
            <span style={{ color: 'grey' }}> © 2020 Techstep Inc.</span>
            <br />
            <span style={{ color: 'grey' }}> All Rights Reserved.</span>
          </center>
        </Card>
      </Footer>
    </Layout>
  );
}

export default App;
