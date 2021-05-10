import React from 'react';

const FilterBox = (value) => {
    return (
        <div className="py-6">
            <select onChange = {value.selectValue} className="shadow-md text-primary bg-primary focus:outline-none p-4 rounded">
                <option className= 'px-2 py-2' value=''>Filter by Region</option>
                <option className= 'px-2 py-2' value='Asia' className=" p-4">Asia</option>
                <option className= 'px-2 py-2' value='America' >America</option>
                <option className= 'px-2 py-2' value='Europe' >Europe</option>
                <option className= 'px-2 py-2' value='Africa' >Africa</option>
                <option className= 'px-2 py-2'  value='Oceania' >Oceania</option>
            </select>
        </div>
    )
}

export default FilterBox;