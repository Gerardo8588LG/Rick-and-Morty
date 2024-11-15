import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFecth';
import '../assets/styles/ResidentCard.css';

function ResidentCard({ url }) {
  console.log('url ', url);

  const [resident, setResident] = useFetch();
  const [flipped, setFlipped] = useState(false); // Nuevo estado para manejar el giro

  useEffect(() => {
    setResident(url);
  }, [url]);

  useEffect(() => {
    // Si la tarjeta se voltea, esperamos 5 segundos y luego volvemos a su estado inicial
    if (flipped) {
      const timeout = setTimeout(() => {
        setFlipped(false); // Vuelve a voltear la tarjeta a su estado original después de 5 segundos
      }, 3000);

      // Limpiamos el timeout si el componente se desmonta o el estado cambia
      return () => clearTimeout(timeout);
    }
  }, [flipped]); // Este efecto se ejecuta cada vez que el estado `flipped` cambia

  const statusDat = resident?.status.toLowerCase();
  const statusClass =
    statusDat === 'alive' ? 'alive' : statusDat === 'dead' ? 'dead' : 'unknown';

  // Función para manejar el clic y cambiar el estado de flipped
  const handleClick = () => {
    setFlipped(!flipped); // Cambia el estado de `flipped` cuando se hace clic
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card__front">
        <div className="card__image">
          <img
            className="card__image-img"
            src={resident?.image}
            alt={resident?.name}
          />
          <span className={`card__status ${statusClass}`}>
            {resident?.status}
          </span>
          <h3 className="card__name">{resident?.name}</h3>

          <span className="card__info-item">
            <span className="card__info-label">Episodes where appeared:</span>
            {resident?.episode?.length}
          </span>
        </div>
      </div>
      <div className="card__back">
        <div className="card__info">
          <span className="card__info-item">
            <span className="card__info-label">Specimen:</span>
            {resident?.species}
          </span>
          <span className="card__info-item">
            <span className="card__info-label">Origin:</span>
            {resident?.origin?.name}
          </span>
          <span className="card__info-item">
            <span className="card__info-label">Episodes:</span>
            {resident?.episode?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ResidentCard;
