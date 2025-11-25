import './TaskForm.css'
import React from 'react'

function TaskForm({ onAddTask }) {
    const [title, setTitle] = React.useState('');

    const handleAddTask = () => {
        if (title.trim()) {
            onAddTask(title);
            setTitle('');
        }
    }

    return(
        <div className='task-form'>
            <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Add a new task'
                onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
                className='task-form-input'
            />
            <button className= 'task-form-button' onClick={handleAddTask}>Add Task</button>
        </div>
    );
}

export default TaskForm;