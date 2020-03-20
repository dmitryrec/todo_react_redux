import React from 'react';
import AddTodo from '../src/containers/AddTodo';
import VisibleTodoList from '../src/containers/VisibleTodoList';
import FilterBlock from '../src/components/FilterBlock';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <VisibleTodoList/>
      <FilterBlock/>
    </div>
  );
}

export default App;
