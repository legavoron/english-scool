import './task.css';
import {NavLink} from 'react-router-dom';

const Task = (props) => {
    return (
        <div className="task">
            <NavLink to="/main">
                <div className="close">
                
                </div>
            </NavLink>
            <div className='taskImageContainer'>
                <img src={props.url} alt="question image" className='taskImage'/>
            </div>
            <div className="valueBlock">
                <h2 className="taskHeading">
                        {props.word}
                </h2>
                <button className='taskBtn' onClick={props.chooseTask}>{props.btnValue}</button>
            </div>
        </div>
    )
}

export default Task;