import Icon from "./Icon";
import cn from "classnames";

const SwithcIcons = ({ className, icons }) => {
    const switchClass = cn(
        className,
        'switch-icons',
    )

    return (
        <div className={switchClass}>
            <label className='switch-icons__label'>
                <input type="checkbox" className="switch-icons__input" hidden />
                <div className="switch-icons__inner d-grid">
                    <Icon name='table' className='switch-icons__icon' width='15' height='15' />
                    <Icon name='chart' className='switch-icons__icon' width='15' height='15' />
                </div>
            </label>
        </div>
    )
}

export default SwithcIcons;