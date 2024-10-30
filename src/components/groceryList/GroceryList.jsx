import PropTypes from 'prop-types';
import GroceryItem from '../groceryItem/GroceryItem';
import {useContext, useEffect} from 'react';
import GroceryContext from '../../context/GroceryContext';
import axios from 'axios';

const GroceryList = () => {
  const {state, dispatch} = useContext(GroceryContext);

  useEffect(() => {
    async function getAsyncData() {
      try{
        dispatch({type: 'SET_LOADING_STATUS'})
        const result = await axios.get('http://localhost:3001/groceries');
        dispatch({type: 'GROCERIES_LOADED', groceries: result.data});
      } catch(err){
        console.error(`Error fetching groceries ${err.name} ${err.message}`)
      }
    }
    getAsyncData();
  }, [dispatch])

  if(state.loading)
    return <h2 className='relative top-44 text-lg'>Loading....</h2>

  return (
    <ul className='relative top-44 pb-20 z-0'>
      {state.groceries.map(grocery => <GroceryItem key={grocery.id} grocery={grocery} />)}
    </ul>
  )
}

GroceryList.propTypes = {
  groceries: PropTypes.arrayOf(PropTypes.object)
}

export default GroceryList