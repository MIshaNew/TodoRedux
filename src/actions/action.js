const initialState = () => {
  if (localStorage.todoList) {
    const initialState = JSON.parse(localStorage.todoList);
    return initialState;
  }
  const initialState = [];
  return initialState;
}

export const loadTodo = () => {
  return{
    type: 'LOAD_TODO',
    todos: initialState()
  }
}

export const addTodo = (item) => {
  return {
    type: 'ADD_TODO',
    item
  }
}

export const deleteTodo = (item) => {
  return {
    type: 'DELETE_TODO',
    item
  }
}

export const toggleStatus = (id) => {
  return {
    type: 'TOGGLE_STATUS',
    id
  }
}

export const check = (filter) => {
  return {
    type: 'CHECK',
    filter
  }
}
