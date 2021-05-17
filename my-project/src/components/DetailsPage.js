import React, {useState, useEffect} from 'react';
import CardDetails from './CardDetails';

import { useParams } from "react-router-dom";

const DetailPage = () => {

    let { alpha3Code } = useParams();

    const [countryDetail, setCountryDetail] = useState({});

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`)
        .then( res => res.json())
        .then(data => {
            //console.log({data});
            setCountryDetail({...data});
        
        })
        .catch(err => console.log(err))
    },[alpha3Code])

    return (
        <>
            {countryDetail ? (<CardDetails key = {countryDetail.alpha3Code} countryInfo = {countryDetail} />) : (<div>Loding...</div>)}
        </>
    );
}

export default DetailPage;
