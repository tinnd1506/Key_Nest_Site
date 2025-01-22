import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';

const CardsContainer = () => {
  return (
    <section className="cards-container">
      {data.map((apartment) => (
        <Link key={apartment.id} to={`/apartment/${apartment.id}`}>
          <article className="card">
            <h3>{apartment.title}</h3>
            <img className="card-img" src={apartment.cover} alt={apartment.title} />
          </article>
        </Link>
      ))}
    </section>
  );
};

export default CardsContainer;
