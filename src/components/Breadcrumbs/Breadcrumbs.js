import './Breadcrumbs.scss'
import { Link } from "react-router-dom"

const Breadcrumbs = () => {
    return (
        <ul className="breadcrumbs d-flex">
            <li className="breadcrumbs__item">
                <Link to='/home' className='breadcrumbs__link'>Главный экран</Link>
            </li>
            <li className="breadcrumbs__item">
                <Link to='/home' className='breadcrumbs__link breadcrumbs__link_active'>Показатели</Link>
            </li>
        </ul>
    )
}

export default Breadcrumbs