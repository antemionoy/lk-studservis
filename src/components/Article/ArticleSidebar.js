import cn from 'classnames'
import { Link } from 'react-router-dom'
import './ArticleSidebar.scss'

const ArticleSidebar = ({ className, articles }) => {
    const sidebarClass = cn(
        className,
        'article-sidebar'
    )

    return (
        <aside className={sidebarClass}>
            <h2 className="article-sidebar__title title title_h2">Свежие статьи:</h2>
            <ul className="article-sidebar__list">
                {articles.length > 0 &&
                    articles.map((el, i) => (
                        <li className="article-sidebar__item" key={i}>
                            <Link to={el.code} className="article-sidebar__name">Переадресация лидов на лендинг</Link>
                            <p className="article-sidebar__date">20.05.2022, 15:22</p>
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
}

export default ArticleSidebar