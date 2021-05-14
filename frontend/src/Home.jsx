import React from "react";
import TeamPic from './TeamPic.png';
import { Row, Card, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home() {
    return (
      <div>
        <Row className='card-container'>
          <Card style={{ width: '1500px', height: '280px' }}>
            <Row className='title-container'>
              <h1 className='title' style={{textAlign: 'center'}}>
                Welcome to the Techstep <br/> takehome assessment! <br/>
              </h1>
            </Row>
            <Row className='title-button'>
              <Link to='/members'>
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
              </Link>
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
      </div>
    );
}