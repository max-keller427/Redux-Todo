import { ADD_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
  todo: [
    { task: "Clean Room", completed: false },
    { task: "Buy Groceries", completed: false }
  ]
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        task: action.payload,
        completed: false
      };
      return {
        ...state,
        todo: [...state.todo, newTodo]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todo: state.todo.map((task, index) =>
          action.payload === index
            ? { ...task, completed: !task.completed }
            : task
        )
      };
    default:
      return state;
  }
};
