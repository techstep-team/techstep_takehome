import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="mx-auto">
        <h1>Search Page</h1>
        <form className="form-inline">
          <div className="form-group">
            <input
              id="searchParams"
              type="text"
              className="form-control"
              placeholder="Search for a user"
            />
          </div>
          <button className="btn btn-primary">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
