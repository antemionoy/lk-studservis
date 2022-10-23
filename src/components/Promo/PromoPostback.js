import './PromoPostback.scss'
import { useMemo } from "react"
import Table from "../Ui/Table"
import Input from '../Ui/Input'
import Button from '../Ui/Button'
import Switch from '../Ui/Switch'
import Radio from '../Ui/Radio'

const radios = [
    {
        name: 'POST',
        id: 'request'
    },
    {
        name: 'GET',
        id: 'request'
    },
]

const PromoPostback = () => {
    const columns = useMemo(() => [
        { content: { title: 'Переменная' }, align: 'left' },
        { content: { title: 'Описание' }, align: 'left', },
    ], [])

    const data = [
        [
            { content: { title: '{subid}' }, align: 'left' },
            { content: { title: 'метка subid' }, align: 'left' },
        ],
        [
            { content: { title: '{subid}' }, align: 'left' },
            { content: { title: 'метка subid' }, align: 'left' },
        ],
        [
            { content: { title: '{subid}' }, align: 'left' },
            { content: { title: 'метка subid' }, align: 'left' },
        ],
        [
            { content: { title: '{subid}' }, align: 'left' },
            { content: { title: 'метка subid' }, align: 'left' },
        ],
        [
            { content: { title: '{subid}' }, align: 'left' },
            { content: { title: 'метка subid' }, align: 'left' },
        ],
    ]

    return (
        <div className="postback">
            <div className="postback__top">
                <Input type="text" className="postback__input" placeholder="Вставьте ссылку, сгенерированную вашей TDS системой" />
            </div>
            <div className="postback__grid d-grid">
                <div className="postback__generate">
                    <div className="postback__section">
                        <h2 className="postback__title title title_h2">Когда отправлять запрос?</h2>
                        <ul className="postback__switches">
                            <li className='postback__switches-item'>
                                <Switch className='postback__switches-switch' text='Создана заявка' />
                            </li>
                            <li className='postback__switches-item'>
                                <Switch className='postback__switches-switch' text='Внесена предоплата' />
                            </li>
                            <li className='postback__switches-item'>
                                <Switch className='postback__switches-switch' text='Заказ завершен' />
                            </li>
                            <li className='postback__switches-item'>
                                <Switch className='postback__switches-switch' text='Возврат, отмена заказа' />
                            </li>
                            <li className='postback__switches-item'>
                                <Switch className='postback__switches-switch' text='Спам заявка' />
                            </li>
                        </ul>
                    </div>
                    <div className="postback__section">
                        <h2 className="postback__title title title_h2">Когда отправлять запрос?</h2>
                        <ul className="postback__radios">
                            {radios.map(el => (
                                <li className='postback__radios-item' key={el.name}>
                                    <Radio className='postback__radios-radio' name={el.name} id={el.id} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Button className='postback__button' bgcolor='blue' size='large'>
                        Сохранить
                    </Button>
                    <h2 className="postback__title title title_h2">Входящие параметры</h2>
                    <p className="postback__text">
                        Для передачи параметров в запрос, вы можете использовать переменные, указанные ниже.
                    </p>
                    <p className="postback__text">
                        Для передачи параметров в запрос, вы можете использовать переменные, указанные ниже.
                    </p>
                </div>
                <div className="postback__info">
                    <h2 className="postback__title title title_h2">Настройка PostBack URL</h2>
                    <p className="postback__text">
                        PostBack будет полезен, если вы ведете учёт конверсий в сторонней системе статистики.
                    </p>
                    <p className="postback__text">
                        Для передачи параметров в запрос, вы можете использовать переменные, указанные ниже.
                    </p>
                    <p className="postback__text">
                        В момент перехода переменные будут заменены на значения автоматически.
                    </p>
                    <Table className='postback__table' columns={columns} data={data} />
                </div>
            </div>
        </div>
    )
}

export default PromoPostback