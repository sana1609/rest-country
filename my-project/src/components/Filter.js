import React from 'react';

const FilterBox = (value) => {
    return (
        <div className="py-6">
            <select onChange = {value.selectValue} className="shadow-md bg-white focus:outline-none p-4 rounded">
                <option value=''>Filter by Region</option>
                <option value='Asia' className="bg-white p-4">Asia</option>
                <option value='America' >America</option>
                <option value='Europe' >Europe</option>
                <option value='Africa' >Africa</option>
                <option value='Oceania' >Oceania</option>
            </select>
        </div>
    )
}

export default FilterBox;