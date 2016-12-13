
export const load = () => {
  return {
    type: 'LOAD_TODO',
    payload: 
      new Promise((resolve, reject) => {
        firebase.database().ref().once('value').then((snapshot) => {
          if(snapshot){  
            snapshot.forEach((data) => {
              const todos = data.val();
              resolve(todos);
            });
          } else {
            reject((Error("Network Error")));
          }
        });
      })
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

