import React from 'react';
import './FilterBar.css';

const FilterBar = ({ filters, setFilters }) => {
  const speciesOptions = ['', 'Human', 'Alien', 'Humanoid', 'Poopybutthole', 'Mythological Creature', 'Unknown'];
  const statusOptions = ['', 'Alive', 'Dead', 'unknown'];
  const resetFilters = () => {
    setFilters({
      name: '',
      species: '',
      status: '',
      sort: 'random',
    });}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="filter-bar">
      <h3>Filtreleme</h3>

      <label>İsim:</label>
      <input
        type="text"
        name="name"
        value={filters.name}
        onChange={handleChange}
        placeholder="İsim ara..."
      />

      <label>Tür:</label>
      <select name="species" value={filters.species} onChange={handleChange}>
        {speciesOptions.map(opt => (
          <option key={opt} value={opt}>{opt || 'Hepsi'}</option>
        ))}
      </select>

      <label>Durum:</label>
      <select name="status" value={filters.status} onChange={handleChange}>
        {statusOptions.map(opt => (
          <option key={opt} value={opt}>{opt || 'Hepsi'}</option>
        ))}
      </select>

      <label>Sıralama:</label>
      <select name="sort" value={filters.sort} onChange={handleChange}>
        <option value="random">Karışık</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>

      <button className="reset-btn" onClick={resetFilters}>
        Filtreyi Sıfırla
      </button>
      
    </div>
  );
};

export default FilterBar;
