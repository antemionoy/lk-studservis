import './PayAmount.scss'
import FormField from "../Form/FormField"
import Icon from "../Ui/Icon"
import { Link } from "react-router-dom"

const PayAmount = ({ amount }) => {
    return (
        <>
            <div className="pay-amount__main d-flex">
                <FormField type='text' placeholder={amount} className='pay-amount__field' />
                <div className="pay-amount__info">
                    <div className="pay-amount__info-row d-flex">
                        <p className="pay-amount__info-prop">Минимальная сумма вывода:</p>
                        <p className="pay-amount__info-value">100 р</p>
                    </div>
                    <div className="pay-amount__info-row d-flex">
                        <p className="pay-amount__info-prop">Для вывода доступно:</p>
                        <p className="pay-amount__info-value">0 р</p>
                    </div>
                </div>
            </div>
            <div className="pay-amount__important d-flex">
                <Icon name='important-red' className='pay-amount__important-icon' width='16' height='16' />
                <p className='pay-amount__important-text'>Появились вопросы?</p>
                <Link className='pay-amount__important-link' to='/support'>Напишите нам</Link>
            </div>
        </>
    )
}

export default PayAmount