// AddTask.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    if (description) {
      const id = Date.now();
      
      dispatch({ type: 'ADD_TASK', id, description });
      setDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
};

export default AddTask;
