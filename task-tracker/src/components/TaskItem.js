import './TaskItem.css';
import React from 'react';

function TaskItem({ task, onToggle, onDelete }){
    return (
        <div className={`task-item ${task.completed ? 'completeed':''}`}>
            <input
                type='checkbox'
                checked={task.completed}
                onChange={() => onToggle(task.id)}
                className='task-item-checkbox'
            />
            <div className='task-item-content'>
                <h3 className='task-item-title'>{task.title}</h3>
                <p className='task-item-description'>{task.description}</p>
            </div>
            <button
                className='task-item-delete'
                onClick={() => onDelete(task.id)}
            >
                Delete
            </button>
        </div>
    );
}

export default TaskItem;