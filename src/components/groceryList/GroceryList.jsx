import PropTypes from 'prop-types';
import GroceryItem from '../groceryItem/GroceryItem';
import Error from '../error/Error';
import {useContext, useEffect} from 'react';
import GroceryContext from '../../context/GroceryContext';
import axios from 'axios';
import FloatingActionButton from '../floatingActionButton/FloatingActionButton';

const GroceryList = () => {
  const {state, dispatch, URI} = useContext(GroceryContext);

  useEffect(() => {
    async function getAsyncData() {
      try{
        dispatch({type: 'SET_LOADING_STATUS'})
        const result = await axios.get(URI);
        dispatch({type: 'GROCERIES_LOADED', groceries: result.data});
      } catch(err){
        dispatch({type: 'SET_ERROR', error: err});
        console.error(`Error fetching groceries ${err.name} ${err.message}`);
      }
    }
    getAsyncData();
  }, [dispatch, URI])

  async function addGrocery() {
    if(!state.currentGrocery)
      return;

    try{
      const groceryToAdd = {
        id: crypto.randomUUID(),
        name: state.currentGrocery,
        ready: false,
      }
      await axios.post(URI, groceryToAdd);
      dispatch({type: 'GROCERY_ADDED', groceryToAdd})
      dispatch({type: 'CURRENT_GROCERY', currentGrocery: ''});
    } catch(err) {
      dispatch({type: 'SET_ERROR', error: err})
      console.log(`Error: ${err.name} ${err.message}`);
    }
  }


  if(state.error)
    return <Error error={state.error} />

  if(state.loading)
    return <h2 className='relative top-28 text-lg'>Loading....</h2>

  return (
      <>
        <ul className='relative top-28 pt-6 pb-28 h-full z-0 bg-skin-secondary dark:bg-skin-dark-secondary'>
          {state.groceries.map(grocery => <GroceryItem key={grocery.id} grocery={grocery} />)}
        </ul>
          {state.currentGrocery && <FloatingActionButton handleClick={addGrocery} />}
      </>
  )
}

GroceryList.propTypes = {
  groceries: PropTypes.arrayOf(PropTypes.object)
}

export default GroceryList