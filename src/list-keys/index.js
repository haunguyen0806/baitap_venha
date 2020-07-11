import React, { Component } from 'react'

export default class ListKeys extends Component {

    constructor(pros){
        super(pros);

        this.state = {
            listProduct: [
                {id : 1, name : "IphoneX" , price: 123456},
                {id : 2, name : "Iphone11" , price: 123456},
                {id : 3, name : "IphoneXs" , price: 123456},
                {id : 4, name : "Iphone8plus" , price: 123456}
            ]
        };
    }

    renderTable = () => {
        const { listProduct } = this.state; //Bóc tách biến
        return listProduct.map(product => { //map tạo mảng mới
            return (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div>
                <h3 className="title">* ListKeys</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
