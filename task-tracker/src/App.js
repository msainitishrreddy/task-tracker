import React, { useState } from 'react';
import './App.css';
import TaskStats from './components/TaskStats';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);


  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title: title, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Task Tracker</h1>
        <TaskStats
          total = {tasks.length}
          active = {tasks.filter(t=>!t.completed).length}
          completed={tasks.filter(t=>t.completed).length}
        />
        <TaskForm onAddTask={addTask}/>
        <TaskList 
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
