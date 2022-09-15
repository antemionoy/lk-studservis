import './TabsContent.scss'
import cn from 'classnames'
import { useContext } from 'react';
import { TabsContext } from '../../contexts/TabsContext'

const TabsContent = ({ id, children, className}) => {
    const [context, setContext] = useContext(TabsContext);

    const activeClass = (index, className) => cn(
        className,
        context == index ? `${className}_active` : ''
    )

    return (
        <div className={activeClass(id, 'tabs-content')}>
            {children}
        </div>
    )
}

export default TabsContent