import React from 'react'
import { Component } from 'react';


class Schedule extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          edit: false,
          initalData: [{
            id: '1',
            task: 'Quad, glute, & hamstring workout on monday',
            done: false
          }, {
            id: '2',
            task: 'Bicep and tricep workout on tuesday',
            done: false
          }, {
            id: '3',
            task: 'Rest day on wednesday',
            done: false
          }, {
            id: '4',
            task: 'Back workout on thursday',
            done: false
          },{
            id: '5',
            task: 'Abs workout on friday',
            done: false
          },
          {
            id: '6',
            task: 'Rest day on saturday',
            done: false
          },
          {
            id: '7',
            task: 'Quad and calf workout on sunday',
            done: false
          }]
        }
      }


      submitTask(e) {
        e.preventDefault();
    
        this.setState({
          initalData: [...this.state.initalData, {
            task: e.target.item.value,
            done: false,
          }]
        })
        e.target.item.value = '';
      }

      completedTask() {
        let id = arguments[0];
    
        this.setState({
          initalData: this.state.initalData.map(item => {
            if (item.id === id) {
              item['done'] = true;
              return item 
            }
            return item
            })
        })
      }
    
      deleteTask() {
        let id = arguments[0];
    
        this.setState({
          initalData: this.state.initalData.filter(item => {
            if (item.id !== id) {
              return item }
          })
        })
      }
    
    
      updateTask(e) {
        e.preventDefault();
    
        this.setState({
          initalData: this.state.initalData.map(item => {
            if (item.id === this.state.id) {
              item['task'] = e.target.updatedItem.value;
              return item
            }
            return item
          })
        })
        this.setState({
          edit: false
        })
      }
    
      render() {
        return (
          <div className='schedule-section'>
            <form onSubmit={this.submitTask.bind(this)}>
              <input type="text" name="item" className="input-bar" />
              <button className="task-button">Add</button>
            </form>

            <div className='task-list'>
              {this.state.initalData.map(item => (
                <li key={item.id} className={ item.done ? 'done' : 'hidden' }>
                  {item.task}
                  <button className='task-button' onClick={this.deleteTask.bind(this, item.id)}>Delete Workout</button>
                  <button className='task-button' onClick={this.completedTask.bind(this, item.id)}>Complete Workout</button>
                </li>
              ))}
            </div>
          </div>
        )
      }
    }

export default Schedule 