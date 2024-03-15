import React, { useState } from "react";
import { add ,deleteData } from "./reducer/todoReducer";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const [data, setData] = useState();
  const list = useSelector((state) => state.todoReducer.data);
  const dispatch = useDispatch();

  const submitData = (e) => {
    e.preventDefault();
    dispatch(add(data));
    setData("");
  };

  
  return (
    <div>
      <form>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button onClick={submitData}>+</button>
      </form>
      <div>
        {list.map((i) => (
          <div key={i.id}>
            <li>{i.data}</li>
            <button onClick={()=>{dispatch(deleteData(i.id))}}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
