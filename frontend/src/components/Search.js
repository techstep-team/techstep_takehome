import React, { useState } from 'react';
import SearchResults from './SearchResults';

import UserService from '../services/api/UserService';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UserService.get(searchQuery).then((response) => {
      setSearchResults(response);
    });
  };

  return (
    <div className="mx-auto">
      <h1>Users</h1>
      <form className="form-inline mb-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            name="params"
            type="text"
            onChange={handleChange}
            className="form-control"
            placeholder="Search for a user"
          />
        </div>
        <button className="btn btn-primary ml-1">Search</button>
      </form>
      <SearchResults userData={searchResults} />
    </div>
  );
};

export default Search;
