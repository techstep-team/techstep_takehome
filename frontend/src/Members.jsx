import React from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import './Members.css';
import UserInfo from './UserInfo';
import { Row, Input } from 'antd';
const { Search } = Input

export default function Members() {
    const [users, setUsers] = React.useState(null);
    const onSearch = value => {
        axios.get(`http://localhost:5000/search?query=${value}`)
          .then(res => {
              console.log(res.data.sort((a, b) => b.name - a.name))
              setUsers(res.data.sort((a, b) => b.name - a.name));
          });
    };
    return (
        <div className='members-container'>
          <div className='member-title-container'>
            <Row>
            <h1 className='member-title' style={{textAlign: 'center'}}>
                Search Techstep Members <br />
            </h1>
            </Row>
            <Row>
            <Search
                className='member-search'
                placeholder="Search anything ..."  
                onSearch={onSearch}
                enterButton />
            </Row>
          </div>
          {users !== null && <div className='results-container'>

              <h1 className='ourStoryTitle'>Results:</h1>
              <ul className='results-list'>
                {users.length > 0 ? 
                    users.map((user, i) => 
                    <li><UserInfo key={i} {...user} /></li>
                    ) : <li>No users found.</li>}
              </ul>

          </div> }
        </div>
    );
}