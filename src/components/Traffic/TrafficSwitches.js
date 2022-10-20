import './TrafficSwitches.scss'
import TrafficSwitch from "./TrafficSwitch"

const TrafficSwitches = ({ switches }) => {
    return (
        <div className="traffic-switches d-grid">
            {switches.map((el, i) => (
                <TrafficSwitch
                    className={'traffic-switches__element'} 
                    name={el.name}
                    count={el.count}
                    total={el.total}
                    color={el.color}
                    key={i}
                />
            ))}
        </div>
    )
}

export default TrafficSwitches