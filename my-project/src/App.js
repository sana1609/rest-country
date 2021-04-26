import './index.css';
import React, {useState, useEffect} from 'react';
import CountryCard from './components/Card';
import SearchBar from './components/Search';
import FilterBox from './components/Filter';
import NavBar from './components/Nav';
import DetailPage from './components/CardDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component = {Home}></Route>
        <Route path="/details" component = {DetailPage}></Route>
      </Switch>
    </Router>
  );
}


const Home = () => {

  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then( res => res.json())
    .then(data => {
      setCountry(data);
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <div className="mx-auto">
      <div className = "flex flex-row justify-between items-center container mx-auto">
        <div>
          <SearchBar />
        </div>
        <div className= "order-last">
          <FilterBox />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 container mx-auto">
      {country.map(item => (
          <Link to="/details" >
            <CountryCard key = {item.alpha3Code} {...item}/>
          </Link>
      ))}
      </div>
    </div>
  )
}

export default App;
