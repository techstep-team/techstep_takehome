import React, { useState } from 'react';
import './Search.css';
import { searchUserByName } from '../../APIHelpers';
import Searchbar from './components/Searchbar';
import UserCard from './components/UserCard';

const Search = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFirstSearch, setIsFirstSearch] = useState(true);
  const [error, setError] = useState(false);

  const handleSearch = async term => {
    setError(false);
    setIsFirstSearch(false);
    setLoading(true);

    try {
      const newResults = await searchUserByName(term);
      setResults(newResults);
      setLoading(false);
    } catch (error) {
      setResults([]);
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div id="search-container">
      <h1>Search our users</h1>
      <Searchbar handleSearch={handleSearch}/>
      <div id="results-container">
        {loading ? <p id="loading-text">Loading...</p> : results.map(user => <UserCard user={user} key={user.id} />)}
        {!isFirstSearch && 
        results.length === 0 && 
        !loading &&
        !error ? 
        <p>No results found</p> : null}
        {error ? <p>There was a problem fetching your results. Please try again.</p> : null}
      </div>
    </div>
  )
};

export default Search;