import React, { Component } from 'react'

export default class RenderingElements extends Component {
    username = "Cybersoft";
    lop = "Fe42";

    renderInfo = () => {
       return <p>Username: {this.username} - Lop: {this.lop}</p>
    }

    render() {
        return (
            <div>
                <h3 className="title">Renderring Elements</h3>
                {/* <p>Username: {this.username}</p>
                <p>Lop: {this.lop}</p> */}
                {this.renderInfo()}
            </div>
        );
    }
}
