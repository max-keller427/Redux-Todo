import React from "react";

import { connect } from "react-redux";

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
const mapStateToProps = state => ({
  todo: state.todoReducer.todo
});

export default connect(
  mapStateToProps,
  { addNewTask, toggleTask }
)(TodoList);
