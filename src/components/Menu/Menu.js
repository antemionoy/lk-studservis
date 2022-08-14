import { Link } from "react-router-dom"
import menu from "../../static/menu"
import Icon from "../Ui/Icon"
import './Menu.scss'

const Menu = () => {

    return (
        <ul className="menu">
            {menu.map((el, i) => (
                <li className="menu__item" key={i}>
                    <Link to={el.href} className='menu__link d-flex'>
                        <Icon name={el.icon} className='menu__icon' />
                        {el.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Menu