import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

class ToDoTable extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      category: "",
      location: "",
      amount: "",
      date: "",
      description: "",
    };
  }

  render() {
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
              <ToDoItem />
        </table>
      </div>
    );
  }
}

export default ToDoTable;
