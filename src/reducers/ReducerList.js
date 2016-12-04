const initialState = () => {
  if (localStorage.todoList) {
    const retList = JSON.parse(localStorage.todoList);
    const initial = {
      todos: [ ...retList ]
    }
    return initial;
  } else {
    const initial ={
      todos: []
    }
    return initial;
  }
}

const todoList = (state=initialState(), action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const allArr = Object.assign({}, state,  {
          todos: [
            ...state.todos,
            {
              item: action.item,
              status: false
            }
          ]
      })
      localStorage.setItem('todoList', JSON.stringify(allArr.todos));
      return allArr;

    case 'DELETE_TODO':
      const arr = Object.assign({}, state);
      arr.todos.splice(action.id, 1);
      localStorage.setItem('todoList', JSON.stringify(arr.todos));
      return arr;

    case 'TOGGLE_STATUS':
      const toggleArr = Object.assign({}, state);
      toggleArr.todos[action.id].status = !toggleArr.todos[action.id].status;
      localStorage.setItem('todoList', JSON.stringify(toggleArr.todos));
      return toggleArr;

    default:
      
      return state;
  }
}

export default todoList;