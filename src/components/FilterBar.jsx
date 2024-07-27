import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FilterBar = ({ onFilter }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(''); // State for location filter

  // Options for the type filter
  const typeOptions = [
    { value: '', label: 'Filter by Type' },
    { value: 'Yoga', label: 'Yoga' },
    { value: 'Meditation', label: 'Meditation' },
    { value: 'Detox', label: 'Detox' },
    { value: 'Workshop', label: 'Workshop' },
    { value: 'Weight Loss', label: 'Weight Loss' },
    { value: 'Camp', label: 'Camp' },
    { value: 'Weekend', label: 'Weekend' },
    { value: 'Flexibility', label: 'Flexibility' },
    { value: 'Diet', label: 'Diet' }
  ];

  // Options for the location filter (assuming predefined locations)
  const locationOptions = [
    { value: '', label: 'Filter by Location' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'chennai', label: 'Chennai' },
    { value: 'hyderabad', label: 'Hyderabad' },
    { value: 'pune', label: 'Pune' }
  ];

  const handleFilter = () => {
    // Call onFilter with updated filters
    onFilter({
      date: selectedDate,
      type: selectedType?.value || '',
      location: selectedLocation?.value || ''
    });
  };

  return (
    <div className="flex flex-wrap justify-between items-center mb-4">
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full md:w-auto">
        {/* Date filter */}
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Filter by Date"
          className="border border-gray-300 rounded-lg p-2 w-full md:w-auto"
        />

        {/* Type filter */}
        <Select
          value={selectedType}
          onChange={(option) => setSelectedType(option)}
          options={typeOptions}
          className="w-full md:w-48"
        />

        {/* Location filter */}
        <Select
          value={selectedLocation}
          onChange={(option) => setSelectedLocation(option)}
          options={locationOptions}
          className="w-full md:w-48"
        />
      </div>

      {/* Filter button */}
      <button
        onClick={handleFilter}
        className="bg-blue-900 text-white px-4 py-2 rounded-lg w-full md:w-auto mt-2 md:mt-0"
      >
        Filter
      </button>
    </div>
  );
};

export default FilterBar;
