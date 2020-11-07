import React, { Component } from "react";

class ExpenseInput extends Component {
  constructor() {
    super();
    this.state = {
      category: "",
      location: "",
      amount: "",
      date: "",
      description: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    if (
      event.target.category.value === "" ||
      event.target.location.value === "" ||
      event.target.amount.value === "" ||
      event.target.date.value === "" ||
      event.target.description.value === ""
    ) {
      alert("Check for missing information");
      event.preventDefault();
      return;
    } else {
      let idMax = 0;
      let newItem = [];
      idMax =
        Object.keys(localStorage).length === 0
          ? 1
          : Math.max.apply({}, Object.keys(localStorage)) +1;
      newItem = {id: idMax,
      category: event.target.category.value,
      location: event.target.location.value,
      amount: event.target.amount.value,
      date: event.target.date.value,
      description: event.target.description.value,
      remove: "X"}
      localStorage.setItem(idMax, JSON.stringify(newItem));
    }
  }

  render() {
    return (
      <div>
        <form id="user-input" onSubmit={this.handleSubmit}>
          <div class="form-group row">
            <div class="col-sm-9">
              <input
                class="form-control"
                id="category"
                type="text"
                value={this.state.category}
                list="category-options"
                placeholder="Category..."
                onChange={this.handleChange}
              />
            </div>
            <datalist id="category-options"> </datalist>
          </div>
          <div class="form-group row">
            <div class="col-sm-9">
              <input
                class="form-control"
                id="location"
                type="text"
                value={this.state.location}
                list="location-options"
                placeholder="Location..."
                onChange={this.handleChange}
              />
              <datalist id="location-options"> </datalist>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-9">
              <input
                class="form-control"
                id="amount"
                type="text"
                value={this.state.amount}
                placeholder="Amount..."
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-9">
              <input
                class="form-control"
                id="date"
                type="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-9">
              <input
                class="form-control"
                id="description"
                type="text"
                value={this.state.description}
                placeholder="Description..."
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div class="form-group row" id="add-button-div">
          <div class="row">
          <div class="col-sm-9 offset-sm-3">
            <button class="btn btn-danger" type="submit" id="add-button">
              Add Expense
            </button>
          </div></div></div>
        </form>
      </div>
    );
  }
}

export default ExpenseInput;
