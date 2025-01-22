import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { loadTranslations } from './store/features/languageSlice';

// Load initial translations
store.dispatch(loadTranslations('en'));
import Header from './components/Header';
import Footer from './components/Footer';
import HomeBanner from './components/Banner.jsx';
import Card from './components/Card';
import Accordion from './components/Accordion';
import Carousel from './components/Carousel';
import RatingStars from './components/RatingStars';
import { getRelatedApartments } from './utils/apartmentSugesster.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App 
        Header={Header}
        Footer={Footer} 
        HomeBanner={HomeBanner}
        Card={Card}
        Accordion={Accordion}
        Carousel={Carousel}
        RatingStars={RatingStars}
        getRelatedApartments={getRelatedApartments}
      />
    </Provider>
  </StrictMode>
);
