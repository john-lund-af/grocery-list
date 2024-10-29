import PropTypes from 'prop-types';
import GroceryItem from '../groceryItem/GroceryItem';

const GroceryList = ({groceryItems}) => {
  return (
    <ul>
      {groceryItems.map(grocery => <GroceryItem key={grocery.id} grocery={grocery} />)}
    </ul>
  )
}

GroceryList.propTypes = {
  groceryItems: PropTypes.arrayOf(PropTypes.object)
}

export default GroceryList