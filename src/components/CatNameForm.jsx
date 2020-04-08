import React, { useContext } from 'react';
import StateContext from '../context';


const CatnameForm = () => {
  const [value, dispatch] = useContext(StateContext);

  const handleChange = (e) => {
    dispatch({
      type: 'ACTION_CHANGE_NAME',
      name: e.target.value,
    });
  };

  return (
    <form>
      <input type="text" name="newName" placeholder="Enter a new name" onChange={(e) => handleChange(e)} />

    </form>
  );
};

export default CatnameForm;
