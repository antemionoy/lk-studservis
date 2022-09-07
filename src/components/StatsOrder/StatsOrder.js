import Pagination from '../Pagination/Pagination'
import ShortForm from '../ShortForm/ShortForm'
import Button from '../Ui/Button'
import './StatsOrder.scss'

const StatsOrder = () => {
    return (
        <section className='stats-order'>
            <div className="stats-order__container container">
                <div className="stats-order__section section">
                    <div className="stats-order__head d-flex">
                        <div className="stats-order__main">
                            <input type="date" className="stats-order__calendar" />
                            <select name="" id="" className="stats-order__select">
                                <option value="За все время">За все время</option>
                            </select>
                            <Button className='stats-order__button' bgcolor='blue' size='medium'>
                                Выгрузить excel
                            </Button>
                        </div>
                        <ShortForm
                            className='stats-order__search'
                            icon='search'
                            placeholder='Номер заказа (6 цифр)'
                        />
                    </div>
                    <table className="stats-order__table">

                    </table>

                    <Pagination className='stats-order__pagination' max={2} />
                </div>
            </div>
        </section>
    )
}

export default StatsOrder