import React from 'react'
import ListIteam from './ListIteam'

const List = ({iteam}) => {
  return (
    <ul>
        {iteam.map(iteam=>(
            <ListIteam key={iteam.id} iteam={iteam} />
        ))}
    </ul>
  )
}

export default List
