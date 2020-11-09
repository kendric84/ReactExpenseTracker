import React, { Component } from "react";

class ExpenseInput extends Component {
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
                value={this.category}
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
                value={this.location}
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
                value={this.amount}
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
                value={this.date}
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
                value={this.description}
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
