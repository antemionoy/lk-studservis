import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetchApi from '../../hooks/useFetchApi'
import { api } from '../../shared/api'
import './News.scss'

const News = () => {
    const {data: news} = useFetchApi(api.links.news.link)

    return (
        <section className="news">
            <div className="news__container container">
                <div className="news__section section">
                    <h1 className="news__title title title_h2">Новости и блог</h1>
                    <ul className="news__list">
                        {news?.length > 0 && news.map((el, i) => (
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