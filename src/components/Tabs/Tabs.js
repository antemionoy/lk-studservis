import './Tabs.scss'
import cn from 'classnames'
import React, { useState } from 'react'
import { TabsContext } from '../../context/TabsContext'

const Tabs = ({ nav, children, className, info }) => {
    const [currentTab, setCurrentTab] = useState(0)

    const tabClass = cn(
        'tabs',
        className,
    )

    const activeClass = (index, className) => cn(
        className,
        currentTab == index ? `${className}_active` : ''
    )

    const handleClick = (e) => {
        const id = e.target.id
        currentTab !== id ? setCurrentTab(id) : 0
    }

    return (
        <TabsContext.Provider value={[currentTab, setCurrentTab]}>
            <div className={tabClass}>
                <div className="tabs__head d-flex">
                    <ul className="tabs__nav d-flex">
                        {nav.map((el, i) => (
                            <li className="tabs__tab" key={i}>
                                <button type="button" id={i} className={activeClass(i, 'tabs__button')} onClick={handleClick}>{el.name}</button>
                            </li>
                        ))}
                    </ul>
                    {info?.length > 0 &&
                        <div className="tabs__info d-grid">
                            {info.map(({ name, value }, i) => (
                                <div className="tabs__info-el" key={i}>
                                    <p className='tabs__info-name'>{name}</p>
                                    <p className='tabs__info-value'>{value}</p>
                                </div>
                            ))}
                        </div>
                    }
                </div>
                {children}
            </div>
        </TabsContext.Provider>
    )
}

export default Tabs