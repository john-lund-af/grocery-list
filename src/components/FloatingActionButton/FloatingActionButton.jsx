import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

const FloatingActionButton = ({handleClick}) => {
  return (
    <button onClick={handleClick} className="fixed bottom-24 right-4 shadow-lg w-16 h-16 rounded-full bg-skin-fill text-skin-inverted">
      <FontAwesomeIcon className="text-white" icon={faPlus} size="lg" />
    </button>
  )
}

FloatingActionButton.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default FloatingActionButton