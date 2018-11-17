import React, { Component } from 'react'
import Calendar from 'react-calendar'
import './Goal.css'

export default class Goal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            points: 2,
            consecutive: 2,
        }
    }

    onChange = date => this.setState({ date })
    onClickDay = date => {
        alert(`today's date is ${date}}`)
    }
    
    render() {
        return (
            <div className="App">
            <div id="score">
            <div id="point">
                <h1 >Point: {this.state.points}</h1>
                </div>
                <div id="consecutive">
                <h1 >consecutive: {this.state.consecutive}</h1>
                </div>
            </div>
                

                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                    onClickDay={this.onClickDay}
                />
            </div>
        )
    }
}