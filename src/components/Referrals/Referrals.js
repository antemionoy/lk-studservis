import FormField from '../Form/FormField'
import Button from '../Ui/Button'
import Icon from '../Ui/Icon'
import './Referrals.scss'
import ReferralsTable from './ReferralsTable'

const Referrals = () => {

    const refs = [
        {
            date: '25.08.2022',
            name: 'Екатерина Васильева',
            income: 0,
            turnover: 0
        },
        {
            date: '25.08.2022',
            name: 'Екатерина Васильева',
            income: 0,
            turnover: 0
        },
        {
            date: '25.08.2022',
            name: 'Екатерина Васильева',
            income: 0,
            turnover: 0
        },
    ]


    return (
        <section className="referrals">
            <div className="referrals__container container">
                <div className="referrals__row d-grid">

                    <div className="referrals__content">
                        <div className="referrals__section section">
                            <div className="referrals__head d-flex">
                                <FormField
                                    className='referrals__field'
                                    value='https://www.studservis.ru/partners/landing/MTQxODU=/' />
                                <Button
                                    className='referrals__button'
                                    size='medium' bgcolor='blue'>
                                    Копировать
                                </Button>
                                <p className='referrals__copy'>Ваша ссылка * для приглашения</p>
                            </div>
                            <div className="referrals__features d-flex">
                                <Icon
                                    className='referrals__icon'
                                    name='important'
                                    width='19'
                                    height='19'
                                />
                                <span>При регистрации по вашей ссылке, реферал получит стартовый <b> бонус 5 000 руб.</b></span>
                            </div>
                            <p className="referrals__comment">* Вы можете разместить ссылку на своем сайте, в подписи на форуме, отправить сообщением или использовать любые другие методы, кроме спама и обмана</p>
                        </div>

                        <div className="referrals__section section">
                            <h2 className="referrals__title">Список рефералов</h2>
                            <ReferralsTable className='referals__table' refs={refs} />
                        </div>

                    </div>
                    <aside className='referral__sidebar referral-sidebar'>
                        <h3 className="referral-sidebar__title">Заработайте до 150 000 руб. с каждого реферала!</h3>
                        <p className="referral-sidebar__descr">Вы получите вознаграждение за каждого активного реферала в момент достижения им нового уровня. Мы не ограничиваем время учета, поэтому многие ваши рефералы достигнут шестого уровня, а вы заработаете по 150 000 руб. с каждого.</p>
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default Referrals