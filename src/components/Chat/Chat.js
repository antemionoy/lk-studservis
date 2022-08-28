import cn from 'classnames'
import './Chat.scss'

const Chat = ({ className, managerName, managerPhoto }) => {
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
                        <p className="chat__date">08.06.2022 17:42</p>
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
            <input className="chat__input" placeholder='Введите сообщение'/>

        </div>
    )
}

export default Chat