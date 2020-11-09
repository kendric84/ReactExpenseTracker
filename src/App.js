import React, {Component} from "react";
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
      rows: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit(e) {
    if (
      e.target.category.value === "" ||
      e.target.location.value === "" ||
      e.target.amount.value === "" ||
      e.target.date.value === "" ||
      e.target.description.value === ""
    ) {
      alert("Check for missing information");
      e.preventDefault();
      return;
    } else {
      let existingRows = [...this.state.rows]
      let idMax = 0;
      idMax =
        Object.keys(localStorage).length === 0
          ? 1
          : Math.max.apply({}, Object.keys(localStorage)) +1;
      let newRow = {id: idMax,
        category: this.state.category,
        location: this.location,
        amount: this.amount,
        date: this.date,
        description: this.description,
        remove: "X"}

        existingRows.push(newRow)

        this.setState({rows: existingRows})
      
      localStorage.clear();
      localStorage.setItem(idMax, JSON.stringify(this.state.rows));
      console.log(this.state.rows)
    }
  }

  render() {
    return (
      <div class="form-group">
      <h1 id="header">Expense Tracker</h1>
      <ExpenseInput />
      <ExpenseTable />
    </div>
    )
  }
}

export default App;
