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

const todoFilter = (state=initialState(), action) => {
  switch (action.type) {
    case 'COMPLETED_TODO':
      const arr = JSON.parse(localStorage.todoList); 
      const todo = arr.filter((item) => {
        return item.status === action.filtr;
      })
      const newState = Object.assign({}, state,  {
          todos: [
            ...todo
          ]
      })
      console.log(newState);
      
    return newState;
    
    default:
      return state;
  }
}

export default todoFilter;