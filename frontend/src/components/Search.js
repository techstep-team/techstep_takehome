import React, { Component } from 'react';
import SearchResults from './SearchResults';

class Search extends Component {
  state = {
    data: [
      {
        id: 1,
        name: 'Sophia Doo',
        email: 'sdoo@gmail.com',
        age: 20,
        location: 'San Francisco, CA',
        is_registered: 0,
      },
      {
        id: 2,
        name: 'Elon Musket',
        email: 'elon@gmail.com',
        age: 45,
        location: 'Los Angeles, CA',
        is_registered: 1,
      },
      {
        id: 3,
        name: 'Steve Steven',
        email: null,
        age: null,
        location: 'Austin, TX',
        is_registered: 0,
      },
      {
        id: 4,
        name: 'Emily B',
        email: 'emilyb@techstep.com',
        age: 23,
        location: 'Tampa, FL',
        is_registered: 0,
      },
      {
        id: 5,
        name: 'Erika Lynch',
        email: 'lynch@techstep.com',
        age: null,
        location: 'Dallas, TX',
        is_registered: 1,
      },
    ],
  };

  render() {
    return (
      <div className="mx-auto">
        <h1>Search Page</h1>
        <form className="form-inline mb-5" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              id="searchParams"
              type="text"
              className="form-control"
              placeholder="Search for a user"
            />
          </div>
          <button className="btn btn-primary ml-1">Search</button>
        </form>
        <SearchResults userData={this.state.data} />
      </div>
    );
  }
}

export default Search;
