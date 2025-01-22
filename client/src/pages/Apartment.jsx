import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import apartmentsData from '../data/data.json';
import arrowImg from '../assets/arrow.svg';

const Apartment = ({ Carousel, RatingStars, getRelatedApartments }) => {
  const { id } = useParams();
  const apartment = useMemo(() => 
    apartmentsData.find(apt => apt.id === id),
    [id]
  );
  
  const [openAccordion, setOpenAccordion] = useState(null);
  const [currentApartmentIndex, setCurrentApartmentIndex] = useState(0);
  const relatedApartments = useMemo(() => 
    apartment ? getRelatedApartments(apartment) : [],
    [apartment]
  );

  const toggleAccordion = useCallback((index) => {
    setOpenAccordion(prevIndex => prevIndex === index ? null : index);
  }, []);

  if (!apartment) {
    return (
      <div className="error-message">
        <h2>Apartment not found</h2>
        <Link to="/">Return to home page</Link>
      </div>
    );
  }

  const rating = useMemo(() => parseInt(apartment.rating), [apartment.rating]);
  return (
    <>
      <main>
        <Carousel pictures={apartment.pictures} />
        <article className="apartment">
          <h2>{apartment.title}</h2>
          <p>{apartment.location}</p>
          <div className="tags-container">
            {apartment.tags.map((tag, index) => (
              <Link to={`/apartments/tag/${tag}`} className="tag" key={index}>
                {tag}
              </Link>
            ))}
          </div>
          <RatingStars rating={rating} />
          <div className="greater">
            <div className="greater-container">
              <span>{apartment.host.name}</span>
              <img src={apartment.host.picture} alt={apartment.host.name} />
            </div>
          </div>
        </article>
        <div className="apartment-accordion-container">
          <div className="accordion-item">
            <div
              className="accordion-header"
              role="button"
              onClick={() => toggleAccordion(0)}
            >
              <h2>Description</h2>
              <button>
                <img
                  src={arrowImg}
                  alt="arrow"
                  className={openAccordion === 0 ? 'open' : ''}
                />
              </button>
            </div>
            <div
              className={`accordion-body ${openAccordion === 0 ? 'open' : ''}`}
            >
              {apartment.description}
            </div>
          </div>
          <div className="accordion-item">
            <div
              className="accordion-header"
              role="button"
              onClick={() => toggleAccordion(1)}
            >
              <h2>Equipment</h2>
              <button>
                <img
                  src={arrowImg}
                  alt="arrow"
                  className={openAccordion === 1 ? 'open' : ''}
                />
              </button>
            </div>
            <div
              className={`accordion-body ${openAccordion === 1 ? 'open' : ''}`}
            >
              <ul>
                {apartment.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr style={{ marginTop: '1em' }} />
        <section className="related-section">
          <h2>You might also like</h2>
          <Carousel
            type="related"
            items={relatedApartments}
            currentIndex={currentApartmentIndex}
            setCurrentIndex={setCurrentApartmentIndex}
          />
        </section>

      </main>
    </>
  );
};

Apartment.propTypes = {
  Carousel: PropTypes.elementType.isRequired,
  RatingStars: PropTypes.elementType.isRequired,
  getRelatedApartments: PropTypes.func.isRequired
};

export default React.memo(Apartment);
