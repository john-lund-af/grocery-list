import PropTypes from 'prop-types';
import GroceryContext from './GroceryContext';
import {useReducer} from 'react';

function reducer(state, action) {
  switch(action.type){
    case 'GROCERIES_LOADED':
      return {...state, loading: false, groceries: action.groceries, error: null};
    case 'SET_LOADING_STATUS':
      return {...state, loading: true, error: null};
    case 'UPDATE_GROCERY':
    { 
      const groceriesUpdated = state.groceries.map(grocery => grocery.id === action.grocery.id ? action.grocery : grocery)
      return {...state, groceries: groceriesUpdated, error: null}; 
    };
    case 'SET_ERROR':
      return {...state, error: action.error, loading: false}
    default:
      throw new Error(`case failure. type: ${action.type}`);
  }
}

const initialState = {
  groceries: [],
  loading: false,
  error: null
}

const GroceryContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <GroceryContext.Provider value={{state, dispatch}}>{children}</GroceryContext.Provider>
}

GroceryContextProvider.propTypes = {
  children: PropTypes.node
}

export default GroceryContextProvider;