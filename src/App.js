import './App.css';

import Screensaver from './components/screensaver/screensaver';
import StartPage from './components/startPage/startPage';
import LevelsList from './components/levelsList/levelsList';
import Task from './components/task/task';
import TaskLang from './components/taskLang/taskLang';

import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';

import error from './img/error.jpg';
import question from './img/question.jpg';

import unit1 from './units/unit1';
import unit2 from './units/unit2';
import unit3 from './units/unit3';
import unit4 from './units/unit4';
import unit5 from './units/unit5';
import unit6 from './units/unit6';
import unit7 from './units/unit7';
import unit8 from './units/unit8';
import unit9 from './units/unit9';
import unit10 from './units/unit10';
import unit11 from './units/unit11';
import unit12 from './units/unit12';
import unit13 from './units/unit13';
import unit14 from './units/unit14';
import unit15 from './units/unit15';
import unit16 from './units/unit16';
import unit17 from './units/unit17';
import unit18 from './units/unit18';
import unit19 from './units/unit19';
import unit20 from './units/unit20';
import unit21 from './units/unit21';
import unit22 from './units/unit22';
import unit23 from './units/unit23';
import unit24 from './units/unit24';
import unit25 from './units/unit25';
import unit26 from './units/unit26';
import unit27 from './units/unit27';


const App = () => {
  
  const unitsList = {unit1: unit1, unit2: unit2, 
    unit3: unit3, unit4: unit4, unit5: unit5, unit6: unit6, 
    unit7: unit7, unit8: unit8, unit9: unit9, unit10: unit10, 
    unit11: unit11, unit12: unit12, unit13: unit13, unit14: unit14, 
    unit15: unit15, unit16: unit16, unit17: unit17, unit18: unit18, 
    unit19: unit19, unit20: unit20, unit21: unit21, unit22: unit22, 
    unit23: unit23, unit24: unit24, unit25: unit25, unit26: unit26,
    unit27: unit27} ;

  const units = {unit0: false, unit1: false, unit2: false, unit3: false, 
    unit4: false, unit5: false, unit6: false, unit7: false, unit8: false, 
    unit9: false, unit10: false, unit11: false, unit12: false, unit13: false, 
    unit14: false, unit15: false, unit16: false, unit17: false, unit18: false, 
    unit19: false, unit20: false, unit21: false, unit22: false, unit23: false, 
    unit24: false, unit25: false, unit26: false, unit27: false};

  const [levels, setLevels] = useState(units);
  const [btnValue, setBtnValue] = useState('');
  const [task, setTask] = useState({
    word: 'Вы не выбрали уровень',
    translate: '',
    url: error,
    answerImage: ''
  });
  const [lang, setLang] = useState('ru');

  const [isActiveTask, setIsActiveTask] = useState(false);
    

  const chooseLevels = (event) => {
    const targetId = event.target.id;

    const changedUnits = {...levels};
    
    if (targetId === 'unit0') {

      if (levels.unit0 === false) {
        for (let unit in changedUnits) {
          changedUnits[unit] = true
        }
        setLevels(changedUnits);
      } else {
        for (let unit in changedUnits) {
          changedUnits[unit] = false
        }
        setLevels(changedUnits);
      }
    } else {
      changedUnits[targetId] = !changedUnits[targetId];
      setLevels(changedUnits);
    }
  }


  const getRandomNum = (max, min=0) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  const chooseTask = () => {
    if (isActiveTask === false ) {
      const units = [];
      
      for (const unit in levels) {
        if (levels[unit]) {
          units.push(unit);
        }
      }

      if (units.length === 0 || units.length === undefined) {
        setTask({
          word: 'Вы не выбрали уровень',
          translate: '',
          url: error,
          answerImage: ''
        })
        setBtnValue('')
        return;
      }

      let maxNumUnits = 0;
      let numUnit = 0;
      
      maxNumUnits = units.length - 1;
      let unitName = '';

      if (maxNumUnits === 0) {
        unitName = units[maxNumUnits];
      } else {
        maxNumUnits = units.length - 1;
        numUnit = getRandomNum(maxNumUnits, 1);
        unitName = units[numUnit];
      }
      
      const unit = unitsList[unitName];
      const maxNumTask = unit.length - 1;
      const numTask = getRandomNum(maxNumTask);
      const currentTask = checkLang(unit[numTask]);

      setTask({
        word: currentTask.word,
        translate: currentTask.translate,
        url: question,
        answerImage: currentTask.url
      });

      setBtnValue('Ответ');
      setIsActiveTask(true);

    } else {
      const temporaryState = checkLang(task);

      setTask({
        word: temporaryState.translate,
        translate: temporaryState.word,
        url: temporaryState.answerImage,
        answerImage: question
      });
      
      setBtnValue('Далее');
      setIsActiveTask(false);
      }
  }


  const checkLang = (currentTask) => {
    let task = {};

    if (lang === 'ru') {
      task = {...currentTask}
    } else {
     task = isActiveTask ? {
                              word: currentTask.word,
                              translate: currentTask.translate, 
                              url: currentTask.url,
                              answerImage: currentTask.answerImage,
                            } : {
                              word: currentTask.translate,
                              translate: currentTask.word, 
                              url: currentTask.url,
                              answerImage: currentTask.answerImage,
                            }
    }
    return task;
  };

  
  const changeLang = (event) => {
    const target = event.target;
    setLang(target.innerHTML);
  }


  const changeStartIsActiveTask = () => {
    setIsActiveTask(false);
    chooseTask();
  }


  return (
    <div className="App">
      <Routes>
          <Route exact path='/' element={<Screensaver/>}/>
          <Route exact path='/main' element={<StartPage chooseTask={chooseTask}/>}/>
          <Route exact path='/main/levels' element={<LevelsList 
                                                      chooseLevels={chooseLevels} 
                                                      colors={levels} 
                                                      chooseTask={chooseTask} />}/>
          <Route exact path='/main/task' element={<Task 
                                                    units={levels} 
                                                    word={task.word}  
                                                    url={task.url} 
                                                    btnValue={btnValue} 
                                                    chooseTask={chooseTask} lang={lang}
                                                    />} />
          <Route exact path='/main/lang' element={<TaskLang changeStartIsActiveTask={changeStartIsActiveTask} changeLang={changeLang} lang={lang}/>} />
      </Routes>
    
  </div>
  )
}

export default App;
