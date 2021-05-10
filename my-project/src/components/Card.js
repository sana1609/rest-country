import React from 'react';

const CountryCard = (items) =>{
    return (
        <div className="max-w-xs pb-8 shadow-md rounded bg-primary">
            <div>
                <img className="w-full" src={items.flag}></img>
            </div>
            <div>
                <h3 className="px-6 py-3 font-bold text-1xl text-primary">{items.name}</h3>
            </div>
            <div>
                <ul className="px-6 py-1">
                    <li className="text-sm text-primary"><span className="font-semibold text-sm text-primary">Population</span>: {items.population}</li>
                    <li className="text-sm text-primary"><span className="font-semibold medium text-sm text-primary">Region</span>: {items.region}</li>
                    <li className="text-sm text-primary"><span className="font-semibold medium text-sm text-primary">Capital</span>: {items.capital}</li>
                </ul>
            </div>
        </div>
    )
}

export default CountryCard;
