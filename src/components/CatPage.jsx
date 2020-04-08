import React, { useContext } from 'react';
import StateContext from '../context';

const CatPage = () => {
  const [value, dispatch] = useContext(StateContext);
  const { activity, name } = value;
  return (
    <>
      <h3>
        {name}
        {' '}
        is
        {' '}
        {activity}
      </h3>
    </>
  );
};

export default CatPage;
