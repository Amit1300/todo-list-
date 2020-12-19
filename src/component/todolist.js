import React, { Component } from "react";
import Listcom from "./listcom";
import "./todo.css";

export default class Todolist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_list: [],
      uservalue: "",
      date: "",
    };
  }

  getvalue = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  add = (e, datecom) => {
    if (e == "" && datecom == "") {
      return alert("plase write task");
    }

    if (e != "" && datecom !== "") {
      this.setState({
        todo_list: [
          ...this.state.todo_list,
          {
            uservalue: {
              id: Math.random(),
              work: e,
              date: datecom,
            },
          },
        ],
      });

      //console.log(this.state.todo_list)
    }

    this.setState({ uservalue: "", date: "" });
  };

  delete = (id) => {
    console.log(id);

    //   let find=this.state.todo_list.filter((item,index)=>{
    //     console.log(id,item.uservalue.id)
    //       return (item.uservalue.id!==id)
    //   })

    //     this.setState({todo_list:find})
    let index = -1;
    this.state.todo_list.find((item, ind) => {
      if (item.uservalue.id == id) {
        index = ind;
        return true;
      }
    });

    // if(find.uservalue.id==id){
    //     console.log(find.id)
    //     index=id
    // }
    // console.log(find)
    this.setState({
      todo_list: [
        ...this.state.todo_list.slice(0, index),
        ...this.state.todo_list.slice(index + 1),
      ],
    });
  };

  render() {
    return (
      <div>
        <div className="firstone">
          <div className="heading">
            <h1>To-DO -LIST </h1>
          </div>

          <div className="todo_main">
            <input
              type="text"
              onChange={this.getvalue}
              value={this.state.uservalue}
              name="uservalue"
            />
            <input type="date" onChange={this.getvalue} name="date" />
            <button
              onClick={() => {
                this.add(this.state.uservalue, this.state.date);
              }}
            >
              Add
            </button>

            {this.state.todo_list.map((item) => {
              return <Listcom item={item} delete={this.delete} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
