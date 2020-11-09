import React, { Component } from "react";

class ExpenseTable extends Component {
  constructor() {
    super();

    let existingRows = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;
    
    if (i > 0) {
      while (i--) {
        existingRows.push(JSON.parse(localStorage.getItem(keys[i])));
      }
      this.setState({rows: existingRows})
      console.log(this.state)
    }
  }

  render(props) {
    let tableRows = {};
    if (this.props.rows === null) {
      return <tr></tr>;
    } else {
      console.log(this.props.rows);
      tableRows = this.props.rows.map((data) => {
        return (
          <tr>
            <td class="text-center">{data.id}</td>
            <td>{data.category}</td>
            <td>{data.location}</td>
            <td class="text-center">${data.amount}</td>
            <td class="text-center">{data.date}</td>
            <td>{data.description}</td>
            <td
              id={data.id}
              class="text-center"
              onClick={() => localStorage.removeItem(data.id)}
            >
              {data.remove}
            </td>
          </tr>
        );
      });
    }

    return (
      <div>
        <table class="table table-striped">
          <thead class="thead-light">
            <tr>
              <th class="text-center">ID</th>
              <th>Category</th>
              <th>Location</th>
              <th class="text-center">Amount</th>
              <th class="text-center">Date</th>
              <th>Description</th>
              <th class="text-center">Remove</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    );
  }
}

export default ExpenseTable;
