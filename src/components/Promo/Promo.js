import './Promo.scss'
import Tabs from '../Tabs/Tabs'
import TabsContent from '../Tabs/TabsContent'
import PromoCatalog from './PromoCatalog'
import PromoPostback from './PromoPostback'
import PromoLabels from './PromoLabels'
import image from '@assets/images/promo-catalog__image.jpeg'

const Promo = () => {
    const tabs = [
        {
            id: 'banners',
            name: 'Баннеры',
        },
        {
            id: 'forms',
            name: 'Формы'
        },
        {
            id: 'landings',
            name: 'Лендинги'
        },
        {
            id: 'labels',
            name: 'Метки'
        },
        {
            id: 'postback',
            name: 'Postback'
        },
    ]

    const categories = [
        {
            category: 'banners',
            title: 'Баннеры',
            grid: 3,
            items: [
                {
                    name: 'test',
                    hint: '200x200 PNG',
                    image: image
                },
                {
                    name: 'test',
                    hint: '200x200 PNG',
                    image: image
                },
                {
                    name: 'test',
                    hint: '200x200 PNG',
                    image: image
                },
                {
                    name: 'test',
                    hint: '200x200 PNG',
                    image: image
                },
                {
                    name: 'test',
                    hint: '200x200 PNG',
                    image: image
                },
                {
                    name: 'test',
                    hint: '200x200 PNG',
                    image: image
                }
            ],
            filter: true
        },
        {
            category: 'forms',
            title: 'Формы',
            grid: 2,
            items: [
                {
                    name: 'test',
                    hint: '200x200 PNG',
                    image: image
                },
                {
                    name: 'test',
                    hint: '200x200 PNG',
                    image: image
                },
                {
                    name: 'test',
                    hint: '200x200 PNG',
                    image: image
                },
                {
                    name: 'test',
                    hint: '200x200 PNG',
                    image: image
                },
                {
                    name: 'test',
                    hint: '200x200 PNG',
                    image: image
                },
                {
                    name: 'test',
                    hint: '200x200 PNG',
                    image: image
                }
            ],
            filter: true
        },
        {
            category: 'landings',
            title: 'Лендинг',
            grid: 2,
            items: [
                {
                    name: 'test',
                    hint: '200x200 PNG',
                    image: image
                },
                {
                    name: 'test',
                    hint: '200x200 PNG',
                    image: image
                },
                {
                    name: 'test',
                    hint: '200x200 PNG',
                    image: image
                },
                {
                    name: 'test',
                    hint: '200x200 PNG',
                    image: image
                },
                {
                    name: 'test',
                    hint: '200x200 PNG',
                    image: image
                },
                {
                    name: 'test',
                    hint: '200x200 PNG',
                    image: image
                }
            ],
            filter: true
        },
        {
            category: 'labels',
            title: 'Баннеры',
        },
        {
            category: 'postback',
            title: 'Баннеры',
        }
    ]

    return (
        <section className="promo">
            <div className="promo__container container">
                <div className="promo__section section">
                    <Tabs className='promo__tabs' nav={tabs} >
                        {categories.map((element, index) => (
                            <TabsContent className={'promo__content'} key={index} id={index}>
                                {(element.category !== 'labels' || element.category !== 'postback') &&
                                    <PromoCatalog
                                        max='6'
                                        grid={element.grid}
                                        items={element.items ?? []}
                                        category={element.title} filter
                                    />
                                }
                                {element.category == 'labels' && <PromoLabels />}
                                {element.category == 'postback' && <PromoPostback />}
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </div>
        </section>
    )
}

export default Promo