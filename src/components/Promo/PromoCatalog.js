import Pagination from '../Pagination/Pagination'
import Button from '../Ui/Button'
import './PromoCatalog.scss'

const PromoCatalog = ({ max, items, category }) => {
    return (
        <div className="promo-catalog d-flex">
            <div className="promo__filter promo-filter">

            </div>
            <ul className="promo-catalog__list d-flex wrap">
                {items.length > 0 && items.map((el, i) => (
                    <li className="promo-catalog__col" key={i}>
                        <div className="promo-catalog__item d-flex">
                            <div className="promo-catalog__hint">
                                {el.hint ?? category}
                            </div>
                            <img src={el.image} className='promo-catalog__image' alt={el.name} title={el.name} />
                            <Button className='promo-catalog__button' bgcolor='blue' size='large'>
                                Получить код
                            </Button>
                        </div>
                    </li>
                ))}
            </ul>
            <Pagination className='promo-catalog__pagination' max={max} />
        </div>
    )
}

export default PromoCatalog