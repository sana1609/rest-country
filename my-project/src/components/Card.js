import React from 'react';

const CountryCard = (props) =>{
    return (
        <div className="max-w-xs pb-8 shadow-md rounded">
            <div>
                <img className="w-full" src={props.flag}></img>
            </div>
            <div>
                <h3 className="px-6 py-3 font-bold text-1xl">{props.name}</h3>
            </div>
            <div>
                <ul className="px-6 py-1">
                    <li className="text-sm"><span className="font-semibold text-sm">Poplulation</span>: {props.plopulation}</li>
                    <li className="text-sm"><span className="font-semibold medium text-sm">Region</span>: {props.region}</li>
                    <li className="text-sm"><span className="font-semibold medium text-sm">Capital</span>: {props.capital}</li>
                </ul>
            </div>
        </div>
    )
}

export default CountryCard;
