function initialState() {  
  if (localStorage.todoList) {
    const retList = JSON.parse(localStorage.todoList);
    const initial = { todos: [...retList ] }
    return initial;
  } else {
    const initial = { todos: [] }
    return initial;
  }
}


function todoList(state=initialState(), action) {
  
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
      const changeStatus = toggleArr.todos[action.id].status;
      if (changeStatus === false) {
        toggleArr.todos[action.id].status = true;
      } else if (changeStatus === true) {
        toggleArr.todos[action.id].status = false;
      }
      localStorage.setItem('todoList', JSON.stringify(toggleArr.todos));
      return toggleArr;

    case 'COMPLETED_TODO':
      const filterArr = JSON.parse(localStorage.todoList);
      const todos = filterArr.filter((item) => {
        return item.status === action.filter;
      })

      const tmp = Object.assign({}, state,  {
          todos: [
            ...todos
          ]
      })
      return tmp;
    default:
      
      console.log(state);
      const allItems = JSON.parse(localStorage.todoList);
      console.log(tmp);
      const oldArr = Object.assign({}, state,  {
          todos: [
            ...allItems
          ]
      })
      return oldArr;
  }
}

export default todoList;