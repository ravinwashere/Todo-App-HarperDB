import React, { useState } from 'react';
import classNames from 'classnames';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';

export default function TaskItem({ task, searchComponent, getSelectedId, doneTask, deleteTask }) {
  const [editing, setEditing] = useState(false);
  const [selectedTask, setSelectedTask] = useState();
  let containerClasses = classNames('task-item', {
    'task-item--completed': task.completed,
    'task-item--editing': editing,
  });

  const updateTask = () => {
      doneTask({...task, taskStatus: task.taskStatus === 'ACTIVE' ? 'COMPLETED' : 'ACTIVE'});
  }

  const renderTitle = task => {
    return (
      <div className="task-item__title" tabIndex="0">
        {task.taskTitle}
      </div>
    );
  }
  const resetField = () => {
      setEditing(false);
  }
  const renderTitleInput = task => {
    return (
    //   <TextField
    //   id="filled-required"
    //   variant="standard"
    //   fullWidth 
    //   hiddenLabel
    //   value={selectedTask?.taskTitle}
    //   placeholder={task.taskTitle}
    //   onChange={event => setSelectedTask(prev => ({...prev, taskTitle: event.target.value}))}
    //   />
    React.cloneElement(searchComponent, {resetField})
    );
  }
  
  return (
    <div className={containerClasses} tabIndex="0">
      <div className="cell">
        <IconButton color={task.taskStatus === 'COMPLETED' ? 'success': 'secondary'} aria-label="delete" onClick={updateTask} className={classNames('btn--icon', 'task-item__button', {
            active: task.completed,
            hide: editing,
          })} >
          <DoneIcon />
        </IconButton>
       </div>

      <div className="cell">
        {editing ? renderTitleInput(task) : renderTitle(task)}
      </div>

      <div className="cell">
      {!editing && <IconButton onClick={() => {setEditing(true); getSelectedId(task)}} aria-label="delete" className={classNames('btn--icon', 'task-item__button', {
            hide: editing,
          })} >
          <EditIcon />
        </IconButton> }
        {editing && <IconButton onClick={() => {setEditing(false); getSelectedId('');}} aria-label="delete" className={classNames('btn--icon', 'task-item__button', {
            hide: editing,
          })} >
          <ClearIcon />
        </IconButton> }
        {!editing && <IconButton onClick={() => deleteTask(task)} aria-label="delete" className={classNames('btn--icon', 'task-item__button', {
            hide: editing,
          })} >
          <DeleteIcon />
        </IconButton> }
       </div>
    </div>
  );
}
