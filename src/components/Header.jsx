import PropTypes from 'prop-types'
import Button from './Button.jsx';

const Header = ({title}) => {
  const onClick = () => {

  }
  
  return (
    <header className="header">
      {title}
      <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
