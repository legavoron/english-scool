import './App.css';

import { Component } from 'react';

import Screensaver from './components/screensaver/screensaver';
import StartPage from './components/startPage/startPage';
import LevelsList from './components/levelsList/levelsList';
import Task from './components/task/task';

import {Routes, Route} from 'react-router-dom';

import error from './img/error.svg';
import question from './img/question.svg';

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

class App extends Component {
  constructor(props) {
    super(props)

    this.unitsList = {unit1: unit1, unit2: unit2, unit3: unit3, unit4: unit4, unit5: unit5, unit6: unit6, unit7: unit7, unit8: unit8, unit9: unit9, unit10: unit10, unit11: unit11, unit12: unit12, unit13: unit13, unit14: unit14, unit15: unit15, unit16: unit16, unit17: unit17}


    this.units = {unit0: false, unit1: false, unit2: false, unit3: false, unit4: false, unit5: false, unit6: false, unit7: false, unit8: false, unit9: false, unit10: false, unit11: false, unit12: false, unit13: false, unit14: false, unit15: false, unit16: false, unit17: false, }

    this.state = {
      levels: this.units,
      btnValue: '',

      task: {
        word: 'Вы не выбрали уровень!',
        translate: '',
        url: error,
        answerImage: ''
      }      
    }
  }
  

  chooseLevels = (event) => {

    const target = event.target.id;
    const unit = this.state.levels;
    
    if (event.target.id === 'unit0') {
      let changedUnits = this.units;

      if (this.state.levels.unit0 === false) {
        for (let unit in changedUnits) {
          changedUnits[unit] = true
        }
        this.setState({levels: changedUnits})
      } else {
        for (let unit in changedUnits) {
          changedUnits[unit] = false
        }
        this.setState({levels: changedUnits})
      }
    } else {
        unit[target]  = !unit[target];
        this.setState({levels: unit})
    }
  }

  getRandomNum = (max, min=0) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  chooseTask = () => {
    
    const units = [];
    const unitsListOfState = this.state.levels;
    for (const unit in unitsListOfState) {
      if (unitsListOfState[unit]) {
        units.push(unit)
      }
    }

    let maxNumUnits = 0;
    let numUnit = 0;
    
    if (units.length > 0) {

      maxNumUnits = units.length - 1;
      let unitName = '';

      if (maxNumUnits === 0) {
        unitName = units[maxNumUnits];
      } else {
        maxNumUnits = units.length - 1;
        numUnit = this.getRandomNum(maxNumUnits, 1);
        unitName = units[numUnit];
      }
      
      const unit = this.unitsList[unitName];

      const maxNumTask = unit.length - 1;
      const numTask = this.getRandomNum(maxNumTask);
      const task = unit[numTask];

      if (this.state.btnValue === '' || this.state.btnValue === 'Далее') {
        const newStateTask = {
          word: task.word,
          translate: task.translate,
          url: question,
          answerImage: task.url
        }
  
        this.setState({task: newStateTask});
        this.setState({btnValue: 'Ответ'});
      } else {
        
        const newStateTask = {
          word: this.state.task.translate,
          url: this.state.task.answerImage
        }
  
        this.setState({task: newStateTask});
        this.setState({btnValue: 'Далее'});
      }
    }
  }
  
  exitFromTask = (event) => {
    this.chooseTask(event)
  }

  render() {
    return (
      <div className="App">
        <Routes>
            <Route exact path='/' element={<Screensaver/>}/>
            <Route exact path='/main' element={<StartPage chooseTask={this.chooseTask}/>}/>
            <Route exact path='/main/levels' element={<LevelsList chooseLevels={this.chooseLevels} colors={this.state.levels} chooseTask={this.chooseTask} />}/>
            <Route exact path='/main/task' element={<Task units={this.state.levels} word={this.state.task.word}  url={this.state.task.url} btnValue={this.state.btnValue} chooseTask={this.chooseTask} exitFromTask={this.exitFromTask}/>} />
        </Routes>
      
    </div>
    )
  }
}

export default App;
