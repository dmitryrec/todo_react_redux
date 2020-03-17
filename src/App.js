import React from 'react';
import AddTodo from '../src/containers/AddTodo';
import VisibleTodoList from '../src/containers/VisibleTodoList';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <VisibleTodoList/>
    </div>
  );
}

export default App;
