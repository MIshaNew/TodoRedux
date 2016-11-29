import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'containers/Home/Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

function todoList(state=[], action) {
  if (action.type === 'ADD_TODO') {
    return [
      ...state,
      action.item
    ];
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