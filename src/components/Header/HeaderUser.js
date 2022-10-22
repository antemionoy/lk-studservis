import './HeaderUser.scss'
import Icon from "../Ui/Icon"
import { Link } from 'react-router-dom'

const HeaderUser = ({ avatar }) => {
    return (
        <div className="header-user d-flex">
            <div className="header-user__info">
                <p className="header-user__name">Рады вас видеть, Имя!</p>
                <p className="header-user__date">Последний визит 26 июн. в 14:06</p>
            </div>
            <Link to='/profile'>
                {avatar ?
                    <img src={avatar} alt="" className="header-user__avatar" />
                    : <div className="header-user__circle"></div>
                }
            </Link>

            <button type="button" className="header-user__exit">
                <Icon name='exit' width='24' height='18' />
            </button>
        </div>
    )
}

export default HeaderUser