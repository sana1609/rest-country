import React from 'react';

const CardDetails = ({countryInfo}) => {

    //console.log({key : props})
    //console.log(props.name);
    
    return (
        <div className = 'bg-secondary h-screen '>
            <div className= 'flex'>
                <div className = 'flex-1'>
                    <img src = {countryInfo.flag}></img>
                </div>
                <div className = 'flex-1'>
                    <h1>{countryInfo.name}</h1>
                    <div>
                        <ul className="px-6 py-1">
                            <li className="text-sm"><span className="font-semibold text-sm">Native Name</span>:{countryInfo.nativeName}</li>
                            <li className="text-sm text-primary"><span className="font-semibold text-sm text-primary">Population</span>: {countryInfo.population}</li>
                            <li className="text-sm"><span className="font-semibold medium text-sm">Region</span>:{countryInfo.region}</li>
                            <li className="text-sm"><span className="font-semibold medium text-sm">sub Region</span>:{countryInfo.subregion}</li>
                            <li className="text-sm"><span className="font-semibold medium text-sm">Capital</span>:{countryInfo.capital}</li>

                            <li className="text-sm"><span className="font-semibold medium text-sm">Top Level Domain</span>:{countryInfo.capital}</li>
                            <li className="text-sm"><span className="font-semibold medium text-sm">Capital</span>:{countryInfo.currencies}</li>
                            <li className="text-sm"><span className="font-semibold medium text-sm">Capital</span>:{countryInfo.languages}</li>
                        </ul>
                    </div>
                    <div>
                        Border Countries
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails;