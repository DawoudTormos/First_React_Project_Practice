import React from 'react'
import Cell from './Cell'

const Row = ({rowCellsData }) => {
  return (
    <>
     <div className="flex flex-col w-full mb-10 sm:flex-row">{/* tailwind grid row*/}

     {rowCellsData.map((cell, cellIndex) => (
            <Cell key={cellIndex} {...cell} />
          ))}



</div>







      
    </>
  )
}

export default Row
