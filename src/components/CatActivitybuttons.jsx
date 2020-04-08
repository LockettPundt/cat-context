import React, { useContext } from 'react';
import styled from 'styled-components';
import StateContext from '../context';

const Button = styled.button`
  background-color: salmon;
  padding: 1vh;
  margin: 1vw;
`;


const CatActivityButtons = () => {
  const [value, dispatch] = useContext(StateContext);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ACTION_CHANGE_ACTIVITY',
      activity: e.target.value,
    });
  };

  return (
    <>
      <Button value="sleeping" onClick={(e) => handleClick(e)}>Sleeping</Button>
      <Button value="eating" onClick={(e) => handleClick(e)}>Eating</Button>
      <Button value="playing" onClick={(e) => handleClick(e)}>Playing</Button>
    </>
  );
};

export default CatActivityButtons;
