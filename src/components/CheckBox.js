import React, { Component } from "react";
class CheckBox extends Component {
  marcar = () => {
    this.props.checked(this.props.id);
  };
  render(){
    const id = this.props.id;
    console.log(id)
    return (
      <h3>{id}</h3>

      //   <li>
      //    <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" />
      //    <h1>{props.id}</h1>
      //   </li>
    );
  }
}
export default CheckBox;
