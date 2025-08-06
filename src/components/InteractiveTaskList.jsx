import React, { useState } from 'react';
import './css/InteractiveTaskList.css';

const InteractiveTaskList = () => {
  const [tasks, setTasks] = useState(['Faire les courses', 'Nettoyer la maison', 'Terminer le projet']);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div className="interactive-task-list">
      <h3>Liste de tâches dynamique</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Nouvelle tâche"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Ajouter</button>
    </div>
  );
};

export default InteractiveTaskList;