import { combineReducers } from 'redux';
import todoFilter from './TodoFilter';
import todoList from './ReducerList.js';

const reducerApp = combineReducers({
	todoList,
	todoFilter
})

export default reducerApp;