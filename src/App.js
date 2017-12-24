import React from 'react';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';
import logo from './logo.svg';

class App extends React.Component {
  searchYelp(term, location, sortBy) {
    alert(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
<<<<<<< HEAD
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={businesses}/>
=======
        <SearchBar />
        <BusinessList />
>>>>>>> parent of 76ebf73... Iteration 2
      </div>
    );
  }
}

export default App;
