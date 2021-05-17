import { FiSearch } from "react-icons/fi";
import React from 'react'
 
const SearchBar = (input) => {

    return (
        <div className="py-6">
            <form className ="rounded h-full p-1 shadow-md bg-primary">
                <FiSearch size = "1.5rem" color="grey" style = {{ margin: "1rem", display:"inline"}}/>
                <input onChange={input.handleChange} className="bg-transparent border border-transparent rounded focus:outline-none " 
                    name = "country" placeholder="Search for a country..."></input>
            </form>
        </div>
    )
}

export default SearchBar; 