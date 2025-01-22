import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./index.module.scss";
const Header = () => {
  return (
<header>
    <div className={style["container"]}>
        <div className="logo">
            <h2>Selling<span>.</span></h2>
        </div>
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/add"}>Add</NavLink></li>
            <li><NavLink to={"/product"}>Product</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
        </ul>

        <div className="ikons"></div>
    </div>
</header>
  )
}

export default Header
