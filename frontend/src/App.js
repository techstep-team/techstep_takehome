import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Row, Card, Col, Button } from 'antd';
import logo_green from './logo_green.png';
import TeamPic from './TeamPic.png';
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
              <Button
                style={{
                  width: '298px',
                  height: '45px',
                  background: '#00AE8C',
                  borderRadius: '4.5px',
                  border: 'none',
                }}
              >
                <span className='buttonClick'>To Your Page</span>
              </Button>
            </Row>
          </Card>
        </Row>
        <br />
        <Row justify='center'>
          <Card
            style={{
              width: 1350,
              height: 500,
              background: '#ffffff',
              borderRadius: '32px',
              border: 'none',
            }}
          >
            <Row justify='center'>
              <Col style={{ paddingRight: 80 }}>
                <Card
                  style={{
                    width: 650,
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    border: 'none',
                  }}
                >
                  <Row justify='start'>
                    <span className='ourStoryTitle'>Our Story</span>
                  </Row>
                  <br />
                  <Row>
                    <span className='ourStoryText'>
                      We're helping the world techstep forward one business at a
                      time. As a one-stop partner, we find and implement a
                      personalized tech solution that solves problems,
                      alleviates pain points and digitally transforms growing
                      businesses.
                    </span>
                    <span className='ourStoryText'>
                      Technology transformations are complex and overwhelming.
                      That's where we come in. We relentlessly research and
                      uncover the most efficient technology tools, and are
                      committed to developing the best-unbiased recommendations.
                      We guide businesses every step of the way from
                      recommendation, implementation, to continued support.
                    </span>
                    <span className='ourStoryText'>
                      Welcome to the techstep revolution.
                    </span>
                  </Row>
                </Card>
              </Col>
              <Col>
                <img
                  alt=''
                  src={TeamPic}
                  style={{
                    width: 490,
                    paddingTop: '80px',
                  }}
                ></img>
              </Col>
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
