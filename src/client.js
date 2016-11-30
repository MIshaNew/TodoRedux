import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'containers/Home/Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

function todoList(state=[], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          item: action.item,
          status: false
        },
      ];
    
    case 'DELETE_TODO':
      const delArr = state.filter((name) => {
        return name != action.name;
      });
      return delArr;
    
    case 'ACTIVE_TODO':
      const arrActiv = state;
      const activ = arrActiv.filter((name) => {
        return name.status === false;
      });
      return activ;
    
    case 'COMPLETED_TODO':
      const arrCompleted = state;
      const compled = arrCompleted.filter((name) => {
        return name.status === true;
      });
      return compled;
    
    case 'TOGGLE_STATUS':
      const changeStatus = state[action.id].status;
      if (changeStatus === false) {
        state[action.id].status = true;
      } else if (changeStatus === true) {
        state[action.id].status = false;
      }
      console.log(state);
      return state;
    default:
      return state;
  }
  return state;
}
const store = createStore(todoList);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.querySelector('.container')
);

if (module.hot) {
  module.hot.accept();
}