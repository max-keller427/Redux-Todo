export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

let nextTodoId = 0;
export const addTodo = newTodo => ({
  type: ADD_TODO,
  id: nextTodoId++,
  payload: newTodo
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});
