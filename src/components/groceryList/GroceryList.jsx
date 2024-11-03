import PropTypes from 'prop-types';
import GroceryItem from '../groceryItem/GroceryItem';
import Error from '../error/Error';
import {useContext, useEffect} from 'react';
import GroceryContext from '../../context/GroceryContext';
import axios from 'axios';
import FloatingActionButton from '../floatingActionButton/FloatingActionButton';

const GroceryList = () => {
  const {state, dispatch} = useContext(GroceryContext);

  useEffect(() => {
    async function getAsyncData() {
      try{
        dispatch({type: 'SET_LOADING_STATUS'})
        const result = await axios.get('http://localhost:3001/groceries');
        dispatch({type: 'GROCERIES_LOADED', groceries: result.data});
      } catch(err){
        dispatch({type: 'SET_ERROR', error: err})
        console.error(`Error fetching groceries ${err.name} ${err.message}`)
      }
    }
    getAsyncData();
  }, [dispatch])

  if(state.error)
    return <Error error={state.error} />

  if(state.loading)
    return <h2 className='relative top-44 text-lg'>Loading....</h2>

  return (
      <>
    <ul className='relative top-44 pb-20 z-0'>
      {state.groceries.map(grocery => <GroceryItem key={grocery.id} grocery={grocery} />)}
    </ul>
      <FloatingActionButton />
      </>

  )
}

GroceryList.propTypes = {
  groceries: PropTypes.arrayOf(PropTypes.object)
}

export default GroceryList