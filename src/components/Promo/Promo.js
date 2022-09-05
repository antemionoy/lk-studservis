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
            title: 'Баннеры',
        },
        {
            category: 'landings',
            title: 'Баннеры',
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
                                <PromoCatalog
                                    max='6'
                                    items={element.items ?? []}
                                    category={element.title} filter />
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </div>
        </section>
    )
}

export default Promo