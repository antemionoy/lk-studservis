import './ProfileFeatures.scss'
import features from '../../static/features'

const ProfileFeatures = () => {
    return (
        <ul className="profile-features d-flex">
            {features.length > 0 && features.map((el, i) => (
                <li className="profile-features__item" key={i}>
                    <p className="profile-features__title">{el.title}</p>
                    <p className="profile-features__text">{el.text}</p>
                </li>
            ))}
        </ul>
    )
}

export default ProfileFeatures