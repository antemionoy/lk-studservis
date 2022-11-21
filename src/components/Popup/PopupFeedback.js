import Form from '../Form/Form'
import FormField from '../Form/FormField'
import Button from '../Ui/Button'
import './PopupFeedback.scss'

const PopupFeedback = () => {
    return (
        <Form className='popup-feedback' name='consult'>
            <div className="popup-feedback__inner">
                <div className="popup-feedback__descr">
                    Получите индивидуальную консультацию и рекомендации по монетизации вашего трафика
                </div>
                <FormField
                    label='Ваш имя'
                    name='email'
                    type='text'
                    placeholder='Введите имя'
                    className='popup-feedback__field'
                />
                <FormField
                    label='Ваш номер'
                    name='tel'
                    type='tel'
                    placeholder='+7 (981)-292-22-33'
                    className='popup-feedback__field'
                />
            </div>
            <div className="popup-feedback__bottom d-flex">
                <Button
                    size='large'
                    bgcolor='blue'
                    className='popup-feedback__button'>
                    Отправить
                </Button>
            </div>
        </Form>
    )
}

export default PopupFeedback