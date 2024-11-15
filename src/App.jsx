import React, { useEffect, useState } from 'react';
import useFetch from './hooks/useFecth';
import CardInfo from './components/CardInfo';
import ResidentsList from './components/ResidentsList';
import Search from './components/Search';
import './assets/styles/App.css';

function App() {
  const [location, setLocation, loadingLoc, errorLoc] = useFetch();
  const [locationId, setLocationId] = useState(1);
  const [resetPage, setResetPage] = useState(false);
  const [errorApi, setErrorApi] = useState(null);

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${locationId}`;
    console.log(URL);

    setLocation(URL);
    setResetPage(true);
  }, [locationId]);

  console.log('eror app ', errorLoc);

  useEffect(() => {
    setErrorApi(errorLoc);
    setTimeout(() => {
      setErrorApi('');
    }, 3000);
  }, [errorLoc]);

  useEffect(() => {
    console.log('eror appi eff ', errorApi);
  }, [errorApi]);

  if (!location) return null;

  return (
    <>
      <div className="hero">
        <div className="hero__logo-container">
          <img src="/logo.svg" alt="Logo" className="hero__logo" />
        </div>
      </div>
      <div className="container">
        <Search setLocationId={setLocationId} />
        {errorApi && <div className="error">{errorApi}</div>}
        {loadingLoc && <h1 className="loadingMessage">Loading...</h1>}
        <CardInfo location={location} />
        <ResidentsList
          residents={location?.residents || []}
          resetPage={resetPage}
          setResetPage={setResetPage}
        />
      </div>
    </>
  );
}

export default App;
