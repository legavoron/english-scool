import './task.css';
import question from './img/question.png';
import surgeon from './img/surgeon.jpg';

const Task = () => {

    const classesImageContainer = ['taskImageContainer', 'taskImageContainerQuest'];

    return (
        <div className="task">
            <div className={classesImageContainer.join(' ')}>
                <img src={surgeon} alt="question image" className='taskImage'/>
            </div>
            <div className="valueBlock">
                <h2 className="taskHeading">
                        Хирург
                </h2>
                <button className='taskBtn'>Ответ</button>
            </div>
        </div>
    )
}

export default Task;