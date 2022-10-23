import cn from "classnames"

const Radio = ({ className, name, id }) => {
    const classRadio = cn(
        className,
        'radio'
    )

    return (
        <div className={classRadio}>
            <label className='radio__label d-flex'>
                <input name={id} className='radio__input' type="radio" />
                <p className="radio__text">{name}</p>
            </label>
        </div>
    )
}

export default Radio