import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTranslations } from '../store/features/languageSlice';

const Home = ({ HomeBanner, Card }) => {
  const dispatch = useDispatch();
  const { translations, currentLanguage, loading } = useSelector((state) => state.language);

  useEffect(() => {
    dispatch(loadTranslations(currentLanguage));
  }, [currentLanguage, dispatch]);

  if (!translations?.home || loading) {
    return <div>Loading translations...</div>;
  }

  return (
    <>
      <main>
        <HomeBanner bannerText={translations.home.bannerText} />
        <section className="cards-container">
          <Card />
        </section>
      </main>
    </>
  );
};

export default Home;
