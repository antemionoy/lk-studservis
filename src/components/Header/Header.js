import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import './Header.scss'
import HeaderMoney from "./HeaderMoney";
import HeaderUser from "./HeaderUser";
import avatar from '@assets/images/manager.jpeg'

const Header = () => {
    return (
        <header className="header">
            <div className="header__top">
                <div className="header__container container d-flex">
                    <HeaderMoney className='header__money' />
                    <HeaderUser className='header__user' avatar={avatar} />
                </div>
            </div>
            <div className="header__bottom d-flex">
                <div className="header__container container d-flex">
                    <Breadcrumbs />
                </div>
            </div>
        </header>
    )
}

export default Header;