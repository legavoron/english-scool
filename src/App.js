import './App.css';

import Screensaver from './components/screensaver/screensaver';
import StartPage from './components/startPage/startPage';
import LevelsList from './components/levelsList/levelsList';
import Task from './components/task/task';

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

const App = () => {
  
  const unitsList = {unit1: unit1, unit2: unit2, unit3: unit3, unit4: unit4, unit5: unit5, unit6: unit6, unit7: unit7, unit8: unit8, unit9: unit9, unit10: unit10, unit11: unit11, unit12: unit12, unit13: unit13, unit14: unit14, unit15: unit15, unit16: unit16};

  const units = {unit0: false, unit1: false, unit2: false, unit3: false, unit4: false, unit5: false, unit6: false, unit7: false, unit8: false, unit9: false, unit10: false, unit11: false, unit12: false, unit13: false, unit14: false, unit15: false, unit16: false};


  const [levels, setLevels] = useState(units);
  const [btnValue, setBtnValue] = useState('');
  const [task, setTask] = useState({
    word: 'Вы не выбрали уровень',
    translate: '',
    url: error,
    answerImage: ''
  });

  // const [currentTask, setCurrentTask] = useState('');
  const [isActiveTask, setIsActiveTask] = useState(false);
  const [isError, setIsError] = useState(true);
  

  const chooseLevels = (event) => {

    const target = event.target.id;
    const unit = levels;
    
    if (event.target.id === 'unit0') {
      let changedUnits = units;

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
        unit[target]  = !unit[target];
        setLevels(unit);
    }
    setIsError(false);
  }

  const getRandomNum = (max, min=0) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const chooseTask = () => {
    if (isActiveTask === false ) {

      if (isError) {
        return
      }

      const units = [];
      
      // В units хранится список выбранных unit. Если уровни не выбраны - он пустой
      for (const unit in levels) {
        if (levels[unit]) {
          units.push(unit);
        }
      }

      // Если не выбраны уровни, то выходим из функции
      if (units.length === 0) {
        return
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

      // В currentTask хранится текущий task
      console.log(unit[numTask]);
      const currentTask = unit[numTask];
      console.log(currentTask);

      setTask({
        word: currentTask.word,
        translate: currentTask.translate,
        url: question,
        answerImage: currentTask.url
      });
      setBtnValue('Ответ');
      setIsActiveTask(true);

      console.log('isActiveTask: ' + isActiveTask);
      console.log(task);


    } else {
      
      console.log('isActiveTask: ' + isActiveTask);
      console.log(task);
      const temporaryState = task;
      console.log(temporaryState.url)

      setTask({
        word: temporaryState.translate,
        translate: temporaryState.word,
        url: temporaryState.answerImage
      });

      setBtnValue('Далее');
      setIsActiveTask(false);
      }
  }
  

  
  const exitFromTask = (event) => {
    chooseTask(event);
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
                                                    chooseTask={chooseTask} 
                                                    exitFromTask={exitFromTask}/>} />
      </Routes>
    
  </div>
  )
}

export default App;
