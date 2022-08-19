import Button from '../Ui/Button'
import './Orders.scss'

const Orders = () => {
    return (
        <section className="orders">
            <div className="orders__container container">
                <div className="orders__content section">
                    <div className="orders__head d-flex">
                        <h2 className="orders__title title title_h2">Последние заказы</h2>
                        <Button className='orders__button' size='large' bordered>
                            Все заказы
                        </Button>
                    </div>
                    <div className="oders__list">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Orders