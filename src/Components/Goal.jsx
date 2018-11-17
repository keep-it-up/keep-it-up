import React, { Component } from 'react'
import Calendar from 'react-calendar'
import './Goal.css'

export default class Goal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    onChange = date => this.setState({ date })
    onClickDay = date => {
        alert(`today's date is ${date}}`)
    }
    
    render() {
        return (
            <div className="App">
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                    onClickDay={this.onClickDay}
                />
            </div>
        )
    }
}