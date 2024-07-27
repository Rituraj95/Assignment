import React, { useEffect, useState } from 'react';
import RetreatCard from './RetreatCard';
import FilterBar from './FilterBar';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import LoadingSpinner from './LoadingSpinner';

const RetreatList = () => {
  const [retreats, setRetreats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRetreats, setTotalRetreats] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ type: '', date: '', location: '' });

  const RETREATS_PER_PAGE = 5;

  useEffect(() => {
    fetchRetreats();
  }, [currentPage, searchTerm, filters]);

  const fetchRetreats = async () => {
    setLoading(true);

    let apiUrl = `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${currentPage}&limit=${RETREATS_PER_PAGE}`;

    if (searchTerm) {
      apiUrl += `&search=${searchTerm}`;
    }

    if (filters.type) {
      apiUrl += `&filter=${filters.type}`;
    }

    if (filters.date) {
      apiUrl += `&date=${filters.date}`;
    }

    // Add location filter
    if (filters.location) {
      apiUrl += `&location=${filters.location}`;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log('Fetched data:', data);

      setRetreats(data);
      setLoading(false);

      const totalResponse = await fetch(
        `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats`
      );
      const totalData = await totalResponse.json();
      setTotalRetreats(totalData.length);
    } catch (error) {
      console.error('Failed to fetch retreats:', error);
      setLoading(false);
    }
  };

  const handleFilter = (filters) => {
    setFilters(filters);
    setCurrentPage(1); 
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); 
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar onSearch={handleSearch} />
      <FilterBar onFilter={handleFilter} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {retreats.map((retreat) => (
            <RetreatCard key={retreat.id} retreat={retreat} />
          ))}
        </div>
      )}
      <Pagination
        totalPages={Math.ceil(totalRetreats / RETREATS_PER_PAGE)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default RetreatList;
