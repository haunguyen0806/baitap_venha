import React, { Component } from 'react'

export default class HandlingEvent extends Component {

    handleOnclick = () => {
        console.log("handleOnlick");
    };
    handleParams = (name, tuoi) => {
        console.log("Hello" + name + "Tuoi" + tuoi);
    };

    render() {
        return (
            <div>
                <h3 className="title">HandlingEvent</h3>
                <button className="btn btn-success" onClick={this.handleOnclick}>HandlingEvent</button>
                <br/>
                <button className="btn btn-info" onClick={()=>{this.handleParams("Hau","21")}}>HandlingEvent Params</button>
            </div>
        )
    }
}
