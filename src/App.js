import './App.css';
import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CharacterList from './Components/CharacterList';
import CharacterDetails from './Components/CharacterDetails';


function App() {
    const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://swapi.info/api/people"
      );
      const data = await response.json();
      //console.log(data);
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<CharacterList data={data} />}>
      </Route>

      <Route exact path="/character/:id" element={<CharacterDetails />}>
      </Route>  
    </Routes>
      
    </BrowserRouter>

  );
}

export default App;
