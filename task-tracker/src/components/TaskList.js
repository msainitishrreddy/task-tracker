import './TaskList.css';
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({tasks, onToggle, onDelete}){
    
    return(
        <div className='task-list-container'>
            {tasks.length === 0 ? (
                <p className='empty-message'>No tasks yet.</p>
            ): (
                <div className='task-list'>
                    {tasks.map((task)=>(
                        <TaskItem
                            key={task.id}
                            task={task}
                            onToggle={onToggle}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default TaskList;