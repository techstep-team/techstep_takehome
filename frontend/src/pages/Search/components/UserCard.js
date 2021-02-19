import React from 'react';

const UserCard = ({user}) => {
  const { name, email, age, location, is_registered } = user;
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p className="green">{email ? email : 'N/A'}</p>
      <p><span className="bold-label">Age: </span>{age ? age : 'N/A'}</p>
      <p>{location ? location : 'N/A'}</p>
      <p><span className="bold-label">Registered: </span> {is_registered ? 'Yes' : 'No'}</p>
    </div>
  )
}

export default UserCard;