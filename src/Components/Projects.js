import React, { Component } from 'react'
import './Components.css'
export default class Projects extends Component {
    render(){
        return(
            <>
             <div className="menu">
        <input type="checkbox" id="toggle" />
        <label id="show-menu" htmlFor="toggle">
            <div className="btn">
                <i className="material-icons md-36 toggleBtn menuBtn">menu</i>
                <i className="material-icons md-36 toggleBtn closeBtn">close</i>
            </div>
            <div className="btn">
                <i className="material-icons md-36">person</i>
            </div>
            <div className="btn">
                <i className="material-icons md-36">cloud</i>
            </div>
            <div className="btn">
                <i className="material-icons md-36">portrait</i>
            </div>
            <div className="btn">
                <i className="material-icons md-36">work</i>
            </div>
            <div className="btn">
                <i className="material-icons md-36">monitor</i>
            </div>
            <div className="btn">
                <i className="material-icons md-36">settings</i>
            </div>
            <div className="btn">
                <i className="material-icons md-36">phone</i>
            </div>
            
            <div className="btn">
                <i className="material-icons md-36">cloud</i>
            </div>
        </label>
    </div>
            </>
        )
    }
}