import React, { Component } from "react";

class ExpenseInput extends Component {
  render() {
    return (
      <div>
        <form className="form" id="user-input" onSubmit={this.props.handleSubmit}>
          <div className="form-group row">
            <div className="col-sm-9">
              <input
                required
                className="form-control"
                id="category"
                type="text"
                list="category-options"
                placeholder="Category..."
                onChange={this.handleChange}
                name="category"
              />
            </div>
            <datalist id="category-options"> </datalist>
          </div>
          <div className="form-group row">
            <div className="col-sm-9">
              <input
                required
                className="form-control"
                id="location"
                type="text"
                list="location-options"
                placeholder="Location..."
                onChange={this.handleChange}
                name="location"
              />
              <datalist id="location-options"> </datalist>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-9">
              <input
                required
                className="form-control"
                id="amount"
                type="text"
                placeholder="Amount..."
                onChange={this.handleChange}
                name="amount"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-9">
              <input
                required
                className="form-control"
                id="date"
                type="date"
                onChange={this.handleChange}
                name="date"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-9">
              <input
                required
                className="form-control"
                id="description"
                type="text"
                placeholder="Description..."
                onChange={this.handleChange}
                name="description"
              />
            </div>
          </div>
          <div className="form-group row" id="add-button-div">
          <div className="row">
          <div className="col-sm-9 offset-sm-3">
            <button className="btn btn-danger" type="submit" id="add-button">
              Add Expense
            </button>
          </div></div></div>
        </form>
      </div>
    );
  }
}

export default ExpenseInput;
