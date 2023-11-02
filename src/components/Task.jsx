// Task.js

import React from 'react';
import { useDispatch } from 'react-redux';

const Task = ({ id, description, isDone }) => {
  const dispatch = useDispatch();

  const toggleTask = () => {
    dispatch({ type: 'TOGGLE_TASK', id });
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        checked={isDone}
        onChange={toggleTask}
      />
      <span>{description}</span>
    </div>
  );
};

export default Task;
