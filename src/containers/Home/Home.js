import React, { Component } from 'react';
import Todo from '../../components/TodoRedux/Todo';

export default class Home extends Component{
  render(){
    return(
      <div>
        <Todo />
      </div>
    );
  }
}
