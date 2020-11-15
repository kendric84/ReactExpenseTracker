import React, { Component } from "react";
import ExpenseInput from "./ExpenseInput";
import ExpenseTable from "./ExpenseTable";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      category: "",
      location: "",
      amount: "",
      date: "",
      description: "",
      remove: "",
      rows: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  componentDidMount() {
    let existingRows =
      JSON.parse(localStorage.getItem("expense-tracker")) || [];
    this.setState({ rows: existingRows });
  }

  handleSubmit(e) {
    e.preventDefault();
    let idMax =
      JSON.parse(localStorage.getItem("expense-tracker")) === null || JSON.parse(localStorage.getItem("expense-tracker")).length === 0
        ? 1
        : Math.max.apply(
            {},
            JSON.parse(localStorage.getItem("expense-tracker")).map((a) => a.id)
          ) + 1;
    let newRow = {
      id: idMax,
      category: e.target.category.value,
      location: e.target.location.value,
      amount: e.target.amount.value,
      date: e.target.date.value,
      description: e.target.description.value,
      remove: "X",
    };
    let existingRows = this.state.rows.length === 0 ? [] : [...this.state.rows];
    existingRows.push(newRow);
    localStorage.clear();
    localStorage.setItem("expense-tracker", JSON.stringify(existingRows));
    this.setState({ rows: existingRows });
    return e.target.reset();
  }

  handleDelete(e) {
    let existingRows = JSON.parse(localStorage.getItem("expense-tracker"));
    let updatedRows = existingRows.filter((data) => data.id != e.target.id);
    localStorage.setItem("expense-tracker", JSON.stringify(updatedRows));
    this.setState({ rows: updatedRows });
  }

  render() {
    return (
      <div className="container">
        <h1 id="header">Expense Tracker</h1>
        <div>
        <ExpenseInput
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          rows={this.state.rows}
        />
        <ExpenseTable handleDelete={this.handleDelete} rows={this.state.rows} />
        </div>
      </div>
    );
  }
}

export default App;
