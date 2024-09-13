import React from 'react'
import Title from './Title'
import Description from './Description'
import Grid from './Grid'


const AppBody = ({cellsData}) => {


  return (
    <>
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
    
<Title/>
<Description/>
<Grid cellsData = {cellsData}/>
    


</div>
      
    </>
  )



  
}




const getData = async (url) => {
  const response = await fetch(url)
  const json = await response.json()

  return json
}

export default AppBody
