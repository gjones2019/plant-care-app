import React, { useState, useEffect } from 'react';
import { Data } from './api/data';
import PlantEntry from './plantEntry';
import Pagination from './pagination';
import styles from '../styles/main.module.css';

const Main: React.FC = () => {
  const [plantData, setPlantData] = useState<Data | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const entriesPerPage = 20;
  const [selectedEntry, setSelectedEntry] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      if (response.ok) {
        const data = await response.json();
        setPlantData(data);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleClick = (name: string) => {
    setSelectedEntry(name === selectedEntry ? null : name);
  };

  const renderEntries = () => {
    if (!plantData || !plantData.json) return null;

    const sortedData = [...plantData.json].sort((a, b) => a.name.localeCompare(b.name));


    if (selectedEntry) {
      const selected = sortedData.find((entry) => entry.name === selectedEntry);
      if (selected) {
        return (
          <PlantEntry
            name={selected.name}
            care={selected.care}
            onClick={() => setSelectedEntry(null)}
          />
        );
      }
    }

    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;
    const visibleEntries = sortedData.slice(startIndex, endIndex);

    return visibleEntries.map((entry, index) => (
      <PlantEntry
        key={index}
        name={entry.name}
        care={entry.care}
        onClick={() => handleClick(entry.name)}
      />
    ));
  };

  const totalPages = plantData && plantData.json
    ? Math.ceil(plantData.json.length / entriesPerPage)
    : 1;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="main">
      <div className={styles.grid}>{renderEntries()}</div>
      {plantData ?
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        /> : null}
    </div>
  );
};

export default Main;
