import React, { Component } from 'react'

export default class ExampleHandlingEvent extends Component {

    isLogin = false;
    username = "Hau";

    handlingEvent = () => {
       this.isLogin = true ;
       console.log(this.isLogin);
    }


    renderHTML = () => {
        // if(this.isLogin){
        //     return <p>Hello {this.username}</p>;
        // }else{
        //     return <button className="btn btn-success">Login</button>;
        // }
        return this.isLogin? <p>Hello {this.username}</p> :  <button className="btn btn-success" onClick = {this.handlingEvent}>Login</button>;
    }

    render() {
        console.log("render");
        return (
            <div>
                <h3 className="title">ExampleHandlingEvent</h3>
                {this.renderHTML()}
            </div>
        )
    }
}
