import PropTypes from 'prop-types';
import GroceryContext from './GroceryContext';
import {useReducer} from 'react';

function reducer(state, action) {
  switch(action.type){
    case 'GROCERIES_LOADED':
      return {...state, loading: false, groceries: action.groceries, error: null};
    case 'GROCERY_ADDED':{
      const groceries = [...state.groceries, action.groceryToAdd];
      return {...state, groceries};
    }
    case 'GROCERY_REMOVED': {
      const groceries = state.groceries.filter(grocery => grocery.id !== action.groceryId);
      return {...state, groceries};
    }
    case 'GROCERY_EDITED': {
      const groceries = state.groceries.map(grocery => grocery.id === action.updatedGrocery.id ? action.updatedGrocery : grocery);
      return {...state, groceries};
    }
    case 'GROCERY_TOGGLE_READY': {
      const groceries = state.groceries.map(grocery => grocery.id === action.groceryId ? {...grocery, ready: !grocery.ready} : grocery);
      return {...state, groceries};
    }
    case 'SET_LOADING_STATUS':
      return {...state, loading: true, error: null};
    case 'CURRENT_GROCERY':
        return {...state, currentGrocery: action.currentGrocery};
    case 'SET_ERROR':
      return {...state, error: action.error, loading: false}
    default:
      throw new Error(`case failure. type: ${action.type}`);
  }
}

const initialState = {
  groceries: [],
  currentGrocery: '',
  loading: false,
  error: null
}

const URI = 'http://localhost:3001/groceries'

const GroceryContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <GroceryContext.Provider value={{state, dispatch, URI}}>{children}</GroceryContext.Provider>
}

GroceryContextProvider.propTypes = {
  children: PropTypes.node
}

export default GroceryContextProvider;