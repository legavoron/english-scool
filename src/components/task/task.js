import './task.css';
import {NavLink} from 'react-router-dom';
import { Component } from 'react';

class Task extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="task">
                <NavLink to="/main">
                    <div className="close">
                    
                    </div>
                </NavLink>
                <div className='taskImageContainer'>
                    <img src={this.props.url} alt="question image" className='taskImage'/>
                </div>
                <div className="valueBlock">
                    <h2 className="taskHeading">
                            {this.props.word}
                    </h2>
                    <button className='taskBtn' onClick={this.props.chooseTask}>{this.props.btnValue}</button>
                </div>
            </div>
        )
    }

    
}

export default Task;