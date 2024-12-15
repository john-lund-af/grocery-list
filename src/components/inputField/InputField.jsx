import {useContext} from 'react';
import GroceryContext from '../../context/GroceryContext';

const InputField = () => {
  const {state, dispatch} = useContext(GroceryContext);

  return (
    <input value={state.currentGrocery} 
      onChange={(e) => dispatch({type: 'CURRENT_GROCERY', currentGrocery: e.target.value})} 
      className='w-full font-mono text-lg p-2 dark:bg-gray-500 dark:text-skin-dark-base rounded-lg' type="text" name="grocery-name" id="groceryName" 
    />
  )
}

export default InputField