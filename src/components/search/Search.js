import React from 'react';
import { withRouter } from 'react-router-dom';

function Search(props) {

  const handleSearch = e => {
    e.preventDefault();
    props.handleSearch(e.target.firstChild.value);
    e.target.firstChild.value = '';
    props.history.push('/search');
  }
  
  const localSearches = JSON.parse(window.localStorage.getItem('localSearches'));

  return (
    <form onSubmit={handleSearch}>
      <input list="prev-options" type="text" placeholder="Search for image" className="searchBar" />
      <datalist id="prev-options">
          {localSearches?.map((search, i) => 
          <option key={i} value={search} />)}
      </datalist>
      <button type="submit">Search</button>
    </form>    
  );
}

export default withRouter(Search);