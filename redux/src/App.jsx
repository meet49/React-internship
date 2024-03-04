import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decNumber, incNumber } from "./action/index";

const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();

  return (
    <div>
      <a onClick={() => dispatch(incNumber(5))}><span>+</span></a>
      <input type="text" value={myState} />
      <a onClick={() => dispatch(decNumber(5))}><span>-</span></a>
    </div>
  );
};

export default App;
