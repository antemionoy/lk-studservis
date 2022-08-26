import cn from 'classnames'
import { useState } from 'react'
import Chat from '../Chat/Chat'
import Faq from '../Faq/Faq'
import './Support.scss'
import SupportSidebar from './SupportSidebar'
import Manager from '@/assets/images/manager.jpeg'

const Support = () => {
    const [currentTab, setCurrentTab] = useState(0)

    const activeClass = (index, className) => cn(
        className,
        currentTab == index ? `${className}_active` : ''
    )

    const handleClick = (e) => {
        const id = e.target.id
        currentTab !== id ? setCurrentTab(id) : 0
    }

    return (
        <section className="support">
            <div className="support__container container">
                <div className="support__section section">
                    <div className="support__head ">
                        <ul className="support__tabs d-flex">
                            <li className="support__tab">
                                <button type="button" id='0' className={activeClass(0, 'support__button')} onClick={handleClick}>Переписка</button>
                            </li>
                            <li className="support__tab">
                                <button type="button" id='1' className={activeClass(1, 'support__button')} onClick={handleClick}>Правила и faq</button>
                            </li>
                        </ul>
                    </div>
                    <div className={activeClass(0, 'support__content')}>
                        <div className="support__row d-grid">
                            <Chat
                                className='support__chat'
                                managerName='Анастасия Иванова'
                                managerPhoto={Manager}
                            />
                            <SupportSidebar
                                className='support__sidebar'
                                managerName='Анастасия Иванова'
                                managerPhoto={Manager}
                            />
                        </div>
                    </div>
                    <div className={activeClass(1, 'support__content')}>
                        <Faq className='support__faq' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Support