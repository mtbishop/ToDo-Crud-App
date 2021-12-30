import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;
