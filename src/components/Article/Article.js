import './Article.scss'
import ArticleSidebar from './ArticleSidebar'
import ArticleImage from '@/assets/images/article-image.jpeg'
import { Link } from 'react-router-dom'

const Article = () => {

    const articles = [
        {
            name: 'Переадресация лидов на лендинг',
            code: '1',
            date: '20.05.2022, 15:22'
        },
        {
            name: 'Переадресация лидов на лендинг',
            code: '2',
            date: '20.05.2022, 15:22'
        },
        {
            name: 'Переадресация лидов на лендинг',
            code: '3',
            date: '20.05.2022, 15:22'
        },
    ]

    return (
        <article className="article">
            <div className="article__container container">
                <div className="article__row d-grid">
                    <div className="article__section">
                        <h1 className="article__title title title_h1">Переадресация лидов на лендинг</h1>
                        <p className="article__date">20.05.2022, 15:22</p>
                        <img src={ArticleImage} className='article__image' alt="" />

                        <div className="article__content">
                            <p>Информируем вас о том, что теперь с ваших промо пользователей будет редиректить прямо на ваш локальный лендинг.</p>
                            <h2>Как это работает?</h2>
                            <ul>
                                <li>Пользователь заполняет данные в промо, если это требуется.</li>
                                <li>После нажатии на кнопку в промо, пользователя переносит на локальный лендинг, при этом с уже заполненными пользователем полями, что очень удобно</li>
                                <li>Еще пар штрихов и студент отправляет заявку в работу!</li>
                            </ul>
                            <p>Локальный лендинг исполнен в цветовой гамме вашего сайта, чтобы у вашего пользователя было понимание, что он остается на вашем сайте.</p>
                            <p>Заказать ваш локальный лендинг можно напрямую у  <Link to='/'>менеджера</Link> </p>
                        </div>
                    </div>
                    <ArticleSidebar
                        className='article__sidebar'
                        articles={articles}
                    />
                </div>
            </div>
        </article>
    )
}

export default Article