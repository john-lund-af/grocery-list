import PropTypes from 'prop-types';
import GroceryItem from '../groceryItem/GroceryItem';
import Error from '../error/Error';
import {useContext, useEffect} from 'react';
import GroceryContext from '../../context/GroceryContext';
import axios from 'axios';
import FloatingActionButton from '../floatingActionButton/FloatingActionButton';

const GroceryList = () => {
  const {state, dispatch} = useContext(GroceryContext);
  const apiUri = 'http://localhost:3001/groceries';

  useEffect(() => {
    async function getAsyncData() {
      try{
        dispatch({type: 'SET_LOADING_STATUS'})
        const result = await axios.get(apiUri);
        dispatch({type: 'GROCERIES_LOADED', groceries: result.data});
      } catch(err){
        dispatch({type: 'SET_ERROR', error: err});
        console.error(`Error fetching groceries ${err.name} ${err.message}`);
      }
    }
    getAsyncData();
  }, [dispatch])

  async function addGrocery() {
    if(!state.currentGrocery)
      return;

    try{
      const groceryToAdd = {
        id: crypto.randomUUID(),
        name: state.currentGrocery,
        ready: false,
      }
      await axios.post(apiUri, groceryToAdd);
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
    return <h2 className='relative top-44 text-lg'>Loading....</h2>

  return (
      <>
    <ul className='relative top-44 pb-20 z-0'>
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