import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const [errorHandal,setErrorHandal]=useState("")
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/pots")
  //     .then((res) => setData(res.data))
  //     .catch((err)=> setErrorHandal(err.message))
  // }, []);


  const api = async() => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setData(res.data)
    } 
    catch (error) {
      setErrorHandal(error.message)
    }
  }
  

  
  useEffect(()=>{
    api()
  })
  return (
    <>
      <h1>Axios Data</h1>
      {errorHandal !== "" && <h3>{errorHandal}</h3>}
      {data.slice(0,12).map((post) => {
       const { id, title, body }= post
        return (
          <div key={id}>
            <h1>{title.slice(0,10)}</h1>
            <p>{body.slice(0,100)}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
