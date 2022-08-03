const Icon = (props) => {
    const myIcon = require('@assets/icons/' + props.name + '.svg').default

    return(
        <svg className={props.className}>
            <use href={myIcon} />
        </svg>
    )
}

export default Icon