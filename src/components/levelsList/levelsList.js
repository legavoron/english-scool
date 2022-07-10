import './levelsList.css';

import Level from '../level/level';

const LevelsList = () => {

    const levelsValue = ["Level 1: Arrivals", "Level 2: Getting together", "Level 3: A dream job", "Level 4: We're all different", "Level 5: Time of your life", "Level 6: You are here", "Level 7: Buying and selling", "Level 8: A question of survival", "Level 9: Favorite places", "Level 10: Finding solutions", "Level 11: Turning points", "Level 12: Getting away", "Level 13: Money matters", "Level 14: Teamwork", "Level 15: What an experiance!", "Level 16: Take a break"]

    const levels = levelsValue.map ((item, count) => {
        return <Level key={count} value={item}/>
    })

    return (
        <div className="levelsListContainer">
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