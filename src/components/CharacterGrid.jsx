import React from 'react';


const CharacterGrid = ({ data, selectedId, onSelect }) => {
  return (
    <div className="grid-container">
      {data.map((char) => (
        <div key={char.id} className="card">
          <img
            src={char.image}
            alt={char.name}
            className="character-img"
            onClick={() => onSelect(char.id)}
          />
          <div className="character-name">{char.name}</div>

          {selectedId === char.id && (
            <div className="character-details">
              <p><strong>Durum:</strong> {char.status}</p>
              <p><strong>Tür:</strong> {char.species}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CharacterGrid;
