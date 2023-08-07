import './levelsList.css';
import closeBtn from '../../logo/close.png';
import {Link} from 'react-router-dom';

import Level from '../level/level';

const LevelsList = ({chooseLevels, colors, chooseTask}) => {

    const levelsValue = ["Все", "A2: Unit 1", "A2: Unit 2",
     "A2: Unit 3", "A2: Unit 4", "A2: Unit 5", 
     "A2: Unit 6", "A2: Unit 7", "A2: Unit 8", 
     "A2: Unit 9", "A2: Unit 10", "A2: Unit 11", 
     "A2: Unit 12", "A2: Unit 13", "A2: Unit 14", 
     "A2: Unit 15", "A2: Unit 16","A2: Unit 17", 
     "B1: Unit 1", "B1: Unit 2", "B1: Unit 3", "B1: Unit4",
     "B1: Unit 5", "B1: Unit 6", "B1: Unit 7", "B1: Unit8",
     "B1: Unit9", "B1: Unit10", "B1: Unit11"];

    const levels = levelsValue.map ((item, count) => {
        return <Level key={count} value={item} id={`unit${count}`} chooseLevels={chooseLevels} colors={colors}/>
    })

    

    return (
        <div className="levels levels__container">
            <Link to="/main" className='levels_close' onClick={chooseTask}>
                <img src={closeBtn} alt="close" className='levels___close_btn'/>
            </Link>
            <h1 className="levels__heading">
                Выберите уровни
            </h1>
            <ul className="levels__list">
                {levels}
            </ul>
        </div>
    )
}

export default LevelsList;