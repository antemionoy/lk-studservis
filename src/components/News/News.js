import { Link } from 'react-router-dom'
import './News.scss'

const News = () => {
    const news = [
        {
            date: '20.05.2022, 15:22',
            name: 'Переадресация лидов на лендинг',
            code: '1',
            description: 'Информируем вас о том, что теперь с ваших промо пользователей будет редиректить прямо на ваш локальный лендинг.'
        },
        {
            date: '20.05.2022, 15:22',
            code: '2',
            name: 'Переадресация лидов на лендинг',
            description: 'Информируем вас о том, что теперь с ваших промо пользователей будет редиректить прямо на ваш локальный лендинг.'
        },
        {
            date: '20.05.2022, 15:22',
            code: '3',
            name: 'Переадресация лидов на лендинг',
            description: 'Информируем вас о том, что теперь с ваших промо пользователей будет редиректить прямо на ваш локальный лендинг.'
        },
    ]

    return (
        <section className="news">
            <div className="news__container container">
                <div className="news__section section">
                    <h1 className="news__title title title_h2">Новости и блог</h1>
                    <ul className="news__list">
                        {news.map((el, i) => (
                            <li className="news__item" key={i}>
                                <p className="news__date">{el.date}</p>
                                <Link className="news__name" to={el.code}>{el.name}</Link>
                                <p className="news__text">{el.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default News