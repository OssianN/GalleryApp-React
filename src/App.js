import React, { useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './screens/home/Home';
import About from './screens/about/About';
import SearchResults from './screens/searchResults/SearchResults';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);


  const handleSearch = (search) => {
    setSearchValue(search);
  };
  
  const handlePage = (number) => {
    console.log(number, 'number')
    setPage(number);
  };
  
  useEffect(() => {
    const handleLocalStorage = () => {
      const localSearches = JSON.parse(window.localStorage.getItem('localSearches')) || [];
      if (!localSearches.includes(searchValue)) {
        localSearches.push(searchValue);
        window.localStorage.setItem('localSearches', JSON.stringify(localSearches));
      }
    } 
    handleLocalStorage();
  }, [searchValue]);
  
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <div>
              <Home handleSearch={handleSearch} handlePage={handlePage} />
            </div>
          </Route>
          <Route path="/about">
            <div>
            <About />
            </div>
          </Route>
          <Route path="/search">
            <SearchResults handleSearch={handleSearch} search={searchValue} page={page} handlePage={handlePage} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
