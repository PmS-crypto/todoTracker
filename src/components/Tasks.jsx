import PropTypes from 'prop-types'
import Task from './Task.jsx';

const Tasks = ({tasks, onDelete}) => {
    
  return (
    <>
    {tasks.map((task) => <Task key={task.id} task={task.name} day={task.day} onDelete={onDelete}/>)}
    </>
  )
}

Tasks.propTypes = {
    tasks: PropTypes.array
}

export default Tasks
