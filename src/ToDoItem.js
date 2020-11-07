import React, { Component } from "react";

class ToDoItem extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event.target.id);
  }

  render() {
    let rows = [];
    let rowData = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      rowData.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    rows = rowData.map(function (data) {
      return (
        <tr>
          <td class="text-center">{data.id}</td>
          <td>{data.category}</td>
          <td>{data.location}</td>
          <td class="text-center">${data.amount}</td>
          <td class="text-center">{data.date}</td>
          <td>{data.description}</td>
          <td class="text-center" onClick={this.handleClick}>
            {data.remove}
          </td>
        </tr>
      );
    });
    return <tbody>{rows}</tbody>;
  }
}
export default ToDoItem;
