import './index.css';
import React, {useState, useEffect} from 'react';
import CountryCard from './components/Card';

function App() {

  const [images, setimages] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then( res => res.json())
    .then(data => {
      setimages(data);
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-1">
      {images.map(item => {
        <CountryCard props = {item}/>
      })}
      </div>
    </div>
  );
}

export default App;
