import React from "react";
import Toggle from './toggle';

const NavBar = () => {
    return (
        <nav className = "bg-wihite w-full shadow-md bg-primary">
            <div className="container mx-auto flex flex-row justify-between items-center">
            <div>
                <h1 className="text-xl font-semibold text-primary">Where in the world?</h1>
            </div>
            <div>
              <Toggle />
            </div> 
            </div>
        </nav>
    )
}

export default NavBar;