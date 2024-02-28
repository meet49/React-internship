import { useState } from "react"
import Input from "./componets/Input"
import Boxx from "./componets/Boxx"

function App() {
  const [colorValue,setColorValue] = useState("")
  return (
    <>
      <Boxx
        colorValue={colorValue}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
      />
    </>
  )
}

export default App
