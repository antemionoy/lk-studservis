import React from "react";
import './Header.scss'
import HeaderMoney from "./HeaderMoney";
import HeaderUser from "./HeaderUser";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container container d-flex">
                <HeaderMoney className='header__money' />
                <HeaderUser className='header__user' />
            </div>
        </header>
    )
}

export default Header;