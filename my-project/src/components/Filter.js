import React from 'react';

const FilterBox = () => {
    return (
        <div className="py-6">
            <select className="shadow-md bg-white focus:outline-none p-4 rounded">
                <option>Filter by Region</option>
                <option className="bg-white p-4">Asia</option>
                <option>America</option>
                <option>Europe</option>
                <option>Africa</option>
                <option>Oceania</option>
            </select>
        </div>
    )
}

export default FilterBox;