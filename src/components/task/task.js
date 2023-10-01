import './task.css';
import closeBtn from '../../logo/close.png';

import {Link} from 'react-router-dom';

const Task = (props) => {

    const style = props.lang === 'en' ? {backgroundColor: '#2A4B5D', color: '#D3CBBD'}: {backgroundColor: '#A0C3D9', color: '#505050'}

    return (
        <div className="task">
            <Link to="/" className='task__close-container'>
                <img src={closeBtn} alt="close" className='task__close-btn'/>
            </Link>
            <div className='task__image-container'>
                    <div className="task__image-wrapper">
                        <img src={props.url} alt="question_image" className='task__image'/>
                    </div>
            </div>
            <div className="task__value-container">
                <div className="task__value-wrapper">
                    <h2 className="task__heading">
                            {props.word}
                    </h2>
                    <button className='task__btn' style={style} onClick={props.chooseTask}>{props.btnValue}</button>
                </div>
            </div>
        </div>
    )
}

export default Task;