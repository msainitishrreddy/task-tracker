import './TaskStats.css';

function TaskStats({ total, active, completed }) {
    return(
        <div className='stats-container'>
            <div className='stat-box'>
                <div className='stat-count'>{total}</div>
                <div className='stat-label'>Total</div>
            </div>
            <div className='stat-box'>
                <div className='stat-count'>{active}</div>
                <div className='stat-label'>Active</div>
            </div>
            <div className='stat-box'>
                <div className='stat-count'>{completed}</div>
                <div className='stat-label'>Completed</div>
            </div>
        </div>
    );
}

export default TaskStats;