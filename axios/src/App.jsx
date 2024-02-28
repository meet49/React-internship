import { useEffect, useState } from "react"
import Form from "./Form"
import List from "./List"
import Table from "./Table"


function App() {

  const Api = 'https://jsonplaceholder.typicode.com/'
  const [reqType,setReqType] = useState("")
  const [iteam,setIteam] = useState([])

  useEffect(()=>{

    const fetchIteam = async ()=>{
      try {
        const response = await fetch(`${Api}${reqType}`)
        const data = await response.json();
        console.log(data)
        setIteam(data);
      } 
      catch (err) {
        console.log(err)
      }
    } 

    fetchIteam()

  },[reqType])

  return (
    <>
    <Form reqType={reqType} setReqType={setReqType}/>
    {/* <List iteam={iteam}/> */}
    <Table iteam={iteam}/>
    </>
  )
}

export default App
