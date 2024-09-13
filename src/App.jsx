import { useState, useEffect } from 'react';
import Header from './Header';
import AppBody from './Components/AppBody';

function App() {
  const [cellsData, setCellsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data') 
      .then(response => response.json())
      .then(data => { 
        console.log("rendering App component");
        setCellsData(data);
      });
  }, []); 

  return (
    <>
      <Header />
      <AppBody cellsData={cellsData} />
    </>
  );
}

export default App;
