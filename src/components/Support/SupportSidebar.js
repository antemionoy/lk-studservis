import cn from 'classnames'
import './SupportSidebar.scss'

const SupportSidebar = ({ className, managerPhoto, managerName }) => {
    const sidebarClass = cn(
        className,
        'support-sidebar',
        'd-flex'
    )

    return (
        <aside className={sidebarClass}>
            <img src={managerPhoto} alt="manager" className="support-sidebar__image" />
            <h2 className="support-sidebar__name">{managerName}</h2>
            <p className="support-sidebar__text">Ваш личный мененджер</p>
            <ul className="support-sidebar__social">
                <li className="support-sidebar__social-item">
                    <p className="support-sidebar__social-text">
                        Телеграм:
                        <b>@aff_homework</b>
                    </p>
                </li>
                <li className="support-sidebar__social-item">
                    <p className="support-sidebar__social-text">
                        Email:
                        <b>an.zhulanov@homework.ru</b>
                    </p>
                </li>
            </ul>
        </aside>
    )
}

export default SupportSidebar