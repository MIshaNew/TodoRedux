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
        action.item,
      ];
    case 'DELETE_TODO':
      const arr = state.filter((name) => {
        return name != action.name;
      });
      return arr;
    default:
      return state;
  }
  return state;
}

const store = createStore(todoList);

store.subscribe(() => {
  console.log('subscribe', store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.querySelector('.container')
);

if (module.hot) {
  module.hot.accept();
}