import cn from 'classnames'
import { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router'
import Button from '../Ui/Button'
import Icon from '../Ui/Icon'
import './Chat.scss'

const Chat = ({ className, managerName, managerPhoto }) => {
    const [messages, setMessages] = useState([])
    const [isConnectOpen, setIsConnectOpen] = useState(false)
    const [requestBody, setRequestBody] = useState('')
    const socketUrl = 'wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self'
    const ws = useRef()

    const { username } = useParams(); // todo add the name of person from profile
    const data = new Map()
    data.set('name', username)
    data.set('body', requestBody)

    console.log(data)

    const send = () => {
        ws.current.send(
            JSON.stringify(data)
        )
        setRequestBody('');
    }

    useEffect(() => {
        ws.current = new WebSocket(socketUrl)

        ws.current.onopen = () => {
            setIsConnectOpen(true);
            console.log('ВебСкокет открыт')
        }

        ws.current.onmessage = (e) => {
            // console.log(e.target)
        }

        return () => {
            ws.current.close()
            console.log('ВебСокет закрыт')
        }

    }, [])

    const classChat = cn(
        className,
        'chat',
        'd-flex'
    )

    return (
        <div className={classChat}>
            <div className="chat__main">
                <div className="chat__row">
                    <div className="chat__head d-flex">
                        <img src={managerPhoto} alt="" className="chat__avatar" />
                        <p className="chat__name">{managerName}</p>
                        <p className="chat__date">
                            {/* {new Date(message?.length > 0 && message.sentAt).toLocaleTimeString(undefined, {
                                timeStyle: "short",
                            })}{" "} */}
                        </p>
                    </div>
                    <div className="chat__message">
                        Здравствуйте!
                        Меня зовут Анастасия, и я ваш личный менеджер.
                        Поздравляю вас с началом нашего сотрудничества)
                    </div>
                </div>
                <div className="chat__row chat__row_reverse">
                    <div className="chat__head d-flex">
                        <img src={managerPhoto} alt="" className="chat__avatar" />
                        <p className="chat__name">{managerName}</p>
                        <p className="chat__date">08.06.2022 17:42</p>
                    </div>
                    <div className="chat__message">
                        Здравствуйте!
                        Меня зовут Анастасия, и я ваш личный менеджер.
                        Поздравляю вас с началом нашего сотрудничества)
                    </div>
                </div>
                <div className="chat__row">
                    <div className="chat__head d-flex">
                        <img src={managerPhoto} alt="" className="chat__avatar" />
                        <p className="chat__name">{managerName}</p>
                        <p className="chat__date">08.06.2022 17:42</p>
                    </div>
                    <div className="chat__message">
                        Здравствуйте!
                        Меня зовут Анастасия, и я ваш личный менеджер.
                        Поздравляю вас с началом нашего сотрудничества)
                    </div>
                </div>
            </div>
            <div className="chat__box">
                <textarea
                    align='top'
                    type='text'
                    className="chat__input"
                    placeholder='Введите сообщение...'
                    value={requestBody}
                    onChange={(e) => setRequestBody(e.target.value)}
                ></textarea>
                <div className="chat__attach">
                    <Icon name='attach' className='chat__attach-icon' width='12' height='18'></Icon>
                    <input type="hidden" className="chat__attach-input" />
                </div>
            </div>
            <div className="chat__bottom">
                <Button
                    size='large'
                    bgcolor='blue'
                    className='chat__button'
                    disabled={!isConnectOpen}
                    onClick={send}
                >
                    Отправить
                </Button>
            </div>
        </div>
    )
}

export default Chat