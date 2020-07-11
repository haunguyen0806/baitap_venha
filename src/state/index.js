import React, { Component } from 'react'

export default class State extends Component {

    constructor(pros){
        super(pros);

        this.state ={
            isLogin : false,
            username : "Hau"
        }
    }

    handlingEvent = () => {
       this.setState({
            isLogin : true
       });
    }
    // khi state thay đổi thì hàm render chayj lại

    renderHTML = () => {
        return this.state.isLogin? <p>Hello {this.state.username}</p> :  <button className="btn btn-success" onClick = {this.handlingEvent}>Login</button>;
    }

    render() {
        console.log("render");
        return (
        
            <div>
                <h3 className="title">* State</h3>
                {this.renderHTML()}
            </div>
        )
    }
}
