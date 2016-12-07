import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTodo } from '../../actions/action';
import AddTodo from './addTodo';
import Footer from './FooterFilter';
import TodoList from './TodoList';

class Todo extends Component{
  componentWillMount() {
    const { dispatch } = this.props;
    
    firebase.database().ref().once("value", (snapshot) => {
      snapshot.forEach((data) => {
        const todos = data.val();
        dispatch(loadTodo(todos));
      });
    });
    
  }

  // componentDidMount() {
  //   const database = firebase.database();
  //   firebase.database().ref().once("value", (snapshot) => {
  //     const todos = [];
  //       snapshot.forEach((data) => {
  //         console.log(data.val());
  //       });
  //   });


  render() {
    const { storeList, filter } = this.props;
    return(
      <div>
        <p>TO DO List</p>
        <AddTodo />
        <ol>
          {
            storeList.filter((id) => {
              if (filter === 'COMPLETED') {
                return id.status === true;
              } else if (filter === 'ACTIVE') {
                return id.status === false
              }
              return storeList;
            }).map((c, i) => 
              <TodoList
                desc={c.item}
                id={i}
                key={i}
                status={c.status}
              />
            )
          }
        </ol>
        <Footer />
      </div>
    );
  }
}

export default connect( state => ({ 
  storeList: state.todoList.todos,
  filter: state.todoFilter
}))(Todo);