import React from 'react';
import BackButton from './Button';


const CardDetails = ( {countryInfo} ) => {

    const {flag,name,nativeName,region,subregion,population,capital,topLevelDomain,currencies,languages,borders} = countryInfo
    
    return (
        <div className = 'bg-secondary h-screen  '>
            <BackButton />
            <div className= 'flex container m-auto'>
                <div className = 'flex-1 p-8'>
                    <img src = {flag}></img>
                </div>
                <div className = 'flex-1 p-8 '>
                    <h1 className='text-primary text-4xl p-8 font-bold'>{name}</h1>
                    <div className='flex'>
                        <ul className="p-8">
                            <li className="text-sm text-primary py-2"><span className="font-bold text-sm">Native Name</span>: {nativeName}</li>
                            <li className="text-sm text-primary py-2"><span className="font-bold text-sm text-primary">Population</span>: {population} </li>
                            <li className="text-sm text-primary py-2"><span className="font-bold medium text-sm">Region</span>: {region}</li>
                            <li className="text-sm text-primary py-2"><span className="font-bold medium text-sm">sub Region</span>: {subregion}</li>
                            <li className="text-sm text-primary py-2"><span className="font-bold medium text-sm">Capital</span>: {capital}</li>
                        </ul>
                        <ul className='p-8'>
                            <li className="text-sm text-primary py-2"><span className="font-bold medium text-sm">Top Level Domain</span>: {topLevelDomain}</li>
                            <li className="text-sm text-primary py-2"><span className="font-bold medium text-sm">Languages
                            </span>: { languages && languages.map(currency => <span>{currency.name}</span>) }</li>
                            <li className="text-sm text-primary py-2"><span className="font-bold medium text-sm">currencies
                            </span>: {currencies && currencies.map(lang => <span>{lang.name}</span>)}</li>
                        </ul>
                    </div>
                    <div className='p-8'>
                        <p className='font-bold medium text-sm text-primary'>Border Countries: {borders && borders.map(border => <span className='p-3'>{border}</span>)} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails;