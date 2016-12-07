const initialState = {  
  todos: []
}

const todoList = (state=initialState, action) => {
  switch (action.type) {
    
    case 'LOAD_TODO':
      return Object.assign({}, state,  {
        todos: [ ...action.todos ]
      });
   
    case 'ADD_TODO':
      const allArr = Object.assign({}, state,  {
          todos: [
            ...state.todos,
            {
              id: state.todos.length === 0 ? 0 : state.todos.length,
              item: action.item,
              status: false
            }
          ]
      })

      firebase.database().ref().set({
        todos: allArr.todos
      });
    
    return allArr;

    case 'DELETE_TODO':
      const removeArr = Object.assign({}, state, { 
        todos: state.todos.filter((c) => {
          return c.item !== action.item;
        })
      });

      firebase.database().ref().set({
        todos: removeArr.todos
      });
      
    return removeArr;
      
    case 'TOGGLE_STATUS':
      const toggleArr = Object.assign({}, state, { 
        todos: state.todos.map(c => todoItem(c, action)) 
      });
      console.log(toggleArr.todos);
      firebase.database().ref().set({
        todos: toggleArr.todos
      });
    return toggleArr;

    default:
    return state
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