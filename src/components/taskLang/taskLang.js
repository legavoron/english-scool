import './taskLang.css';
import closeBtn from '../../logo/close.png';

import { useEffect } from 'react';

import {Link} from 'react-router-dom';

const TaskLang = (props) => {

    const styles = ['taskLang__lang'];
    
    return (
        <div className="taskLang">
            <Link to="/" className='taskLang__close-container' onClick={props.changeStartIsActiveTask}>
                <img src={closeBtn} alt="close" className='taskLang__close-btn'/>
            </Link>
            <h1 className='taskLang__heading'>Выберете язык</h1>
            <div className='taskLang__container' onClick={props.changeLang}>
                <div className={props.lang === 'ru' ? `${styles} taskLang__lang_active` : styles} >
                    ru
                </div>
                <div className={props.lang === 'en' ? `${styles} taskLang__lang_active` : styles} onClick={props.changeLang} >
                    en
                </div>
            </div>
            
        </div>
    )
}

export default TaskLang;