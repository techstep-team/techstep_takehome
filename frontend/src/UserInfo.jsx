import React from 'react';
import { Card } from 'antd';
import './UserInfo.css';
const { Meta } = Card;

export default function UserInfo({age, email, location, name}) {
    return (
        <Card 
          className='user-card' 
          cover={<div className='user-title'>{name}</div>}>
            <Meta 
              title='About Me' 
              description={
                <div>
                    {age !== null && <p>Age: {age}</p>}
                    {location !== null && <p>Location: {location}</p>}
                    {email !== null && <p>Email: {email}</p>}
                </div>
              }/>
        </Card>
    );
}
