import React from "react";
import Toggle from './toggle';

const NavBar = () => {
    return (
        <nav className = "w-full shadow-md bg-primary">
            <div className="container px-6 py-4 mx-auto flex flex-row justify-between items-center">
            <div>
                <h1 className="text-sm md:text-xl font-semibold text-primary">Where in the world?</h1>
            </div>
            <div>
              <Toggle />
            </div> 
            </div>
        </nav>
    )
}

export default NavBar;