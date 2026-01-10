import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterList({ data }) {
  return (
  <div className="App max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6">
      <h1 className="text-lg font-semibold text-gray-800 mb-6">Star Wars Characters</h1>
      {data ? (
      <ul className="grid grid-cols-4 gap-6">
        {data.map((character) => (
        <li key={character.name} className="rounded-xl border border-gray-200 p-4 text-center hover:bg-gray-50 transition">
          <Link to={`/character/${character.url.split("/")[5]}`} className="block transition">
          <span className="block text-xl font-mono font-semibold text-gray-900 mb-2">
          {character.name}
          </span>
          <span className="text-sm text-gray-500">
          Eye color: {character.eye_color}
          </span>
          </Link>
        </li>))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
    </div>
  );
}