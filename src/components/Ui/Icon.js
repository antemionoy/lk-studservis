const Icon = (props) => {
    const myIcon = require('@assets/icons/' + props.name + '.svg').default

    return(
        <svg className={props.className} width={props.width} height={props.height}>
            <use href={myIcon} />
        </svg>
    )
}

export default Icon