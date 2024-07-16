import React from 'react';
import './App.css';
import AddTask from './components/addTask';
import ListTask from './components/ListTask';

const App = () => {
  return (
    <div className="app">
      <h1>Redux To-Do List</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
