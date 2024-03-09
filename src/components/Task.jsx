import PropTypes from 'prop-types'
import {FaTimes}  from 'react-icons/fa';

const Task = ({key,task,day, onDelete}) => {
  return (
    <div className="task">
      <h3 id={key}>{task} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={onDelete}/></h3>
      <p>{day}</p>
    </div>
  )
}

Task.propTypes = {
    name: PropTypes.string,
}

export default Task
