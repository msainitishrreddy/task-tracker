import './TaskList.css';
import TaskItem from './TaskItem';

function TaskList({tasks, filter, onFilterChange, onToggle, onDelete}){

    const filteredTasks = tasks.filter(task =>{
        if(filter === 'all'){
             return true;
        } else if(filter === 'active') {
            return !task.completed;
        } else if(filter === 'completed'){
            return task.completed;  
        }

        return true;
    });

    return(
        <div className='task-list-container'>
            <div className='task-list-filter'>
                <button
                    className={`filter-button ${filter === 'all' ? 'active-filter' : ''}`}
                    onClick={() => onFilterChange('all')}
                >
                    All
                </button>
                <button
                    className={`filter-button ${filter === 'active' ? 'active-filter' : ''}`}
                    onClick={() => onFilterChange('active')}
                >
                    Active
                </button>
                <button
                    className={`filter-button ${filter === 'completed' ? 'active-filter' : ''}`}
                    onClick={() => onFilterChange('completed')}
                >
                    Completed
                </button>
            </div>
            {tasks.length === 0 ? (
                <p className='empty-message'>No tasks yet.</p>
            ): (
                <div className='task-list'>
                    {filteredTasks.map((task)=>(
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