import { useState } from 'react'
import Header from './Header'
import AppBody from './Components/AppBody'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Header></Header>
    <AppBody></AppBody>


  </>
  );
  
}

export default App
