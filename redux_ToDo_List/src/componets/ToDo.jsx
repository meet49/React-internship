import  { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_Todo, delete_Todo, remove_Todo } from "../action";

const ToDo = () => {
  const [iteam, setIteam] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const disptach = useDispatch();
  return (
    <div>
      <h1>ToDo List</h1>
      <div>
        <input
          type="text"
          placeholder="enter the items"
          value={iteam}
          onChange={(e) => setIteam(e.target.value)}
        />
        <button onClick={() => disptach(add_Todo(iteam), setIteam(""))}>
          +
        </button>
      </div>
      <div>
        {list.map((elem) => {
          return (
            <div key={elem.id}>
              <h3>
                {elem.data}
                <button onClick={() => disptach(delete_Todo(elem.id))}>
                  delete
                </button>
              </h3>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={() => disptach(remove_Todo())}>remove all</button>
      </div>
    </div>
  );
};

export default ToDo;
