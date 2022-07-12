import './App.css';

import { Component } from 'react';

import Screensaver from './components/screensaver/screensaver';
import StartPage from './components/startPage/startPage';
import LevelsList from './components/levelsList/levelsList';
import Task from './components/task/task';
import {Routes, Route} from 'react-router-dom'


class App extends Component {
  state = {
    levels: {
      unit0: true,
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
  }

  chooseLevels = (event) => {
    const target = event.target.id;
    const unit = this.state.levels;

    unit[target]  = unit[target] ? false: true;

    this.setState({levels: unit})

    console.log(this.state.levels);
  }


  render() {
    return (
      <div className="App">
        <Routes>
            <Route exact path='/' element={<Screensaver/>}/>
            <Route exact path='/main' element={<StartPage/>}/>
            <Route exact path='/main/levels' element={<LevelsList chooseLevels={this.chooseLevels}/>}/>
            <Route exact path='/main/task' element={<Task/>}/>
        </Routes>
      
    </div>
    )
  }
}

export default App;
