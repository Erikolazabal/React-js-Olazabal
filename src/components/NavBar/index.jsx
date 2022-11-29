import React, { useContext } from "react";
import { Theme } from "../../contexts/Theme";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import './styles.css';

const NavBar = () => {
    const {themeColor, setThemeColor} = useContext(Theme)

    const handleChange = (event) => {
        setThemeColor(event.target.value)
    }


    return (
        <ul 
            className={themeColor === "light" ? "navbarStyle" : "navbarStyle-dark"}
        >
            <li className='logoIzq'>
                <Link to="/"><img src="../../../img/burger-icon.svg" alt="icon" className="iconNav" /></Link>
            </li>
            <li>
                <Link to="/category/New York, NY">New York, NY</Link>
            </li>
            <li>
                <Link to="/category/Los Angeles, CA">Los Angeles, CA</Link>
            </li>
            
            <select className="form-select-lg mx-auto" value={themeColor} onChange={handleChange}>
                <option value={'light'}>Light</option>
                <option value={'dark'}> Dark</option>
            </select>
            <CartWidget />
        </ul>
    );
};

export default NavBar;
