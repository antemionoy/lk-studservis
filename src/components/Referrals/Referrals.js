import FormField from '../Form/FormField'
import Button from '../Ui/Button'
import Icon from '../Ui/Icon'
import ReferralsSidebar from './ReferralsSidebar'
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

    const levels = [
        {
            level: 1,
            reward: 3000,
            total: 3000,
            turnover: 60000,
            color: '#321FDB'
        },
        {
            level: 2,
            reward: 4500,
            total: 7500,
            turnover: 150000,
            color: '#3399FF'
        },
        {
            level: 3,
            reward: 7500,
            total: 15000,
            turnover: 300000,
            color: '#F8B114'

        },
        {
            level: 4,
            reward: 22500,
            total: 37500,
            turnover: 750000,
            color: '#2EB85C'

        },
        {
            level: 5,
            reward: 37500,
            total: 75000,
            turnover: 1500000,
            color: '#451384'
        },
        {
            level: 6,
            reward: 75000,
            total: 150000,
            turnover: 3000000,
            color: '#E45353'
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

                        <div className="referrals__section referrals__section_large section">
                            <h2 className="referrals__title title">Список рефералов</h2>
                            <ReferralsTable className='referals__table' refs={refs} />
                        </div>

                    </div>
                    <ReferralsSidebar className='referral__sidebar' levels={levels} />

                </div>
            </div>
        </section>
    )
}

export default Referrals