import './Sidebar.scss'
import Logo from '@assets/images/logo.png'
import Icon from '../Ui/Icon'
import Menu from '../Menu/Menu'


const Sidebar = () => {
    return (
        <div className="sidebar d-flex">
            <div className="sidebar__top d-flex">
                <img src={Logo} alt="" className="sidebar__logo" />
                <p className="sidebar__descr">партнерская программа</p>
            </div>
            <div className="sidebar__middle">
                <Menu />
            </div>
            <button type='button' className="sidebar__up">
                наверх
            </button>
        </div>
    )
}

export default Sidebar