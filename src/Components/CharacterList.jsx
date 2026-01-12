import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterList({ data }) {
  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-yellow-500 mb-2">Star Wars Characters</h1>
        <p className="text-slate-400">Explore the galaxy far, far away</p>
      </div>
      
      {data ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((character) => (
            <li key={character.name}>
              <Link 
                to={`/character/${character.url.split("/")[5]}`} 
                className="block bg-slate-800 rounded-xl border border-slate-700 p-6 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-300 group"
              >
                <div className="text-center">
                  <span className="block text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                    {character.name}
                  </span>
                  <div className="flex items-center justify-center gap-2 text-slate-400">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm">
                      Eye color: <span className="capitalize">{character.eye_color}</span>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-slate-700 border-t-yellow-500 mb-4"></div>
            <p className="text-white text-xl">Loading characters...</p>
          </div>
        </div>
      )}
    </div>
  </div>
  );
}