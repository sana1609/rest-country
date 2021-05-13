import React,{useContext} from 'react';
import { ThemeContext } from '../ThemeContext';
import { FiMoon } from "react-icons/fi";

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
            <FiMoon size = "1.5rem" color="grey" style = {{ margin: "1rem", display:"inline"}}/><span className = "text-primary">Dark Mode</span>
        </label>
    )
}

export default Toggle;

