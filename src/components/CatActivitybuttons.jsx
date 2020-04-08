import React, { useContext } from 'react';
import styled from 'styled-components';
import StateContext from '../context';

const Button = styled.button`
  background-color: salmon;
  padding: 1vh;
  margin: 1vw;
`;

const handleClick = (e, dispatch) => {
  e.preventDefault();
  dispatch({
    type: 'ACTION_CHANGE_ACTIVITY',
    activity: e.target.value,
  });
};

const CatActivityButtons = () => {
  const [value, dispatch] = useContext(StateContext);

  return (
    <>
      <Button value="sleeping" onClick={(e) => handleClick(e, dispatch)}>Sleeping</Button>
      <Button value="eating" onClick={(e) => handleClick(e, dispatch)}>Eating</Button>
      <Button value="playing" onClick={(e) => handleClick(e, dispatch)}>Playing</Button>
    </>
  );
};

export default CatActivityButtons;
