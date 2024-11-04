import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const GroceryItem = ({grocery, handleRemove}) => {
  return (
    <li className="bg-white mb-4 mx-2 py-4 px-4 shadow-md text-lg rounded-lg flex justify-between">
      <span className="text-gray-400">{grocery.name}</span>
      <span>
        <span className='mr-2'><FontAwesomeIcon className="text-skin-accent" icon={faPenToSquare} /></span>
        <span onClick={() => handleRemove(grocery.id)}><FontAwesomeIcon className="hover:text-red-900 text-red-600 hover:cursor-pointer active:text-green-600" icon={faTrashCan} /></span>
      </span>
    </li>
  )
}

GroceryItem.propTypes = {
  grocery: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default GroceryItem