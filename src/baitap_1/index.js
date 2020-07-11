import React, {Component} from "react";
import Header from "./header.js";
import Content from "./content.js";
import Sidebar from "./sidebar";
import Footer from "./footer";

export default class Baitap1 extends Component{
    render(){
        return (
            <div> 
                <Header />
                <div className="contents">
                    <Content />
                    <Sidebar />
                </div>
                <Footer />
            </div>
        );
    }
}


