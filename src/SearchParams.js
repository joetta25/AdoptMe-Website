import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropDown';

//once i type in the input is renders the component
//location is the current state of the input field
//setLocation is the updater and then makes location become what i set it to be
//useState is the default state
// the parentheses on .map allows it the be a implicit return

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown] = useDropdown('Breed', ' ', breeds);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
