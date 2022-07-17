import './level.css';

const Level = ({value, id, chooseLevels, colors}) => {

    const color = colors[id] ? 'btnColorPurple': 'btnColorBlue';

    const btnClasses = ['levelBtn', color]

    return (
        <li className="level">
            <button className={btnClasses.join(' ')} onClick={chooseLevels} id={id}>{value}</button>
        </li>
    )
}

export default Level;
