import React, { Component } from "react";

class ExpenseTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tableRows = {};
    if (this.props.rows === []) {
      return <tr></tr>;
    } else {
      tableRows = this.props.rows.map((data) => {
        return (
          <tr>
            <td className="text-center">{data.id}</td>
            <td>{data.category}</td>
            <td>{data.location}</td>
            <td className="text-center">${data.amount}</td>
            <td className="text-center">{data.date}</td>
            <td>{data.description}</td>
            <td
              id={data.id}
              className="btn btn-danger"
              onClick={this.props.handleDelete}
            >
              {data.remove}
            </td>
          </tr>
        );
      });
    }

    return (
      <div>
        <table className="table table-striped">
          <thead className="thead-light">
            <tr>
              <th className="text-center">ID</th>
              <th>Category</th>
              <th>Location</th>
              <th className="text-center">Amount</th>
              <th className="text-center">Date</th>
              <th>Description</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    );
  }
}

export default ExpenseTable;
