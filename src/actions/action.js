export const loadTodo = (todos) => {
  return{
    type: 'LOAD_TODO',
    todos
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
