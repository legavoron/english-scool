import './levelsList.css';
import {NavLink} from 'react-router-dom';

import Level from '../level/level';

const LevelsList = ({chooseLevels, colors, chooseTask}) => {

    const levelsValue = ["Все", "Unit 1: Arrivals", "Unit 2: Getting together", "Unit 3: A dream job", "Unit 4: We're all different", "Unit 5: Time of your life", "Unit 6: You are here", "Unit 7: Buying and selling", "Unit 8: A question of survival", "Unit 9: Favorite places", "Unit 10: Finding solutions", "Unit 11: Turning points", "Unit 12: Getting away", "Unit 13: Money matters", "Unit 14: Teamwork", "Unit 15: What an experiance!", "Unit 16: Take a break", "Дополнительно"]

    const levels = levelsValue.map ((item, count) => {
        return <Level key={count} value={item} id={`unit${count}`} chooseLevels={chooseLevels} colors={colors}/>
    })

    

    return (
        <div className="levelsListContainer">
            <NavLink to="/main">
                <div className="close" onClick={chooseTask}>
                
                </div>
            </NavLink>
            <h1 className="levelsListHeading">
                Выберите уровни
            </h1>
            <ul className="levelsList">
                {levels}
            </ul>
        </div>
    )
}

export default LevelsList;