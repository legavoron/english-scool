import './startPage.css';
import * as React from "react";
import { NavLink } from "react-router-dom";

import englishLogo from '../../logo/english.svg';
import startLogo from '../../logo/start.svg';
import langLogo from '../../logo/lang.svg';
import levelsLogo from '../../logo/levels.svg';


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
                <h3 className="startPageHeading nowDate">
                    {`${nowDay}, ${nowMonth} ${nowDate}-е`}
                </h3>
                <h2 className="startPageHeading greeting">
                    Мы рады видеть Вас сегодня!
                </h2>
            </div>

            <div className="english english__container">
                    <div className="english__englishLogo_wrapper">
                        <img src={englishLogo} alt="english-school" className='english__english-logo'/>
                    </div>
                <div className="english__logos-container">
                    <div className="english__logo_wrapper">
                        <div className="english__btn_container start">
                            <NavLink to="task" className="english__link" >
                                <img src={startLogo} alt="start" className="english__btn"/>
                            </NavLink>
                        </div>
                        <NavLink to="task" 
                            className="linkValue" >
                            <h3 className="english__link_value ">Старт</h3>
                        </NavLink>
                    </div>

                    <div className="english__logo_wrapper lang_container">
                        <div className="english__btn_container lang">
                            <NavLink to="lang" className='english__link'>
                                <img src={langLogo} alt="levels" className="english__btn"/>
                            </NavLink>
                        </div>
                        <NavLink to='levels' className="linkValue">
                            <h3 className="english__link_value ">Язык</h3>
                        </NavLink>
                    </div>

                    <div className="english__logo_wrapper">
                        <div className="english__btn_container levels">
                            <NavLink to="levels" className='english__link'>
                                <img src={levelsLogo} alt="levels" className="english__btn"/>
                            </NavLink>
                        </div>
                        <NavLink to='levels' className="linkValue">
                            <h3 className="english__link_value ">Уровни</h3>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartPage;