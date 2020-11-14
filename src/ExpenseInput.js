import React, { Component } from "react";

class ExpenseInput extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    let categoryOptions = {}
    if (this.props.rows === []) {
      return <option></option>;
    } else {
      let existingCategories = this.props.rows.map((a) => a.category)
      categoryOptions = existingCategories.map((data) => {
        return (
          <option>{data}</option>
        );
      });
    }

    let locationOptions = {}
    if (this.props.locations === []) {
      return null;
    } else {
      let existingLocations = this.props.rows.map((a) => a.location)
      locationOptions = existingLocations.map((data) => {
        return (
          <option>{data}</option>
        );
      });
    }

    return (
      <div className="form-group">
        <form
          className="form"
          id="user-input"
          onSubmit={this.props.handleSubmit}
        >
          <div className="form-group row">
            <div className="col-sm-9">
              <input
                required
                className="form-control"
                id="category"
                type="text"
                placeholder="Category..."
                list="category-options"
                onChange={this.props.handleChange}
                name="category"
              >
              </input>
              <datalist id="category-options">{categoryOptions}</datalist>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-9">
              <input
                required
                className="form-control"
                id="location"
                type="text"
                placeholder="Location..."
                list="location-options"
                onChange={this.props.handleChange}
                name="location"
              >
              </input>
              <datalist id="location-options">{locationOptions}</datalist>
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
                onChange={this.props.handleChange}
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
                onChange={this.props.handleChange}
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
                onChange={this.props.handleChange}
                name="description"
              />
            </div>
          </div>
          <div className="form-group row" id="add-button-div">
            <div className="row">
              <div className="col-sm-9 offset-sm-3">
                <button
                  className="btn btn-danger"
                  type="submit"
                  id="add-button"
                >
                  Add Expense
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ExpenseInput;
