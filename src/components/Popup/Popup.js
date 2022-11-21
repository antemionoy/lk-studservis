import { useDispatch, useSelector } from 'react-redux'
import './Popup.scss'
import { setPopup, deletePopup } from '../../slices/popupSlice';
import cn from 'classnames';
import PopupFeedback from './PopupFeedback';
import PopupPromo from './PopupPromo'
import useScrollLock from '../../hooks/useScrollLock';

const Popup = () => {
    const { showScroll, hideScroll } = useScrollLock();
    const dispatch = useDispatch()
    const activePopup = useSelector((state) => state.popup.id)
    const titlePopup = useSelector((state) => state.popup.title)

    !activePopup ? showScroll() : hideScroll()

    const popupClass = cn(
        'popup',
        { ['popup_small']: activePopup === 'popup-feedback' },
        activePopup && 'popup_show'
    )

    return (
        <>
            {!!activePopup &&
                <div className={popupClass}>
                    <div className="popup__wrapper">
                        <div className="popup__shade" onClick={() => dispatch(deletePopup())}></div>
                        <div className="popup__content">
                            <div className="popup__head">
                                <h2 className="popup__title title title_h2">
                                    {titlePopup ?? 'Получите консультацию'}
                                </h2>
                                <div className="popup__close close" onClick={() => dispatch(deletePopup())}></div>
                            </div>
                            {(activePopup === 'popup-promo') ? <PopupPromo /> : <PopupFeedback />}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Popup