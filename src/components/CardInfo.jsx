import React from 'react';
import '../assets/styles/CardInfo.css';

function cardInfo({ location }) {
  return (
    <div className="cardInfo">
      <div className="cardInfo__name">
        <h2>{location.name}</h2>
      </div>
      <div className="cardInfo__container">
        <div className="cardInfo__col-size2">
          <h3 className="cardInfo__title">Type:</h3>
          <p className="cardInfo__item-data">{location.type}</p>
        </div>
        <div className="cardInfo__col-size2">
          <h3 className="cardInfo__title">Dimension:</h3>
          <p className="cardInfo__item-data">{location.dimension}</p>
        </div>
        <div className="cardInfo__col-size1">
          <h3 className="cardInfo__title">Population:</h3>
          <p className="cardInfo__item-data">{location.residents.length}</p>
        </div>
      </div>
    </div>
  );
}

export default cardInfo;
