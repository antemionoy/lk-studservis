const Select = ({ name, value, option }) => {
    return (
        <select className="form-select__hidden" name={name} value={currentSelect}>
            {options.map((el, index) => (
                <option value={el.value ?? el.name} key={index}>{el.name}</option>
            ))}
        </select>
    )
}

export default Select