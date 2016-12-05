const createState  = (filter) => {
  if (filter === 'SHOW_ALL') {
    const todos = JSON.parse(localStorage.todoList)
    return todos;
  } else if (filter === 'ACTIVE') {
    const todos = JSON.parse(localStorage.todoList)
    const tmp = todos.filter((item) => {
      return item.status === false;
    });
    return tmp;
  } else if (filter === 'COMPLETED') {
    const todos = JSON.parse(localStorage.todoList)
    const tmp = todos.filter((item) => item.status === true);
    return tmp;
  }
}

export const loadTodo = (filter) => {
  return{
    type: 'LOAD_TODO',
    initialState: createState(filter)
  }
}

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
