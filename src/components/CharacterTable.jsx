import React from 'react';


const CharacterTable = ({ data, onSelect, selectedCharacterId }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Karakter</th>
          </tr>
        </thead>
        <tbody>
          {data.map((char) => (
            <React.Fragment key={char.id}>
              <tr
                onClick={() => onSelect(char)}
                className={selectedCharacterId === char.id ? 'selected' : ''}
              >
                <td>
                  <img src={char.image} alt={char.name} className="character-img" />
                  <div className="character-name">{char.name}</div>
                </td>
              </tr>

              
              {selectedCharacterId === char.id && (
                <tr className="details-row">
                  <td colSpan={1}>
                    <div className="character-details">
                      <h2>{char.name}</h2>
                      <p><strong>Durum:</strong> {char.status}</p>
                      <p><strong>Tür:</strong> {char.species}</p>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CharacterTable;
