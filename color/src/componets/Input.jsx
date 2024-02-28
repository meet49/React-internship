import React from 'react'

const Input = ({colorValue,setColorValue}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <input
            autoFocus
            type='text'
            placeholder='Enter The Color Name'
            value={colorValue}
            onChange={(e)=>setColorValue(e.target.value)}
            style={{width:"395px",height:"30px"}}
        />
      
    </form>
  )
}

export default Input
