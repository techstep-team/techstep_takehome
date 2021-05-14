import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Card } from 'antd';
import logo_green from './logo_green.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Members from './Members';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ backgroundColor: 'white' }}>
        <Header
          style={{
            padding: '0 170px 60px 0',
            background: 'white',
          }}
        >
          <Link to='/'><img className='techstep-logo' src={logo_green} alt='logo' /></Link>
        </Header>
        <Content style={{ backgroundColor: 'white', paddingBottom: '200px' }}>
          <Switch>
            <Route path='/members'>
              <Members />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
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
    </Router>
  );
}

export default App;
