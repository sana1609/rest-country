import React,{useContext} from 'react';
import { ThemeContext } from '../ThemeContext';
import { FaMoon } from "react-icons/fa";

const Toggle = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    function isDark() {
      return theme === "dark"
    }

    return (
        <label>
          <input className='hidden'
            type="checkbox"
            checked={isDark()}
            onChange={e => setTheme(e.target.checked ? "dark" : "light")}
          ></input>
            <FaMoon size = "1.5rem" color="grey" style = {{ margin: ".5rem", display:"inline"}}/><span className = "text-sm text-primary">Dark Mode</span>
        </label>
    )
}

export default Toggle;

