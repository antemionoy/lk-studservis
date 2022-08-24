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
                        className='profile-section__field'
                    />
                    <FormField
                        label='Пароль'
                        name='password'
                        type='password'
                        placeholder='Введите пароль'
                        className='profile-section__field'
                    />
                    <FormField
                        label='Пароль'
                        name='password'
                        type='password'
                        placeholder='Введите пароль'
                        className='profile-section__field'
                    />
                </ProfileSection>
                <ProfileSection className='profile__section' title='Контакты'>
                    <FormField
                        label='Email'
                        name='email'
                        type='text'
                        placeholder='Введите адрес электронной почты'
                        className='profile-section__field'
                    />
                    <FormField
                        label='Пароль'
                        name='password'
                        type='password'
                        placeholder='Введите пароль'
                        className='profile-section__field'
                    />
                    <FormField
                        label='Пароль'
                        name='password'
                        type='password'
                        placeholder='Введите пароль'
                        className='profile-section__field'
                    />
                    <FormField
                        label='Сайт'
                        name='password'
                        type='password'
                        placeholder='Введите пароль'
                        className='profile-section__field'
                    />
                </ProfileSection>
                <ProfileSection className='profile__section' title='Сменить пароль'>
                    <FormField
                        label='Email'
                        name='email'
                        type='text'
                        placeholder='Введите адрес электронной почты'
                        className='profile-section__field'
                    />
                    <FormField
                        label='Пароль'
                        name='password'
                        type='password'
                        placeholder='Введите пароль'
                        className='profile-section__field'
                    />
                    <FormField
                        label='Пароль'
                        name='password'
                        type='password'
                        placeholder='Введите пароль'
                        className='profile-section__field'
                    />
                </ProfileSection>
            </div>
        </section>
    )
}

export default Profile