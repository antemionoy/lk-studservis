import './PayAmount.scss'
import FormField from "../Form/FormField"
import Icon from "../Ui/Icon"
import { Link } from "react-router-dom"
import cn from 'classnames'

const PayAmount = ({ amount, minAmount, handler, error }) => {
    const classField = cn(
        'pay-amount__field',
        {['pay-amount__field_error']: error.status },
    )
    
    return (
        <>
            <div className="pay-amount__main d-flex">
                {error.status &&
                    <div className="pay-amount__error d-flex">
                        <Icon name='warning' className='pay-amount__icon' width='13' height='13' />
                        {error.value < minAmount ?
                            <span>Сумма не должна быть менее {minAmount} руб.</span>
                            :
                            <span>Сумма больше доступной для вывода!</span>
                        }
                    </div>
                }
                <FormField
                    type='number'
                    placeholder={amount}
                    className={classField}
                    handler={handler}
                />
                <div className="pay-amount__info">
                    <div className="pay-amount__info-row d-flex">
                        <p className="pay-amount__info-prop">Минимальная сумма вывода:</p>
                        <p className="pay-amount__info-value">{minAmount} р</p>
                    </div>
                    <div className="pay-amount__info-row d-flex">
                        <p className="pay-amount__info-prop">Для вывода доступно:</p>
                        <p className="pay-amount__info-value">{amount} р</p>
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