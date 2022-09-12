import Button from '../Ui/Button'
import Calendar from '../Ui/Calendar'
import Select from '../Ui/Select'
import './StatsMain.scss'

const options = [
    {
        name: 'За все время',
        value: 'За все время'
    },
    {
        name: 'За неделю',
        value: 'За неделю'
    },
    {
        name: 'За месяц',
        value: 'За месяц'
    },
    {
        name: 'За год',
        value: 'За год'
    },
]

const StatsMain = () => {
    return (
        <section className="stats-main">
            <div className="stats-main__container container">
                <div className="stats-main__section section">
                    <div className="stats-main__head d-flex">
                        <div className="stats-main__main d-flex">
                            <Calendar />
                            <Select
                                className='stats-main__select'
                                options={options}
                                name='time'
                            />
                            <Select
                                className='stats-main__select'
                                options={options}
                                name='time'
                            />
                            <Select
                                className='stats-main__select'
                                options={options}
                                name='time'
                            />
                            <Button className='stats-main__button' bgcolor='blue' size='medium'>
                                Выгрузить excel
                            </Button>
                        </div>
                        <div className="stats-main__second">
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StatsMain