import React from 'react';
import { FiSearch } from "react-icons/fi";
 
const SearchBar = () => {
    return (
        <div className="py-6">
            <form className ="rounded max-w-md p-1 shadow-md">
                <FiSearch size = "1.5rem" color="grey" style = {{ margin: "1rem", display:"inline"}}/>
                <input className=" border border-transparent rounded focus:outline-none " 
                    name = "country" placeHolder="Search for a country..."></input>
            </form>
        </div>
    )
}

export default SearchBar; 