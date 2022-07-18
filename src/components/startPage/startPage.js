import './startPage.css';
import * as React from "react";
import { NavLink } from "react-router-dom";

import book from './img/book.svg';
import startBtnImage from './img/start.svg';
import levelsBtnImage from './img/levels.svg';

const StartPage = ({chooseTask}) => {
    const date = new Date();

    const nowDate = date.getDate(); //Date

    const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const nowDay = days[date.getDay()];// Day

    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const nowMonth = months[date.getMonth()]; //Month

    return (
        <div className="startPage">
            <div className="greeting_container">
                <h2 className="startPageHeading nowDate">
                    {`${nowDay}, ${nowMonth} ${nowDate}-е`}
                </h2>
                <h3 className="startPageHeading greeting">
                    Мы рады видеть Вас сегодня!
                </h3>
            </div>

            <div className="outerCirkle">
                <div className="innerCircle">
                    <img src={book} alt="start page" className='innerCircleImage'/>
                </div>
                <div className="startBtnContainer">
                    <div className="startButtonCircle">
                        <NavLink to="task" className="startPageLink" >
                            <img src={startBtnImage} alt="start" className="startBtnImage"/>
                        </NavLink>
                    </div>
                    <NavLink to="task" 
                        className="linkValue" >
                        <h3 className="startBtnValue btnValue">Старт</h3>
                    </NavLink>
                </div>
                <div className="levelsBtnContainer">
                    <div className="levelsButtonCircle">
                        <NavLink to="levels" className='startPageLink'>
                            <img src={levelsBtnImage} alt="levels" className="levelsBtnImage"/>
                        </NavLink>
                    </div>
                    <NavLink to='levels' className="linkValue">
                        <h3 className="levelsBtnValue btnValue">Уровни</h3>
                    </NavLink>
                </div>
                
            </div>
        </div>
    )
}

export default StartPage;