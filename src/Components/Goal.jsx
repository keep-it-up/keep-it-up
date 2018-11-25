import React, { Component } from 'react'
import Calendar from './Calendar'
import './Goal.css'
// import Popup from './Popup.jsx'

export default class Goal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            points: 2,
            consecutive: 2,
        }
    }



    onActiveDateChange = ({ activeStartDate, view }) => alert('Changed view to: ', activeStartDate, view)


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
                <Calendar/>
            </div>
        )
    }
}