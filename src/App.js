import React, { Component } from "react";
import ExpenseInput from "./ExpenseInput";
import ExpenseTable from "./ExpenseTable";
//import "./style.css"

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
      rows: [],
    };

    let existingRows = []
    let keys = Object.keys(localStorage)
    let i = keys.length;
    if (i > 0) {
      while (i--) {
        existingRows.push(JSON.parse(localStorage.getItem(keys[i])));
      }
      this.setState({rows: existingRows})
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  /*componentDidMount() {
    let existingRows = []
    let keys = Object.keys(localStorage)
    let i = keys.length;
    if (i > 0) {
      while (i--) {
        existingRows.push(JSON.parse(localStorage.getItem(keys[i])));
      }
      this.setState({rows: existingRows})
    }
  }*/

  handleSubmit(e) {
    e.preventDefault();
       let idMax =
        Object.keys(localStorage).length === 0
          ? 1
          : Math.max.apply({}, Object.keys(localStorage)) + 1;
      let newRow = {
        id: idMax,
        category: e.target.category.value,
        location: e.target.location.value,
        amount: e.target.amount.value,
        date: e.target.date.value,
        description: e.target.description.value,
        remove: "X"
      };
      let existingRows = this.state.rows.length === 0 ? [] : [...this.state.rows]
      existingRows.push(newRow);
      localStorage.clear();
      localStorage.setItem(idMax, JSON.stringify(existingRows));
      this.setState({ rows: existingRows });
      return e.target.reset()

  }

  handleDelete(e) {
    this.setState({ rows: [...this.state.rows.filter(data => data.id !== e)] });
  }

  render() {
    return (
      <div className="form-group">
        <h1 id="header">Expense Tracker</h1>
        <ExpenseInput
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <ExpenseTable handleDelete={this.handleDelete} rows={this.state.rows} />
      </div>
    );
  }
}

export default App;
