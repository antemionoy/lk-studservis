import './ShortForm.scss'
import Button from "../Ui/Button"

const ShortForm = () =>{
    return(
        <form action="#" className="short-form d-flex">
            <p className="short-form__text"></p>
            <input className="short-form__input" type="text" />
            <Button className='short-form__button'>{text}</Button>
        </form>
    )
}

export default ShortForm