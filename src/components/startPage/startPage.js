import './startPage.css';
import book from './img/book.png';
import startBtnImage from './img/start.png';
import levelsBtnImage from './img/levels.png';

const StartPage = () => {
    const date = new Date();

    const nowDate = date.getDate(); //Date

    const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const nowDay = days[date.getDay()];// Day

    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const nowMonth = months[date.getMonth()]; //Month

    return (
        <div className="startPage">
            <h2 className="startPageHeading nowDate">
                {`${nowDay}, ${nowMonth} ${nowDate}-е`}
            </h2>
            <h3 className="startPageHeading greeting">
                Мы рады видеть Вас сегодня!
            </h3>

            <div className="outerCirkle">
                <div className="innerCircle">
                    <img src={book} alt="start page" className='innerCircleImage'/>
                </div>
                <div className="startBtnContainer">
                    <div className="startButtonCircle">
                        <a href="#" className="startPageLink">
                            <img src={startBtnImage} alt="start" className="startBtnImage"/>
                        </a>
                    </div>
                    <h3 className="startBtnValue btnValue">Старт</h3>
                </div>
                <div className="levelsBtnContainer">
                    <div className="levelsButtonCircle">
                        <a href="#" className='startPageLink'>
                            <img src={levelsBtnImage} alt="levels" className="levelsBtnImage"/>
                        </a>
                    </div>
                    <h3 className="levelsBtnValue btnValue">Уровни</h3>
                </div>
                
            </div>
        </div>
    )
}

export default StartPage;