import React from "react";

import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../actions";

class TodoList extends React.Component {
  state = {
    newTodo: ""
  };

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  addTask = e => {
    e.preventDefault();
    console.log("task added");
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
    console.log(this.state);
  };

  toggleTask = (e, index) => {
    e.preventDefault();
    this.props.toggleTodo(index);
  };

  render() {
    return (
      <>
        <div>
          <h1>To Do List</h1>
          {this.props.todo.map((task, index) => (
            <h4
              onClick={e => this.toggleTask(e, index)}
              key={index}
              className={task.completed ? "completed" : null}
            >
              {task.task}
              {/* {task.completed && className={"completed"} } */}
              {/* if task.completed === !task.completed
              h4 classname = completed */}
            </h4>
          ))}
        </div>
        <input
          placeholder="New Task"
          value={this.state.newTodo}
          onChange={this.handleChanges}
        />
        <button onClick={this.addTask}>Add Task </button>
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
