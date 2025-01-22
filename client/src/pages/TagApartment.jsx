import React from 'react';
import { useParams } from 'react-router-dom';
import apartmentsData from '../data/data.json';

const TagApartments = ({ Card }) => {
  const { tag } = useParams();

  const filteredApartments = apartmentsData.filter(apartment =>
    apartment.tags.includes(tag)
  );

  return (
    <div className="tag-apartments-page">
      <h1>Related Apartments: {tag}</h1>
      <div className="apartments-grid">
        {filteredApartments.map(apartment => (
          <Card
            key={apartment.id}
            id={apartment.id}
            title={apartment.title}
            cover={apartment.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default TagApartments;
