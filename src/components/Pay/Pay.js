import './Pay.scss'
import PayList from "./PayList"
import PayAmount from "./PayAmount"
import PayForm from './PayForm'
import { useState } from 'react'


const Pay = () => {
    let [currentAmount, setCurrenAmount] = useState(420)
    let [currentMethod, setCurrenMethod] = useState('phone')

    const payMethods = [
        {
            name: 'phone',
            time: 'до 2 рабочих дней',
            sum: '430,01',
            fields: [
                {
                    label: 'Номер телефона',
                    type: 'tel',
                    name: 'pay-phone',
                    error: false
                }
            ]
        },
        {
            name: 'qiwi',
            time: 'до 2 рабочих дней',
            sum: '430,01',
            fields: [
                {
                    label: 'Номер Qiwi кошелька',
                    type: 'tel',
                    name: 'pay-phone',
                    error: false
                }
            ]
        },
        {
            name: 'bank-card',
            time: 'до 2 рабочих дней',
            sum: '430,01',
            fields: [
                {
                    label: 'Номер карты',
                    type: 'text',
                    name: 'pay-phone',
                    error: false
                },
                {
                    label: 'Держатель карты',
                    type: 'text',
                    name: 'pay-phone',
                    error: false
                },
                {
                    label: 'Карта действительна до',
                    type: 'text',
                    name: 'pay-phone',
                    error: false
                }
            ]
        },
        {
            name: 'you-money',
            time: 'до 2 рабочих дней',
            sum: '430,01',
            fields: [
                {
                    label: 'Номер кошелька',
                    type: 'tel',
                    name: 'pay-phone',
                    error: false
                }
            ]
        },
        {
            name: 'web-money',
            time: 'до 2 рабочих дней',
            sum: '430213,01',
            fields: [
                {
                    label: 'Номер WMZ кошелька',
                    type: 'tel',
                    name: 'pay-phone',
                    error: false
                }
            ]
        },
    ]

    return (
        <section className="pay">
            <div className="pay__container container">
                <div className="pay__section section">
                    <div className="pay__head d-flex">
                        <h2 className="pay__title title">Укажите сумму вывода, руб.</h2>
                    </div>
                    <PayAmount amount={currentAmount} />
                </div>
                <div className="pay__section section">
                    <div className="pay__head d-flex">
                        <h2 className="pay__title title">Укажите сумму вывода, руб.</h2>
                        <p className="pay__descr">Выберите платежную систему для вывода денег</p>
                    </div>
                    <PayList
                        methods={payMethods}
                        changeMethod={setCurrenMethod}
                    />
                </div>
                <div className="pay__section section">
                    <div className="pay__head d-flex">
                        <h2 className="pay__title title title_h2">Заполните поля</h2>
                        {currentMethod === 'qiwi' &&
                            < p className="pay__descr pay__descr_color-red">Внимание! Вывод осуществляется на QIWI-кошельки Россия и Белоруссия.</p>
                        }
                    </div>
                    <PayForm method={currentMethod} payMethods={payMethods} />
                </div>
            </div>
        </section >
    )
}

export default Pay