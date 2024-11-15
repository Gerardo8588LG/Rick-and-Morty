import React, { useEffect, useRef, useState } from 'react';
import '../assets/styles/Search.css';
import useFetch from '../hooks/useFecth';

function Search({ setLocationId }) {
  const [error, setError] = useState();
  const inputRef = useRef();

  const [locationList, setLocationList, loadingList, errorlist] = useFetch();

  useEffect(() => {
    setLocationList(
      'https://rickandmortyapi.com/api/location/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126',
    );
  }, []);

  console.log('location list ', locationList);

  const onSubmit = (e) => {
    e.preventDefault();
    const id = parseInt(inputRef.current.value);

    if (isNaN(id)) {
      setError('Enter a valid number');
      setTimeout(() => {
        setError('');
      }, 3000);
      e.target.reset();
      return;
    }
    if (id < 1 || id > 126) {
      setError('You must provide an Id from 1 to 126');
      setTimeout(() => {
        setError('');
      }, 3000);
      e.target.reset();
      return;
    }

    setLocationId(id);
    e.target.reset();
  };

  const handleSelect = (e) => {
    const id = parseInt(e.target.value);
    if (!isNaN(id)) {
      setLocationId(id);
    }
  };

  return (
    <>
      {loadingList ? (
        <h1 className="message_error-list">Loading locations...</h1>
      ) : null}
      <form onSubmit={onSubmit} className="search">
        <input
          ref={inputRef}
          type="text"
          className="search__input"
          placeholder="Search ID or location"
          list="locationName"
          onInput={handleSelect}
        />
        <datalist id="locationName" className="search__list">
          {locationList?.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))}
        </datalist>
        <button className="search__btn">Search</button>
        <p className="message__error">{error && error}</p>
        <p className="message__error">{errorlist && errorlist}</p>
      </form>
    </>
  );
}

export default Search;
