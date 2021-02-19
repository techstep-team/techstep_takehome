import React, { useState } from 'react';
import '../Search.css';

const Searchbar = ({ handleSearch = () => {}}) => {
  const [term, setTerm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(term);
  }

  return (
    <div id="searchbar-container">
      <form onSubmit={handleSubmit} id="searchbar-form">
        <input 
          type="text" 
          value={term} 
          onChange={e => setTerm(e.target.value)} 
        />
        <input type="submit" value="Search" />
      </form> 
    </div>
  )
}

export default Searchbar;