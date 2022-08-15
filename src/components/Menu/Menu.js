import cn from "classnames"
import { useState } from "react"
import { Link } from "react-router-dom"
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

    return (
        <ul className="menu">
            {menu.map((el, i) => (
                <li className="menu__item" key={i}>
                    {el.subItems ?
                        <button type="button" className='menu__link d-flex' onClick={handleOpen(i)}>
                            <Icon name={el.icon} className='menu__icon' />
                            {el.name}
                        </button>
                        :
                        <Link to={el.href} className='menu__link d-flex'>
                            <Icon name={el.icon} className='menu__icon' />
                            {el.name}
                        </Link>
                    }
                    {el.subItems &&
                        <ul className={`menu__subitems ${dropdown === i ? 'menu__subitems_active' : ''}`}>
                            {el.subItems.map((subEl, subI) => (
                                <li className="menu__subitems-item" key={subI}>
                                    <Link to={subEl.href} className="menu__subitems-link">{subEl.name}</Link>
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