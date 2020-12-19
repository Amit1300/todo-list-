import React, { Component } from "react";

import "./Listcom.css";
export default class Listcom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      arr:[]
    }
  }

  click = (e) => {
    this.setState({ checked: !this.state.checked });
    console.log(this.state.checked);

    var today = new Date();

    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    if (this.props.item.uservalue.date < date) {
      this.setState({arr:["you are late"]})
      
    }
  };

  render() {
    const { item } = this.props;

    return (
      <div className="main">
        <div className="main_todo">
            <div>
            <input
              type="checkbox"
              checked={this.state.checked}
              onChange={(e) => {
                this.click(e);
              }}
            />
            </div>

            <div className="p">
            <p
           
              style={
              this.state.checked? { textDecoration: "line-through" }: { textDecoration: "none" }  }>
              {this.props.item.uservalue.work}
            </p>
           
            </div>
        
          <div>
          <button
            className="delete_button"
            onClick={() => {
              this.props.delete(item.uservalue.id);
            }}
          >
            delete
          </button>
          </div>
          </div>
          <span>{this.props.item.uservalue.date} {this.state.arr}</span>
        </div>
     
    );
  }
}
