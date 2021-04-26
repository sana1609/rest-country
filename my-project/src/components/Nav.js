import React from "react";
import { FiMoon } from "react-icons/fi";

const NavBar = () => {
    return (
        <nav className = "bg-wihite w-full shadow-md">
            <div className="container mx-auto flex flex-row justify-between items-center">
            <div>
                <h1 className="text-xl font-semibold">Where in the world?</h1>
            </div>
            <div>
                <FiMoon size = "1.5rem" color="grey" style = {{ margin: "1rem", display:"inline"}}/><span>Dark Mode</span>
            </div> 
            </div>
        </nav>
    )
}

export default NavBar;