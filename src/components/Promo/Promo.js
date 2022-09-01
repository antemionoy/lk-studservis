import cn from 'classnames'
import { useState } from 'react'
import './Promo.scss'

const Promo = () => {
    const [currentTab, setCurrentTab] = useState(0)

    const activeClass = (index, className) => cn(
        className,
        currentTab == index ? `${className}_active` : ''
    )

    const handleClick = (e) => {
        const id = e.target.id
        currentTab !== id ? setCurrentTab(id) : 0
    }

    const tabs = [
        {
            id: 0,
            name: 'Баннеры',
            content: ''
        },
        {
            id: 1,
            name: 'Формы'
        },
        {
            id: 2,
            name: 'Лендинги'
        },
        {
            id: 3,
            name: 'Метки'
        },
        {
            id: 4,
            name: 'Postback'
        },
    ]

    return (
        <section className="promo">
            <div className="promo__container container">
                <div className="promo__section section">
                    <div className="promo__head ">
                        <ul className="promo__tabs d-flex">
                            <li className="promo__tab">
                                <button type="button" id='0' className={activeClass(0, 'promo__button')} onClick={handleClick}>Переписка</button>
                            </li>
                            <li className="promo__tab">
                                <button type="button" id='1' className={activeClass(1, 'promo__button')} onClick={handleClick}>Правила и faq</button>
                            </li>
                        </ul>
                    </div>
                    <div className={activeClass(0, 'promo__content')}>
                       
                    </div>
                    <div className={activeClass(1, 'promo__content')}>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promo