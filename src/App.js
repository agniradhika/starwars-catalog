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
      //console.log(data);
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div class="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6" className="App">
      <h1 class="text-lg font-semibold text-gray-800 mb-6">Star Wars Characters</h1>
      {data ? (
      <ul class="grid grid-cols-4 gap-6">
        {data.map((character) => (
        <li key={character.name} class="rounded-xl border border-gray-200 p-4 text-center hover:bg-gray-50 transition">
          <a href="#A" class="block transition">
          <span class="block text-xl font-mono font-semibold text-gray-900 mb-2">
          {character.name}
          </span>
          <span class="text-sm text-gray-500">
          Eye color: {character.eye_color}
          </span>
          </a>
        </li>))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
    </div>
  );
}

export default App;
