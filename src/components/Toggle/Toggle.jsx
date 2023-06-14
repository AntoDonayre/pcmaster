import React, { useState } from 'react';
import './Toggle.css'
import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav>
                <div className="mobile-menu">
                    <button className="menu-button" onClick={toggleMenu}>
                        <span></span><span></span><span></span>
                    </button>
                    {isOpen && (
                        <ul className='menu-list'>
                            <li className="lista">
                                <NavLink to={`/categoria/pc-escritorio`} className="navlink"> PC´s de escritorio </NavLink>
                            </li>
                            <li>
                                <NavLink to={`/categoria/laptops`} className="navlink"> Laptops </NavLink>
                            </li>
                            <li>
                                <NavLink to={`/categoria/componentes`} className="navlink"> Componentes para pc </NavLink>
                            </li>
                            <CartWidget />
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default MobileMenu;
