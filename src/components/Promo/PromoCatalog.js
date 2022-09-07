import { useDispatch } from 'react-redux'
import Pagination from '../Pagination/Pagination'
import Button from '../Ui/Button'
import './PromoCatalog.scss'
import { setPopup, deletePopup } from '../../slices/popupSlice';

const PromoCatalog = ({ max, items, category, grid }) => {
    const dispatch = useDispatch()

    const openPopup = (id, title) => {
        return () => {
            let payload = {
                id: id,
                title: title
            }
            dispatch(setPopup(payload))
        }
    }

    return (
        <div className="promo-catalog d-flex">
            <div className="promo__filter promo-filter">

            </div>
            <ul className="promo-catalog__list d-flex wrap">
                {items.length > 0 && items.map((el, i) => (
                    <li className={`promo-catalog__col promo-catalog__col_grid-${grid}`} key={i} >
                        <div className="promo-catalog__item d-flex">
                            <div className="promo-catalog__hint">
                                {el.hint ?? category}
                            </div>
                            <img src={el.image} className='promo-catalog__image' alt={el.name} title={el.name} />
                            <Button className='promo-catalog__button' bgcolor='blue' size='large' onClick={openPopup('popup-promo', el.hint)}>
                                Получить код
                            </Button>
                        </div>
                    </li>
                ))}
            </ul>
            {items.length > 0 &&
                <Pagination className='promo-catalog__pagination' max={max} />
            }
        </div>
    )
}

export default PromoCatalog