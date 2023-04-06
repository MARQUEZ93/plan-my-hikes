import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'semantic-ui-react';

import parks from "../data/parks";


function ParkSearchBar() {
  const [query, setQuery] = useState('');

  const handleSearchChange = (_, { value }) => {
    setQuery(value);
  };

  const handleSearchSubmit = () => {
      console.log(query);
    // redirect to search results page with query params
    window.location.href = `/parks?query=${query}`;
  };

  // Map the park objects to an array of search suggestion objects
  const parkOptions = parks.map((park) => ({
    key: park.route,
    value: park.route,
    title: park.name,
  }));

  return (
    <Search
      input={{ fluid: true }}
      placeholder="Search for another park..."
      value={query}
      onSearchChange={handleSearchChange}
      onSearch={handleSearchSubmit}
      resultRenderer={({ title, value }) => (
        <Link to={`/parks/${value}`}>
          <div>{title}</div>
        </Link>
      )}
      results={parkOptions}
    />
  );
}

export default ParkSearchBar;
