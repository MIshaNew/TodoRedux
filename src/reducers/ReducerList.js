const initialState = {
  todos: []
}

const todoList = (state=initialState, action) => {
  switch (action.type) {
    
    case 'LOAD_TODO':
      const initialState = {
        todos: [ ... action.initialState ]
      }
    return initialState;
   
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
    
    case 'COMPLETED_TODO':
      const tmp = JSON.parse(localStorage.todoList); 
      const todo = tmp.filter((item) => {
        return item.status === action.filtr;
      })
      const newState = {
          todos: [
            ...todo
          ]
      }
    return newState;

    case 'TOGGLE_STATUS':
      const toggleArr = Object.assign({}, state);
      toggleArr.todos[action.id].status = !toggleArr.todos[action.id].status;
      localStorage.setItem('todoList', JSON.stringify(toggleArr.todos));
      return toggleArr;

    default:
      return state
  }
}

export default todoList;