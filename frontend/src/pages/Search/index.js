import React, { useState } from 'react';
import './Search.css';
import { searchUserByName } from '../../APIHelpers';
import Searchbar from './components/Searchbar';
import UserCard from './components/UserCard';

const Search = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFirstSearch, setIsFirstSearch] = useState(true);

  const handleSearch = async term => {
    setIsFirstSearch(false);
    setLoading(true);
    const newResults = await searchUserByName(term);
    setResults(newResults);
    setLoading(false);
  }

  return (
    <div id="search-container">
      <h1>Search our users</h1>
      <Searchbar handleSearch={handleSearch}/>
      <div id="results-container">
        {loading ? <p id="loading-text">Loading...</p> : results.map(user => <UserCard user={user} key={user.id} />)}
        {!isFirstSearch && results.length === 0 && !loading ? <p>No results found</p> : null}
      </div>
    </div>
  )
};

export default Search;