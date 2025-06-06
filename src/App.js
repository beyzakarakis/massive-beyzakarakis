import React, { useState, useEffect } from 'react';
import FilterBar from './components/FilterBar';
import CharacterGrid from './components/CharacterGrid';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filteredChars, setFilteredChars] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    name: '',
    species: '',
    status: '',
    sort: 'random',
  });
  const perPage = 12;

  useEffect(() => {
    const fetchAll = async () => {
      let allChars = [];
      let page = 1;
      while (allChars.length < 250) {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        const data = await res.json();
        allChars = [...allChars, ...data.results];
        page++;
        if (!data.info.next) break;
      }
      setCharacters(allChars.slice(0, 250));
    };
    fetchAll();
  }, []);

  useEffect(() => {
    let filtered = characters;

    // İsim filtresi (küçük büyük harf duyarsız)
    if (filters.name) {
      filtered = filtered.filter((c) =>
        c.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }
    // Tür filtresi
    if (filters.species) {
      filtered = filtered.filter((c) => c.species === filters.species);
    }
    // Durum filtresi
    if (filters.status) {
      filtered = filtered.filter((c) => c.status === filters.status);
    }

    // Sıralama
    // Sıralama
if (filters.sort === 'asc') {
  filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
} else if (filters.sort === 'desc') {
  filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
} else if (filters.sort === 'random') {
  filtered = filtered.sort(() => Math.random() - 0.5);
}

    filtered = filtered.sort((a, b) =>
      filters.sort === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    setFilteredChars(filtered);
    setCurrentPage(1); // filtre değişince sayfa 1'e dönsün
  }, [characters, filters]);

  const pagedData = filteredChars.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <div className="app-container-with-sidebar">
      <FilterBar filters={filters} setFilters={setFilters} />
      <div className="main-content">
  <h1>Rick and Morty Karakterleri</h1>
  {pagedData.length === 0 ? (
    <p style={{ marginTop: '2rem', fontSize: '18px', color: '#555' }}>
      Sonuç bulunamadı.
    </p>
  ) : (
    <>
      <CharacterGrid
        data={pagedData}
        selectedId={selectedId}
        onSelect={(id) => setSelectedId(id === selectedId ? null : id)}
      />
      <Pagination
        total={filteredChars.length}
        perPage={perPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  )}
</div>

    </div>
  );
}

export default App;
