import React from 'react';
import starActive from '../assets/star-active.svg';
import starInactive from '../assets/star-inactive.svg';

const RatingStars = ({ rating }) => {
  const stars = [];
  const maxRating = 5;
  
  for (let i = 0; i < maxRating; i++) {
    stars.push(
      <img
        key={i}
        src={i < rating ? starActive : starInactive}
        alt={i < rating ? "active star" : "inactive star"}
      />
    );
  }

  return <div className="stars-container">{stars}</div>;
};

export default RatingStars;
