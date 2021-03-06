import React, { Component } from "react";
import data from "./data.json";
export default class BaitapList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listMovie: data,
    };
  }

  renderMovie = () => {
    const { listMovie } = this.state;

    return listMovie.map((movie) => {
      return (
        <div className="col-sm-4 mb-2" key={movie.maPhim}>
          <div className="card">
            <img
              className="card-img-top img__movie"
              src={movie.hinhAnh}
              alt=""
            />
            <div className="card-body">
              <h4 className="card-title">{movie.tenPhim}</h4>
              <p className="card-text mota">{movie.moTa}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="title">Bai tap ListMovie</h3>
        
        <div className="row">
          {this.renderMovie()}
        </div>
      </div>
    );
  }
}