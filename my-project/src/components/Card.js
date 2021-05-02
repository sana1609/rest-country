import React from 'react';

const CountryCard = (items) =>{
    return (
        <div className="max-w-xs pb-8 shadow-md rounded">
            <div>
                <img className="w-full" src={items.flag}></img>
            </div>
            <div>
                <h3 className="px-6 py-3 font-bold text-1xl">{items.name}</h3>
            </div>
            <div>
                <ul className="px-6 py-1">
                    <li className="text-sm"><span className="font-semibold text-sm">Population</span>: {items.population}</li>
                    <li className="text-sm"><span className="font-semibold medium text-sm">Region</span>: {items.region}</li>
                    <li className="text-sm"><span className="font-semibold medium text-sm">Capital</span>: {items.capital}</li>
                </ul>
            </div>
        </div>
    )
}

export default CountryCard;
