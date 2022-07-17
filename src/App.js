import './App.css';

import { Component } from 'react';

import Screensaver from './components/screensaver/screensaver';
import StartPage from './components/startPage/startPage';
import LevelsList from './components/levelsList/levelsList';
import Task from './components/task/task';

import {Routes, Route} from 'react-router-dom';

import error from './img/error.jpg';
import question from './img/question.svg';

import unit1 from './units/unit1';
import unit2 from './units/unit2';

class App extends Component {
  constructor(props) {
    super(props)

    this.unitsList = {
      unit1: unit1,
      unit2: unit2
    }


    this.units = {
      unit0: false,
      unit1: false,
      unit2: false,
      unit3: false,
      unit4: false,
      unit5: false,
      unit6: false,
      unit7: false,
      unit8: false,
      unit9: false,
      unit10: false,
      unit11: false,
      unit12: false,
      unit13: false,
      unit14: false,
      unit15: false,
      unit16: false,
      unit17: false,
    }

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
        numUnit = this.getRandomNum(maxNumUnits);
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
  

  render() {
    return (
      <div className="App">
        <Routes>
            <Route exact path='/' element={<Screensaver/>}/>
            <Route exact path='/main' element={<StartPage chooseTask={this.chooseTask}/>}/>
            <Route exact path='/main/levels' element={<LevelsList chooseLevels={this.chooseLevels} colors={this.state.levels} chooseTask={this.chooseTask}/>}/>
            <Route exact path='/main/task' element={<Task units={this.state.levels} word={this.state.task.word}  url={this.state.task.url} btnValue={this.state.btnValue} chooseTask={this.chooseTask}/>} />
        </Routes>
      
    </div>
    )
  }
}

export default App;
