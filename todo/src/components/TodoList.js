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
    return (
      <>
        <div>
          <h1>ToDo List</h1>
          {this.props.todo.map((task, index) => (
            <h4 onClick={e => this.toggleTask(e, index)} key={index}>
              {task.task}
              {task.completed && <h4 className="completed" />}
            </h4>
          ))}
        </div>
        <input
          placeholder="Add Task"
          value={this.state.newTask}
          onChange={this.handleChanges}
        />
        <button onSubmit={this.addTask} />
      </>
    );
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
