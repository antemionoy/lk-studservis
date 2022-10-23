import cn from "classnames"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import menu from "../../static/menu"
import Icon from "../Ui/Icon"
import './Menu.scss'

const Menu = () => {
    const [dropdown, setDropdown] = useState(null)

    const handleOpen = (index) => {
        return (e) => {
            e.preventDefault()
            setDropdown(dropdown === index ? null : index)
        }
    }


    const linkClasses = (item, isActive, className) => cn(
        className,
        {
            [`${className}_active`]: isActive
        }
    )

    return (
        <ul className="menu">
            {menu.map((el, i) => (
                <li className="menu__item" key={i}>
                    {el.subItems ?
                        <button type="button" className='menu__link' onClick={handleOpen(i)}>
                            <Icon name={el.icon} className='menu__icon' />
                            {el.name}
                        </button>
                        :
                        <NavLink to={el.href} className={({ isActive }) => linkClasses(el, isActive, 'menu__link')}>
                            <Icon name={el.icon} className='menu__icon' />
                            {el.name}
                        </NavLink>
                    }
                    {el.subItems &&
                        <ul className={`menu__subitems ${dropdown === i ? 'menu__subitems_active' : ''}`}>
                            {el.subItems.map((subEl, subI) => (
                                <li className="menu__subitems-item" key={subI}>
                                    <NavLink to={subEl.href}
                                        className={({ isActive }) => linkClasses(subEl, isActive, 'menu__subitems-link')}>
                                        {subEl.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    }
                </li>
            ))}
        </ul>
    )
}

export default Menu