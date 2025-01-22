import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTranslations } from '../store/features/languageSlice';

const About = ({ HomeBanner, Accordion }) => {
  const dispatch = useDispatch();
  const { translations, currentLanguage, loading } = useSelector((state) => state.language);

  useEffect(() => {
    dispatch(loadTranslations(currentLanguage));
  }, [currentLanguage, dispatch]);

  if (loading || !translations?.about) {
    return <div>Loading translations...</div>;
  }

  return (
    <>
      <main className="about">
        <h1>{translations.about.title}</h1>
        <HomeBanner />
        <article>
          {translations.about.description}
        </article>
        <div className="about-container">
          {translations.about.accordions.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </main>
    </>
  );
};

export default About;
