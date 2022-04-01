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

export default Schedule 