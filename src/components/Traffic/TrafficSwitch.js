import './TrafficSwitch.scss'
import Switch from "../Ui/Switch"
import cn from 'classnames'

const TrafficSwitch = ({className, name, color, total, count}) =>{
    const classSwitchBlock = cn(
        'd-flex',
        'traffic-switch',
        className,
    )

    return(
        <div className={classSwitchBlock}>
            <div className="traffic-switch__top d-flex">
                <p className="traffic-switch__name">{name}</p>
                <Switch className={'traffic-switch__switch'} color={color}/>
            </div>
            <p className="traffic-switch__count">{count} ({total}%)</p>
            <div className="traffic-switch__progress">
                <span className='traffic-switch__line' style={{backgroundColor: `${color}`, width: `${total}%`}}></span>
            </div>
        </div>
    )
}

export default TrafficSwitch