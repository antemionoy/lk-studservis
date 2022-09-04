import React, { useMemo, useRef } from 'react'
import Icon from '../Ui/Icon'
import './PayList.scss'

const PayList = ({ methods, changeMethod }) => {
    const refsNames = useMemo(() => {
        const refs = {}
        methods.forEach((item) => {
            refs[item.name] = React.createRef(null)
        })
        return refs
    }, [methods])

    const handlerClick = ({ name }) => {
        refsNames[name].current.checked = true
        changeMethod(name)
    }

    return (
        <div className='pay-list'>
            <div className="pay-list__row pay-list__head d-grid">
                <div className="pay-list__col"></div>
                <div className="pay-list__col">Способ вывода</div>
                <div className="pay-list__col">Срок</div>
                <div className="pay-list__col">Вы получите</div>
            </div>
            {methods.map((method, i) => (
                <div className="pay-list__row d-grid" key={method.name} onClick={() => handlerClick(method)}>
                    <div className="pay-list__col">
                        <input type="radio" name={'pay-method'} value={method.name} className="pay-list__radio" ref={refsNames[method.name]} />
                    </div>
                    <div className="pay-list__col">
                        <div className="pay-list__icons d-flex">
                            {method.name == 'phone' &&
                                <>
                                    <Icon name='bilayn' className='pay-list__icon pay-list__icon_circle' width='28' height='28' />
                                    <Icon name='mts' className='pay-list__icon pay-list__icon_circle' width='28' height='28' />
                                    <Icon name='megafon' className='pay-list__icon pay-list__icon_circle' width='28' height='28' />
                                </>
                            }
                            {method.name == 'qiwi' &&
                                <Icon name='qiwi' className='pay-list__icon' width='67' height='21' />
                            }
                            {method.name == 'bank-card' &&
                                <>

                                    <Icon name='master-card' className='pay-list__icon' width='50' height='26' />
                                    <Icon name='visa' className='pay-list__icon' width='68' height='22' />
                                </>
                            }
                            {
                                method.name == 'you-money' &&
                                <Icon name='you-money' className='pay-list__icon' width='118' height='26' />
                            }
                            {
                                method.name == 'web-money' &&
                                <Icon name='web-money' className='pay-list__icon' width='118' height='28' />
                            }
                        </div>
                    </div>
                    <div className="pay-list__col">
                        {method.time}
                    </div>
                    <div className="pay-list__col">
                        {method.sum} р
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PayList