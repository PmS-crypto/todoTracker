import PropTypes from 'prop-types'
import Button from './Button.jsx';

const Header = ({title}) => {
  return (
    <header className="header">
      {title}
      <Button color='green' text='Add'/>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
