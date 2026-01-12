import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';;

export default function CharacterDetails() {

  let { id } = useParams();

  const [character, setCharacter] = useState(null);
  
  useEffect(() => {
      //console.log("Fetching data for character ID:", id);
      const fetchCharacterData = async () => {
        const response = await fetch(`https://swapi.py4e.com/api/people/${id}/?format=json`);
        const characterData = await response.json();
        setCharacter(characterData);
      };
      fetchCharacterData();
    }, [id]);

if (!character) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (


    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-6">
          <h1 className="text-3xl font-bold text-slate-900">{character.name}</h1>
          <p className="text-slate-800 mt-1 text-sm">Star Wars Character Profile</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Basic Info Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-700 rounded-lg p-4">
              <p className="text-slate-400 text-sm">Birth Year</p>
              <p className="text-white text-lg font-semibold mt-1">{character.birth_year}</p>
            </div>
            <div className="bg-slate-700 rounded-lg p-4">
              <p className="text-slate-400 text-sm">Gender</p>
              <p className="text-white text-lg font-semibold mt-1 capitalize">{character.gender}</p>
            </div>
            <div className="bg-slate-700 rounded-lg p-4">
              <p className="text-slate-400 text-sm">Height</p>
              <p className="text-white text-lg font-semibold mt-1">{character.height} cm</p>
            </div>
            <div className="bg-slate-700 rounded-lg p-4">
              <p className="text-slate-400 text-sm">Mass</p>
              <p className="text-white text-lg font-semibold mt-1">{character.mass} kg</p>
            </div>
          </div>

          {/* Physical Characteristics */}
          <div className="bg-slate-700 rounded-lg p-4">
            <h2 className="text-yellow-500 font-semibold mb-3 text-lg">Physical Characteristics</h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-slate-400 text-sm">Hair Color</p>
                <div className="flex items-center mt-2">
                  <div className="w-4 h-4 rounded-full bg-amber-800 mr-2"></div>
                  <p className="text-white capitalize">{character.hair_color}</p>
                </div>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Eye Color</p>
                <div className="flex items-center mt-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                  <p className="text-white capitalize">{character.eye_color}</p>
                </div>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Skin Tone</p>
                <div className="flex items-center mt-2">
                  <div className="w-4 h-4 rounded-full bg-amber-200 mr-2"></div>
                  <p className="text-white capitalize">{character.skin_color}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Appearances */}
          <div className="bg-slate-700 rounded-lg p-4">
            <h2 className="text-yellow-500 font-semibold mb-3 text-lg">Film Appearances</h2>
            <div className="flex items-center">
              <span className="text-4xl font-bold text-yellow-500">{character.films.length}</span>
              <span className="text-slate-300 ml-3">Films</span>
            </div>
          </div>

          {/* Assets */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-700 rounded-lg p-4 text-center">
              <p className="text-slate-400 text-sm mb-2">Vehicles</p>
              <p className="text-2xl font-bold text-white">{character.vehicles.length}</p>
            </div>
            <div className="bg-slate-700 rounded-lg p-4 text-center">
              <p className="text-slate-400 text-sm mb-2">Starships</p>
              <p className="text-2xl font-bold text-white">{character.starships.length}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-900 px-6 py-4 text-center">
          <p className="text-slate-500 text-sm">Data from Star Wars API</p>
        </div>
      </div>
    </div>
  );
}