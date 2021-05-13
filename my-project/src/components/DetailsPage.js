import React, {useState, useEffect} from 'react';
import CardDetails from './CardDetails';

import { useParams } from "react-router-dom";
  

const DetailPage = () => {

    let { alpha3Code } = useParams();
    console.log(alpha3Code);

    const [countryDetail, setCountryDetail] = useState(null);

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`)
        .then( res => res.json())
        .then(data => {
            //console.log({data});
            setCountryDetail({...data});
        
        })
        .catch(err => console.log(err))
    },[alpha3Code])


    //console.log({countryDetail});
    
    return (
        <>
            {countryDetail ? (<CardDetails  countryInfo = {countryDetail} />) : (<div>Loding..</div>)}
        </>
    );
}

export default DetailPage;