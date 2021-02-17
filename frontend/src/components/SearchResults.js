import React from 'react';

function SearchResults({ userData }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Location</th>
            <th scope="col">Registered</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email ? user.email : 'N/A'}</td>
              <td>{user.age ? user.age : 'N/A'}</td>
              <td>{user.location ? user.location : 'N/A'}</td>
              <td>{user.is_registered ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
