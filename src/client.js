import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'containers/Home/Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducerApp from './reducers/index';

const store = createStore(reducerApp);

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