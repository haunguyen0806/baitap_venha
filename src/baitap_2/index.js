import React from "react";
import Header from "./header.js"
import Carousel from "./carousel.js"
import Whatwedo from "./whatwedo.js"
import Contact from "./contact.js"
import Listcard from "./listcard.js"
import Footer from "./footer.js"

import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery.min.js"
import "popper.js/dist/umd/popper.min.js"
import "bootstrap/dist/js/bootstrap.min.js"

export default function Baitap2(){
    return (
        <div>
            <Header />
            <Carousel />
            <div className="container">
                <div className="row">
                    <Whatwedo />
                    <Contact />
                </div>
            </div>
            <div className="container">
                <Listcard />
            </div>
            
            <Footer />
        </div>
    );
}