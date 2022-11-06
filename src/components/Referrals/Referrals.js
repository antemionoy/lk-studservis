import FormField from '../Form/FormField'
import Button from '../Ui/Button'
import Icon from '../Ui/Icon'
import ReferralsSidebar from './ReferralsSidebar'
import './Referrals.scss'
import ReferralsTable from './ReferralsTable'
import { api } from '../../shared/api'
import levels from '../../static/levels'
import useFetchApi from '../../hooks/useFetchApi'
import Table from '../Ui/Table'
import { useMemo } from 'react'

const Referrals = () => {
    const { data: refs, loading, error } = useFetchApi(api.links.refs.link)

    const columns = useMemo(() => [
        { content: { title: 'Регистрация' }, align: 'center' },
        { content: { title: 'Имя' }, align: 'center' },
        { content: { title: 'Ваш доход' }, align: 'center' },
        { content: { title: 'Оборот реферала'}, align: 'center' },
    ], [])

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
                            <Table className='referals__table' data={!!refs && refs} columns={columns} />
                        </div>

                    </div>
                    <ReferralsSidebar className='referral__sidebar' levels={levels} />

                </div>
            </div>
        </section>
    )
}

export default Referrals