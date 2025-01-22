import apartmentsData from '../data/data.json';

export function getRelatedApartments(currentApartment) {
  if (!currentApartment) return [];

  const otherApartments = apartmentsData.filter(
    apt => apt.id !== currentApartment.id
  );

  const scoredApartments = otherApartments.map(apt => {
    let score = 0;

    const matchingTags = currentApartment.tags.filter(tag =>
      apt.tags.includes(tag)
    );
    score += matchingTags.length * 2;

    if (apt.location === currentApartment.location) {
      score += 3;
    }

    const priceDiff = Math.abs(apt.price - currentApartment.price);
    if (priceDiff <= currentApartment.price * 0.2) {
      score += 1;
    }

    return { ...apt, score };
  });

  scoredApartments.sort((a, b) => b.score - a.score);

  const topCandidates = scoredApartments.slice(0, 6);
  const selected = [];

  while (selected.length < 5 && topCandidates.length > 0) {
    const randomIndex = Math.floor(Math.random() * topCandidates.length);
    selected.push(topCandidates.splice(randomIndex, 1)[0]);
  }

  while (selected.length < 5) {
    const randomIndex = Math.floor(Math.random() * otherApartments.length);
    if (!selected.includes(otherApartments[randomIndex])) {
      selected.push(otherApartments[randomIndex]);
    }
  }

  return selected;
}
