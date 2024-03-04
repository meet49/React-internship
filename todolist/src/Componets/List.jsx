import React, { useState } from "react";

const List = () => {
  const data = [
    {
      id: 1,
      myName: "Meet",
      myAge: 21,
    },
    {
      id: 2,
      myName: "Milan",
      myAge: 22,
    },
  ];

  const [myArray, setMyArray] = useState(data);
  const clearArray = ()=>{
    setMyArray([])
  }
  const remove = (id) =>{
    const  myNewArray = myArray.filter((element)=>{
        return element.id !== id;
    })
    setMyArray(myNewArray)
  }
  return (
    <>
      {myArray.map((element) => {
        return (
          <>
            <h1 key={element.id}>
              Name:{element.myName} & Age:{element.myAge}
              <button onClick={() => remove(element.id)}>remove</button>
            </h1>
          </>
        );
        })
      }
        <button onClick={clearArray}>Clear</button>

    </>
  );
};

export default List;
