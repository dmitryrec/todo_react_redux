import React from 'react';
import AddTodo from '../src/containers/AddTodo';
import VisibleTodoList from '../src/containers/VisibleTodoList';
import FilterBlock from '../src/components/FilterBlock';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <div className="app">
        <Header />
        <AddTodo/>
        <VisibleTodoList/>
        <FilterBlock />
      </div>
    </div>
  );
}

export default App;
