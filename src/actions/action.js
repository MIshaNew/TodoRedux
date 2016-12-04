export const addTodo = (item) => {
  return {
    type: 'ADD_TODO',
    item
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

export const toggleStatus = (id) => {
  return {
    type: 'TOGGLE_STATUS',
    id
  }
}

export const active = () => {
  return {
    type: 'COMPLETED_TODO',
    filtr: false
  }
}

export const completed = () => {
  return {
    type: 'COMPLETED_TODO',
    filtr: true
  }
}

export const showAll = () => {
  return {
    type: 'SHOW_ALL',
    filtr: 'all'
  }
}