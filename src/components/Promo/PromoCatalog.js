import { useDispatch } from 'react-redux'
import Pagination from '../Pagination/Pagination'
import Button from '../Ui/Button'
import './PromoCatalog.scss'
import { setPopup, deletePopup } from '../../slices/popupSlice';
import FormField from '../Form/FormField';
import Filter from '../Ui/Filter';

const PromoCatalog = ({ max, items, category, grid, filter }) => {
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

    const options = [
        {
            name: 'Cайты',
            value: 'sites'
        },
        {
            name: 'Контекстная реклама',
            value: 'Контекстная реклама'
        },
        {
            name: 'Контекстная реклама',
            value: 'Контекстная реклама'
        },
        {
            name: 'Контекстная реклама',
            value: 'Контекстная реклама'
        },
    ]

    return (
        <div className="promo-catalog d-flex">
            {!!filter &&
                <Filter className='promo__filter'>
                    <FormField
                        type='select'
                        className='filter__field'
                        options={options}
                        currentSelect='Выберите категорию'
                    />
                    <FormField
                        type='select'
                        className='filter__field'
                        options={options}
                        currentSelect='Выберите размер'
                    />
                    <FormField
                        type='select'
                        className='filter__field'
                        options={options}
                        currentSelect='Default'
                    />
                </Filter>
            }
            <ul className="promo-catalog__list d-flex wrap">
                {items.length > 0 && items.map((el, i) => (
                    <li className={`promo-catalog__col promo-catalog__col_grid-${grid}`} key={i} >
                        <div className="promo-catalog__item d-flex">
                            <div className="promo-catalog__hint">
                                {el.hint ?? category}
                            </div>
                            <img src={el.image} className='promo-catalog__image' alt={el.name} title={el.name} />
                            <Button className='promo-catalog__button' bgcolor='blue' size='large' handler={openPopup('popup-promo', el.hint)}>
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