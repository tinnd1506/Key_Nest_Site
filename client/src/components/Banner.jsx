import React from 'react';
import defaultImage from '../assets/cabin.jpg';

const HomeBanner = ({ bannerText, imageSrc, className = '' }) => {
  return (
    <section className={`home-banner ${className}`}>
      <img src={imageSrc || defaultImage} alt="cabin key host" />
      <h2>{bannerText}</h2>
    </section>
  );
};

export default HomeBanner;
