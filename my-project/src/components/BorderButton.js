import React from 'react';

const BorderButton = ({countryCode}) => {
    return (
        <button className='m-2 bg-primary p-3 text-primary shadow-md'>
        {countryCode}</button>
    )
}

export default BorderButton;