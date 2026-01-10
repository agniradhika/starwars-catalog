import './App.css';
import { useEffect, useState } from "react";


function App() {
    const [data, setData] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://swapi.info/api/people"
      );
      const data = await response.json();
     // console.log(data);
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Characters</h1>
      {data ? (
        <ul>
          {data.map((character) => (
            <li key={character.name}>{character.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
