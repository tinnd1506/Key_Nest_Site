import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import arrowBack from '../assets/arrow_back.png';
import arrowForward from '../assets/arrow_forward.png';

const ArrowButton = ({ direction, onClick, altText }) => (
  <button 
    className={`carousel-button ${direction}`} 
    onClick={onClick}
  >
    <img 
      src={direction === 'prev' ? arrowBack : arrowForward} 
      alt={altText} 
    />
  </button>
);

ArrowButton.propTypes = {
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
  onClick: PropTypes.func.isRequired,
  altText: PropTypes.string.isRequired
};

const Carousel = ({ type = 'image', items = [], pictures }) => {
  const carouselItems = pictures || items;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = useCallback(() => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  }, [carouselItems.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex(prevIndex =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  }, [carouselItems.length]);

  if (!carouselItems?.length) {
    return <div className="carousel-empty">No images available</div>;
  }

  const renderRelatedItems = () => {
    const visibleItems = [];
    for (let i = 0; i < 3; i++) {
      const item = items[(currentIndex + i) % items.length];
      visibleItems.push(
        item ? (
          <a
            key={item.id}
            href={`/apartment/${item.id}`}
            data-discover="true"
          >
            <article className="card">
              <h3>{item.title}</h3>
              <div>
                <img
                  className="card-img"
                  src={item.cover}
                  alt={item.title}
                  onError={(e) => {
                    e.target.src = '/fallback-image.jpg';
                  }}
                />
              </div>
            </article>
          </a>
        ) : (
          <div key={i} className="card-placeholder"></div>
        )
      );
    }
    return visibleItems;
  };

  const renderCarouselItems = () => (
    carouselItems.map((item, index) => (
      <div
        className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
        key={index}
      >
        <img 
          src={item} 
          alt={`View ${index + 1}`} 
          onError={(e) => {
            e.target.src = '/fallback-image.jpg';
            handleNext();
          }}
        />
      </div>
    ))
  );

  return (
    <div className={`carousel ${type === 'related' ? 'related-container' : ''}`}>
      <ArrowButton 
        direction="prev" 
        onClick={handlePrevious} 
        altText={type === 'related' ? 'Previous' : 'Back arrow'}
      />
      
      <div className={type === 'related' ? 'related-items' : 'carousel-items'}>
        {type === 'related' ? renderRelatedItems() : renderCarouselItems()}
      </div>

      <ArrowButton 
        direction="next" 
        onClick={handleNext} 
        altText={type === 'related' ? 'Next' : 'Forward arrow'}
      />
    </div>
  );
};

Carousel.propTypes = {
  type: PropTypes.oneOf(['image', 'related']),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired
    })
  ),
  pictures: PropTypes.arrayOf(PropTypes.string)
};

export default Carousel;
