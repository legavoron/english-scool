import './taskLang.css';
import closeBtn from '../../logo/close.png';

import {Link} from 'react-router-dom';

const TaskLang = (props) => {

    return (
        <div className="taskLang">
            <Link to="/main" className='taskLang__close-container' onClick={props.chooseTask}>
                <img src={closeBtn} alt="close" className='taskLang__close-btn'/>
            </Link>
            <h1 className='taskLang__heading'>Выберете язык</h1>
            <div className='taskLang__container'>
                <div className="taskLang__lang taskLang__lang_active" >
                    ru
                </div>
                <div className="taskLang__lang" >
                    en
                </div>
            </div>
            
        </div>
    )
}

export default TaskLang;