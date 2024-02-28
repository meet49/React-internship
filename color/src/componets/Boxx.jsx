import React from 'react'

const Boxx = ({colorValue}) => {
  return (
    <div 
        style={{backgroundColor:colorValue,width:"400px",height:"300px",textAlign:"center",padding:"70px 0"}}>
      <p style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"50px"}}>{colorValue ? colorValue : "Empty Value"}</p>
    </div>
  )
}

export default Boxx
