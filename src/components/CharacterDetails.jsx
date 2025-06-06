// components/CharacterDetails.jsx
import React from 'react';

const CharacterDetails = ({ character }) => {
  return (
    <div className="p-4 border rounded bg-gray-50">
      <h2 className="text-xl font-semibold mb-2">Detaylar: {character.name}</h2>
      <img src={character.image} alt={character.name} className="mb-2" />
      <p><strong>Durum:</strong> {character.status}</p>
      <p><strong>Tür:</strong> {character.species}</p>
      <p><strong>Cinsiyet:</strong> {character.gender}</p>
      <p><strong>Konum:</strong> {character.location.name}</p>
    </div>
  );
};

export default CharacterDetails;