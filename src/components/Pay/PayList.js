import './PayList.scss'

const PayList = () => {
    return (
        <div className='pay-list'>
            <div className="pay-list__row pay-list__head d-grid">
                <div className="pay-list__col"></div>
                <div className="pay-list__col">Способ вывода</div>
                <div className="pay-list__col">Срок</div>
                <div className="pay-list__col">Вы получите</div>
            </div>
            <div className="pay-list__row d-grid">
                <div className="pay-list__col">
                    <input type="text" className="pay-list__radio" />
                </div>
                <div className="pay-list__col">
                    <div className="pay-list__icons d-flex">

                    </div>
                </div>
                <div className="pay-list__col">
                    до 2 рабочих дней
                </div>
                <div className="pay-list__col">
                    430,01 р
                </div>
            </div>
        </div>
    )
}

export default PayList