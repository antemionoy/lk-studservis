import './ProfileSection.scss'
import cn from "classnames"
import Button from "../Ui/Button"
import ProfileFeatures from "./ProfileFeatures"

const ProfileSection = ({ children, className, title, main }) => {
    const ProfileSectionClass = cn(
        className,
        'profile-section',
        'section'
    )

    return (
        <div className={ProfileSectionClass}>
            {main && <ProfileFeatures />}

            <h2 className="profile-section__title title title_h2">{title}</h2>
            {
                main &&
                <div className="profile-section__avatar">
                    <div className="profile-section__avatar-circle">
                        <img src="" alt="" className="profile-section__avatar-picture" />
                        <div className="profile-section__avatar-icon"></div>
                    </div>
                    <div className="profile-section__avatar-info">
                        <p className="profile-section__avatar-title">Фотография профиля</p>
                        <p className="profile-section__avatar-descr">
                            Рекомендуемый размер фото: <br /> 150x150
                        </p>
                    </div>
                </div>
            }
            <div className="profile-section__row d-flex">
                {children}
            </div>
            <div className="profile-section__bottom">
                <Button >Сохранить изменения</Button>
                {
                    main &&
                    <p>Получать информационные рассылки</p>
                }
            </div>
        </div>
    )
}

export default ProfileSection