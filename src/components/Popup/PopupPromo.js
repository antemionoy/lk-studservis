import './PopupPromo.scss'
import Button from "../Ui/Button"
import image from '@assets/images/promo-catalog__image.jpeg'

const PopupPromo = () => {
    return (
        <div className="popup-promo">
            <div className="popup-promo__header d-flex">
                <img src={image} alt="" className="poup-promo__image" />
            </div>
            <div className="popup-promo__body">
                <div className="popup-promo___info d-flex">
                    <div className="popup-promo__prop">
                        Размер: 200х200
                    </div>
                    <div className="popup-promo__prop">
                        Формат: png
                    </div>
                </div>
                <div className="popup-promo__copy">
                    <p className="popup-promo__copy-name"><b>HTML код</b></p>
                    <p className="popup-promo__copy-descr">Используйте этот код для вставки баннера у себя на сайте</p>
                    <textarea
                        readOnly
                        value='<!--noindex--><a href="https://www.homework.ru/order/form?partnerId=&partnersPictureId=394"><img src="https://hmwk.ru/partner/api/promo/promo-banners/394/partner-link" /></a><!--/noindex-->'
                        className="popup-promo__copy-textarea">
                    </textarea>
                </div>
            </div>
            <div className="popup-promo__footer">
                <Button className='poup-promo__button' bgcolor='blue' size='large'>Скопировать</Button >
            </div>
        </div>
    )
}

export default PopupPromo