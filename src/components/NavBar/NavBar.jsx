import React from 'react'
import CartWidget from '../CartWidget/CartWidget.jsx';
import './styles.css';

const NavBar = () => {
     return (
        <ul>
            <li className='logoIzq'>
                <a href="#Inicio">Logo de Ecommers</a>
            </li>
            <li>
                <a href="#nosotros">Quienes somos</a>
            </li>
            <li>
                <a href="#productos">Mas productos</a>
            </li>
            <li>
                <a href="#Contacto">Contactanos</a>
            </li>
            <CartWidget />
        </ul>
    );
};

export default NavBar;