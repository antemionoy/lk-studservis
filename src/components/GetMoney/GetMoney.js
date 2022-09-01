import GetMoneyList from "./GetMoneyList"
import './GetMoney.scss'
import FormField from "../Form/FormField"
import Icon from "../Ui/Icon"
import { Link } from "react-router-dom"

const GetMoney = () => {
    return (
        <>
            <div className="print-money">
                <div className="print-money__сontainer container">
                    <div className="print-money__section section">
                        <h2 className="print-money__title title">Укажите сумму вывода, руб.</h2>
                        <div className="print-money__main d-flex">
                            <FormField value='455' className='print-money__field' />
                            <div className="print-money__info">
                                <div className="print-money__info-row d-flex">
                                    <p className="print-money__info-prop">Минимальная сумма вывода:</p>
                                    <p className="print-money__info-value">100 р</p>
                                </div>
                                <div className="print-money__info-row d-flex">
                                    <p className="print-money__info-prop">Для вывода доступно:</p>
                                    <p className="print-money__info-value">0 р</p>
                                </div>
                            </div>
                        </div>
                        <div className="print-money__important d-flex">
                            <Icon name='important-red' width='16' height='16' />
                            <p>Появились вопросы?</p>
                            <Link to='support'></Link>
                        </div>
                    </div>
                </div>
            </div>
            <GetMoneyList />
        </>
    )
}

export default GetMoney