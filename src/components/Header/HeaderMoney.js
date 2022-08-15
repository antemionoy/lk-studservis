import './HeaderMoney.scss'
import Icon from "../Ui/Icon"

const HeaderMoney = ({ className }) => {
    return (
        <div className="header-money d-flex">
            <div className="header-money__element d-flex">
                <Icon name='wallet' width='24' height='22' className="header-money__icon"/>
                <div className="header-money__inner">
                    <p className="header-money__text">На счете</p>
                    <p className="header-money__total">135677</p>
                </div>
            </div>
            <div className="header-money__element d-flex">
                <Icon name='show' width='21' height='24' className="header-money__icon"/>
                <div className="header-money__inner">
                    <p className="header-money__text">Заморожено</p>
                    <p className="header-money__total header-money__total_color-grey">49679786</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderMoney