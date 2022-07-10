import './level.css';

const Level = ({value, num}) => {
    return (
        <li className="level" key={num}>
            <button className='levelBtn'>{value}</button>
        </li>
    )
}

export default Level;