import './ProfileSection.scss'
import cn from "classnames"
import Button from "../Ui/Button"
import ProfileFeatures from "./ProfileFeatures"
import Icon from '../Ui/Icon'
import { useRef, useState } from 'react'
import Avatar from '@/assets/images/avatar.png'
import Switch from '../Ui/Switch'

const ProfileSection = ({ children, className, title, main }) => {
    const fileRef = useRef(null)
    let [attach, setAttach] = useState({
        name: '',
        size: 0,
        src: ''
    })

    const ProfileSectionClass = cn(
        className,
        'profile-section',
        'section'
    )

    const attachFile = (e) => {
        const [file] = e.target.files
        let { name, size } = file
        let correctSize = size >= 5242880 ? 'error' : size

        setAttach({
            name: name,
            size: correctSize,
            src: URL.createObjectURL(file)
        })

        console.log(attach)
    }

    const openFinder = () => {
        fileRef.current.click()
    }

    return (
        <div className={ProfileSectionClass}>
            {main && <ProfileFeatures className='profile-section__features' />}

            <h2 className="profile-section__title title title_h2">{title}</h2>
            {
                main &&
                <div className="profile-section__avatar d-flex">

                    <div className="profile-section__avatar-circle" onClick={openFinder}>
                        <input
                            ref={fileRef}
                            onChange={attachFile}
                            type="file"
                            name='file'
                            hidden
                        />
                        <img src={attach.src || Avatar} alt="" className="profile-section__avatar-picture" />
                        <button type='button' className="profile-section__avatar-button">
                            <Icon name='camera' width='10' height='11' className='profile-section__avatar-icon' />
                        </button>
                    </div>

                    <div className="profile-section__avatar-info">
                        <p className="profile-section__avatar-title">Фотография профиля</p>
                        <p className="profile-section__avatar-descr">
                            Рекомендуемый размер фото: <br /> 150x150
                        </p>
                    </div>
                </div>
            }
            <div className="profile-section__row d-flex wrap">
                {children}
            </div>
            <div className="profile-section__bottom d-flex">
                <Button size='large' bgcolor='blue' className='profile-section__button'>Сохранить изменения</Button>
                {
                    main &&
                    <Switch
                        className='profile-section__switch'
                        text='Получать информационные рассылки'
                    />
                }
            </div>
        </div>
    )
}

export default ProfileSection