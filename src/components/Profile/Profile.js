import './Profile.scss'
import { useState } from 'react'
import FormField from '../Form/FormField'
import ProfileSection from './ProfileSection'

const Profile = () => {
    const [data, setData] = useState(null)

    return (
        <section className="profile">
            <div className="profile__container container">
                <ProfileSection className='profile__section' title='Основные данные' main>
                    <FormField
                        label='Email'
                        name='email'
                        type='text'
                        placeholder='Введите адрес электронной почты'
                        error='Введите корректный email'
                        className='profile__section-field'
                    />
                    <FormField
                        label='Пароль'
                        name='password'
                        type='password'
                        placeholder='Введите пароль'
                        error='Не верный пароль'
                        className='profile__section-field'
                    />
                    <FormField
                        label='Пароль'
                        name='password'
                        type='password'
                        placeholder='Введите пароль'
                        error='Не верный пароль'
                        className='profile__section-field'
                    />
                </ProfileSection>
                <ProfileSection className='profile__section' title='Контакты'>

                </ProfileSection>
                <ProfileSection className='profile__section' title='Сменить пароль'>

                </ProfileSection>
            </div>
        </section>
    )
}

export default Profile