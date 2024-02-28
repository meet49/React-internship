import React from 'react'
import Row from './Row'

const Table = ({iteam}) => {
  return (
    <table>
      <tbody>
      {iteam.map(iteam=>(
            <Row key={iteam.id} iteam={iteam} />
        ))}
      </tbody>
    </table>
  )
}

export default Table
