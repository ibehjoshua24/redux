// ListTask.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Task from './Task';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filterTasks = () => {
    switch (filter) {
      case 'done':
        return tasks.filter((task) => task.isDone);
      case 'notDone':
        return tasks.filter((task) => !task.isDone);
      default:
        return tasks;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => dispatch({ type: 'SET_FILTER', filter: 'all' })}>
          All
        </button>
        <button onClick={() => dispatch({ type: 'SET_FILTER', filter: 'done' })}>
          Done
        </button>
        <button onClick={() => dispatch({ type: 'SET_FILTER', filter: 'notDone' })}>
          Not Done
        </button>
      </div>
      <div>
        {filterTasks.map(({task}) => (
          <Task key={task.id} {...task} />
        ))}
      </div>
      {/* <div>
      {tasks.map((task) => (
      <Task/>) )} */}
      </div>
   // </div>
  );
};

export default ListTask;
