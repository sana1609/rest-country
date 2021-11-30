import "./index.css";
import React, { useState, useEffect } from "react";
import CountryCard from "./components/Card";
import SearchBar from "./components/Search";
import FilterBox from "./components/Filter";
import NavBar from "./components/Nav";
import { ThemeProvider } from "./ThemeContext";
import DetailPage from "./components/DetailsPage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/details/:alpha3Code" component={DetailPage}></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

const Home = () => {
  const [country, setCountry] = useState([]);
  const [term, setTerm] = useState("");

  const [filterValue, setValue] = useState("");
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/all`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
        setLoding(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen mx-auto bg-secondary pb-8">
      <div className="md:flex justify-between items-center container mx-auto">
        <div className="mx-6">
          <SearchBar handleChange={(e) => setTerm(e.target.value)} />
        </div>
        <div className="order-last mx-6">
          <FilterBox selectValue={(e) => setValue(e.target.value)} />
        </div>
      </div>
      {loading ? (
        <h1 className="text-xl text-center text-primary ">Loading...</h1>
      ) : (
        <div className="grid p-6 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {country.length > 0 &&
            country
              .filter((item) => item.region.includes(filterValue))
              .filter((item) => item.name.toLowerCase().includes(term))
              .map((item) => (
                <Link key={item.alpha3Code} to={`/details/${item.alpha3Code}`}>
                  <CountryCard item={item} />
                </Link>
              ))}
        </div>
      )}
    </div>
  );
};

export default App;
