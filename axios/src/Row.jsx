import React from 'react'
import Cell from './Cell'

const Row = ({iteam}) => {
  return (
    <tr>
      {Object.entries(iteam).map(([key,value])=>{
        return(
            <Cell key={key} cellData = {JSON.stringify(value)} />
        )
      })}
    </tr>
  )
}

export default Row
