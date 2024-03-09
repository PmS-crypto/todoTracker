import PropTypes from 'prop-types'
import Task from './Task.jsx';

const Tasks = ({tasks, onDelete, onToggle}) => {
    
  return (
    <>
    {tasks.map((task) => <Task task={task} key={task.id} onDelete={onDelete} onToggle={onToggle}/>)}
    </>
  )
}

Tasks.propTypes = {
    tasks: PropTypes.array,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func,
}

export default Tasks
