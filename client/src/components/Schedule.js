import React from 'react'
import { Component } from 'react';


class Schedule extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          edit: false,
          initalData: [{
            id: '1',
            task: 'Monday: quad, glute, & hamstring workout',
            done: false
          }, {
            id: '2',
            task: 'Tuesday: bicep and tricep workout',
            done: false
          }, {
            id: '3',
            task: 'Wednesday: rest day',
            done: false
          }, {
            id: '4',
            task: 'Thursday: back workout',
            done: false
          },{
            id: '5',
            task: 'Friday: abs workout',
            done: false
          },
          {
            id: '6',
            task: 'Saturday: rest day',
            done: false
          },
          {
            id: '7',
            task: 'Sunday: quad and calf workout',
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
              <input type="text" name="item" placeholder='Add workout' className="input-bar" />
              <button className="add-button">Add</button>
            </form>

            <div className='task-list'>
              <h3>Workout Plan:</h3>
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