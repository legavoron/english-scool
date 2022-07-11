import './level.css';

const Level = ({value, id, chooseLevels, btnColor}) => {

    const btnClasses = ['levelBtn', {btnColor}, 'btnColorBlue']

    return (
        <li className="level">
            <button className={btnClasses.join(' ')} onClick={chooseLevels} id={id}>{value}</button>
        </li>
    )
}

export default Level;
