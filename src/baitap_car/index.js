import React, { Component } from 'react'
import { switchCase } from '@babel/types';

export default class BaitapCar extends Component {

    constructor(pros){
        super(pros);

        this.state ={
            img : "./img/imgRedCar.jpg"
        }
    }
    handleChangeColor = (color) =>{
        let img = "";
        switch (color){
            case "red" :
                img = "./img/imgRedCar.jpg";
                break;
            case "silver" :
                img = "./img/imgSilverCar.jpg";
                break;
            default :
                img = "./img/imgBlackCar.jpg";
                break;   
        }

        this.setState({
            img
        });
    }

    render() {
        return (
            <div className = "container">
                <div className="row">
                    <div className="col-sm-6">
                        <img className="img-fluid" src={this.state.img} alt="" />
                    </div>
                    <div className="col-sm-6">
                        <button className="btn btn-danger m-2" onClick={() => {this.handleChangeColor("red")}}>Red</button>
                        <button className="btn btn-light m-2" onClick={() => {this.handleChangeColor("silver")}}>Silver</button>
                        <button className="btn btn-dark m-2" onClick={() => {this.handleChangeColor("black")}}>Black</button>
                    </div>
                </div>
            </div>
        )
    }
}
