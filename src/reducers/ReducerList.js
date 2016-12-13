const initialState = {  
  todos: []
};

const todoList = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_TODO':
      let loadTodos = Object.assign({}, state,  {
        todos: [ ...action.payload ]
      });
      // console.log('loadT', loadTodos);
      return loadTodos;
    
    case 'ADD_TODO':
      let addTodo = Object.assign({}, state,  {
          todos: [
            ...state.todos,
            {
              id: state.todos.length === 0 ? 0 : state.todos.length,
              item: action.item,
              status: false
            }
          ]
      })
      return addTodo;

    case 'DELETE_TODO':
      let removeTodo = Object.assign({}, state, { 
        todos: state.todos.filter(c => {
          return c.item !== action.item;
        })
      });

      return removeTodo;
      
    case 'TOGGLE_STATUS':
      let toggleArr = Object.assign({}, state, { 
        todos: state.todos.map(c => todoItem(c, action)) 
      });
      return toggleArr;

    default:
      return state;
  }
}

const todoItem = (state=initialState, action) => {
  if (action.id !== state.id) return state;
  switch (action.type) {
    case 'TOGGLE_STATUS':
    return Object.assign({}, state, { status: !state.status });

  default:
    return state
  }
};

export default todoList;