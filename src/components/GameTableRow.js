import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
//import img from "../img/products/The Legend of Zelda Tears of the Kingdom.png"; //---> SACAR RUTA "REAL"

export default class GameTableRow extends Component {
  constructor(props) {
    super(props);
    //    this.deleteGame = this.deleteGame.bind(this);
  }
  /*
  deleteGame() {
    axios
      .delete("http://localhost:4000/games/delete-game/" + this.props.obj._id)
      .then((res) => {
        console.log("Game successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
*/

  render() {
    return (
      <tr>
        <td>
          <img width="300" height="400" alt="" src={this.props.obj.image} />
        </td>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.category}</td>
        <td>{this.props.obj.price}</td>
        <td>
          {/*
          <Link
            className="edit-link"
            path={"product/:id"}
            to={"/edit-game/" + this.props.obj._id}
          >
            Obtener
          </Link>
          */}
          <Link
            className="edit-link"
            path={"product/:id"}
            to={"/selectedGameView/" + this.props.obj._id}
          >
            <Button onClick={this.deleteGame} size="sm" variant="danger">
              More Details
            </Button>
          </Link>
        </td>
      </tr>
    );
  }

  /*
  deleteCustomer() {
    axios
      .delete(
        "http://localhost:4000/customers/delete-customer/" + this.props.obj._id
      )
      .then((res) => {
        console.log("Customer successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.birthdate}</td>
        <td>{this.props.obj.user}</td>
        <td>{this.props.obj.password}</td>
        <td>
          <Link
            className="edit-link"
            path={"product/:id"}
            to={"/edit-product/" + this.props.obj._id}
          >
            Editar
          </Link>
          <Button onClick={this.deleteCustomer} size="sm" variant="danger">
            Borrar
          </Button>
        </td>
      </tr>
    );
  }
  */
}
