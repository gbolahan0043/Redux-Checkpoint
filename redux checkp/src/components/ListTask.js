import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { setFilter } from '../redux/taskSlice';

const ListTask = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const filter = useSelector(state => state.tasks.filter);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'not') return !task.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('done'))}>Done</button>
        <button onClick={() => dispatch(setFilter('not'))}>Not Done</button>
      </div>
      <div className="task-list">
        {filteredTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
