import PropTypes from 'prop-types';
import GroceryItem from '../groceryItem/GroceryItem';

const GroceryList = ({groceries}) => {
  return (
    <ul className='relative top-44 z-0'>
      {groceries.map(grocery => <GroceryItem key={grocery.id} grocery={grocery} />)}
    </ul>
  )
}

GroceryList.propTypes = {
  groceries: PropTypes.arrayOf(PropTypes.object)
}

export default GroceryList