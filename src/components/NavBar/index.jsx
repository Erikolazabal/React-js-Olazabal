import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import './styles.css';

const NavBar = () => {

    return (
        <ul className='navbarStyle'>
            <li className='logoIzq'>
                <Link to="/"><img src="../../../img/burger-icon.svg" alt="icon" className="iconNav" /></Link>
            </li>
            <li>
                <Link to="/category/price_lte=50">Hasta $50</Link>
            </li>
            <li>
                <Link to="/category/price_gte=100">Más de $100</Link>
            </li>
            <CartWidget />
        </ul>
    );
};

export default NavBar;
