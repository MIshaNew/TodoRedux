import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'containers/Home/Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoList from './reducers/reducer';

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