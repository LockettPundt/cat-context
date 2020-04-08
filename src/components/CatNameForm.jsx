import React, { useContext } from 'react';
import StateContext from '../context';


const handleChange = (e, dispatch) => {
  dispatch({
    type: 'ACTION_CHANGE_NAME',
    name: e.target.value,
  });
};
const CatnameForm = () => {
  const [value, dispatch] = useContext(StateContext);


  return (
    <form>
      <input type="text" name="newName" placeholder="Enter a new name" onChange={(e) => handleChange(e, dispatch)} />

    </form>
  );
};

export default CatnameForm;
