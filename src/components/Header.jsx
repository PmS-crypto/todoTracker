import PropTypes from 'prop-types'
import Button from './Button.jsx';

const Header = ({title, onAdd, showAddTask}) => {
  
  return (
    <header className="header">
      {title}
      <Button color={showAddTask ? 'red' : 'green'} text={showAddTask? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  onAdd: PropTypes.func,
  showAddTask: PropTypes.bool,
}

export default Header
