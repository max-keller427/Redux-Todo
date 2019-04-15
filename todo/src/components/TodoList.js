import React from "react";

import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../actions";

class TodoList extends React.Component {
  state = {
    newTask: ""
  };

  handleChanges = e => {
    this.setState({ newTask: e.target.value });
  };

  addTask = e => {
    e.preventDefault();
    this.props.addNewTask(this.state.newTask);
  };

  toggleTask = (e, index) => {
    e.preventDefault();
    this.props.toggleTask(index);
  };

  render() {
    return <div>"sup"</div>;
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    todo: state.todo
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(TodoList);
