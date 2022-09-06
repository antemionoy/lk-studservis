import './Tabs.scss'
import cn from 'classnames'
import React, { useState } from 'react'
import { TabsContext } from '../../context/TabsContext'

const Tabs = ({ nav, children, className }) => {
    const [currentTab, setCurrentTab] = useState(3)

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
                <ul className="tabs__nav d-flex">
                    {nav.map((el, i) => (
                        <li className="tabs__tab" key={i}>
                            <button type="button" id={i} className={activeClass(i, 'tabs__button')} onClick={handleClick}>{el.name}</button>
                        </li>
                    ))}
                </ul>
                {children}
            </div>
        </TabsContext.Provider>
    )
}

export default Tabs