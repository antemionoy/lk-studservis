import cn from 'classnames'
import './ReferralsSidebar.scss'

const ReferralsSidebar = ({ className, levels }) => {
    const sidebarClass = cn(
        className,
        'referrals-sidebar'
    )

    return (
        <aside className={sidebarClass}>
            <h3 className="referrals-sidebar__title">Заработайте до 150 000 руб. с каждого реферала!</h3>
            <p className="referrals-sidebar__descr">Вы получите вознаграждение за каждого активного реферала в момент достижения им нового уровня. Мы не ограничиваем время учета, поэтому многие ваши рефералы достигнут шестого уровня, а вы заработаете по 150 000 руб. с каждого.</p>

            <div className="referrals-sidebar__levels">
                <div className="referrals-sidebar__levels-row d-grid">
                    <p className="referrals-sidebar__title referrals-sidebar__levels-col">Оборот реферала</p>
                    <p className="referrals-sidebar__title referrals-sidebar__levels-col">Вознаграждение за уровень</p>
                    <p className="referrals-sidebar__title referrals-sidebar__levels-col">Суммарный доход</p>
                </div>
                {
                    levels.length > 0 &&
                    levels.map((el, i) => (
                        <div className="referrals-sidebar__levels-row d-grid" key={i} style={{ color: el.color }}>
                            <hr className="referrals-sidebar__levels-line" style={{ background: el.color }} />
                            <p className="referrals-sidebar__levels-name">
                                Уровень {el.level}
                                <span className='referrals-sidebar__levels-count'>{el.turnover}</span>
                            </p>
                            <p className="referrals-sidebar__levels-count">
                                {el.reward}
                            </p>
                            <p className="referrals-sidebar__levels-count">
                                {el.total}
                            </p>
                        </div>
                    ))
                }
            </div>
        </aside>
    )
}

export default ReferralsSidebar