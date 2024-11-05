import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import {useContext, useState, useRef, useEffect} from 'react';
import GroceryContext from '../../context/GroceryContext';

const GroceryItem = ({grocery}) => {
  const {dispatch, URI} = useContext(GroceryContext);
  const [groceryName, setGroceryName] = useState(grocery.name);
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if(editMode && inputRef.current)
      inputRef.current.focus();
  }, [editMode]);

  async function handleRemove() {
    try {
      await axios.delete(`${URI}/${grocery.id}`);
      dispatch({type: 'GROCERY_REMOVED', groceryId: grocery.id});
    } catch(err){
      dispatch({type: 'SET_ERROR', error: err});
      console.log(`Error: ${err.name} ${err.message}`);
    } 
  }

  async function handleEdit() {
    if(!groceryName)
      return;

    try{
      await axios.patch(`${URI}/${grocery.id}`, {name: groceryName});
      const updatedGrocery = {...grocery, name: groceryName}
      dispatch({type: 'GROCERY_EDITED', updatedGrocery})
    }catch(err){
      dispatch({type: 'SET_ERROR', error: err});
      console.log(`Error: ${err.name} ${err.message}`);
    }finally{
      setEditMode(!editMode);
    }
  }

  return (
    <li className="bg-white mb-4 mx-2 py-4 px-4 shadow-md text-lg rounded-lg flex justify-between">
      {!editMode ? <span className="text-gray-400">{grocery.name}</span> :
      <span><input ref={inputRef} className="bg-gray-100 text-green-600" value={groceryName} onChange={(e) => setGroceryName(e.target.value)} type="text" name={grocery.id} id={grocery.id} /></span>}
      <span>
        <span onClick={() => editMode ? handleEdit() : setEditMode(true)} className='mr-2'><FontAwesomeIcon className={editMode ? 'text-skin-action' : 'text-skin-accent'} icon={faPenToSquare} /></span>
        <span onClick={handleRemove}><FontAwesomeIcon className="hover:text-red-900 text-red-600 hover:cursor-pointer active:text-green-600" icon={faTrashCan} /></span>
      </span>
    </li>
  )
}

GroceryItem.propTypes = {
  grocery: PropTypes.object.isRequired
}

export default GroceryItem