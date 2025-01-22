import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';
import Home from './pages/Home';
import About from './pages/About';
import Apartment from './pages/Apartment';
import TagApartments from './pages/TagApartment';
import NotFound from './pages/NotFound';

const App = ({
  Header,
  Footer,
  HomeBanner,
  Card,
  Accordion,
  Carousel,
  RatingStars,
  getRelatedApartments
}) => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                HomeBanner={HomeBanner}
                Card={Card}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                HomeBanner={HomeBanner}
                Accordion={Accordion}
              />
            }
          />
          <Route
            path="/apartment/:id"
            element={
              <Apartment
                Carousel={Carousel}
                RatingStars={RatingStars}
                getRelatedApartments={getRelatedApartments}
              />
            }
          />
          <Route
            path="/apartments/tag/:tag"
            element={
              <TagApartments Card={Card} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
