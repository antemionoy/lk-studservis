import PayList from "./PayList"
import './Pay.scss'
import FormField from "../Form/FormField"
import Icon from "../Ui/Icon"
import { Link } from "react-router-dom"

const Pay = () => {
    return (
        <section className="pay">
            <div className="pay__container container">
                <div className="pay__section section">
                    <div className="pay__head d-flex">
                        <h2 className="pay__title title">Укажите сумму вывода, руб.</h2>
                    </div>

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
                <div className="pay__section section">
                    <div className="pay__head d-flex">
                        <h2 className="pay__title title">Укажите сумму вывода, руб.</h2>
                        <p className="pay__descr">Выберите платежную систему для вывода денег</p>
                    </div>
                    <PayList />
                </div>
                <div className="pay__section section">
                    <div className="pay__head d-flex">
                        <h2 className="pay__title title title_h2">Заполните поля</h2>
                        <p className="pay__descr">Внимание! Вывод осуществляется на QIWI-кошельки Россия и Белоруссия.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pay