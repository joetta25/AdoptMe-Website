import React, {useState} from 'react';
import {ANIMALS} from "@frontendmasters/pet";

//once i type in the input is renders the component 
//location is the current state of the input field 
//setLocation is the updater and then makes location become what i set it to be 
//useState is the default state 
// the parentheses on .map allows it the be a implicit return

const SearchParams = () => {

    const [location, setLocation] = useState("Seattle, WA");
    const [animal, setAnimal] = useState("Dog");
    const [breed, setBreed] = useState("");
    const [breeds, setBreeds] = useState([]);

    
    return (

        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} 
                    placeholder="Location" onChange={e => setLocation(e.target.value)} 
                    />
                </label>
                <label htmlFor="animal">
                    Animal

                    <select id="animal" value={animal} 
                    onChange={e => setAnimal(e.target.value)}
                    onBlur={e => setAnimal(e.target.value)}
                    
                    >
                    <option>ALL</option>
                    {ANIMALS.map(animal => (
                    <option key={animal} value={animal}>{animal}</option>
                    
                    ))} 
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed

                    <select id="breed" value={breed} 
                    onChange={e => setBreed(e.target.value)}
                    onBlur={e => setBreed(e.target.value)}
                    disabled={!breeds.length === 0}
                    >
                        <option>ALL</option>
                        {breeds.map(breedString => (
                        <option key={breedString} value={breedString}>
                            {breedString}
                        </option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;