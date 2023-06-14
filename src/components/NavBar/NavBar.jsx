import React from "react"
import MobileMenu from "../Toggle/Toggle"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header className="header">
      <Link to={"/"} className="link">
        <h1 className="brand"><strong>PC</strong>master</h1>
      </Link>
      <nav className="nav">
        <ul className="ul">
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
        <MobileMenu />
      </nav>
    </header>
  )
}

export default NavBar;