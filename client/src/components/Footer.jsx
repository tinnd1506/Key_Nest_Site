import React from 'react';
import footerLogo from '../assets/key-logo-footer.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../store/features/languageSlice';

const Footer = () => {
  const dispatch = useDispatch();
  const { currentLanguage } = useSelector((state) => state.language);

  return (
    <footer className="footer">
      <a href="/" className="footer-logo">
        <span>KeyNest</span>
        <img src={footerLogo} alt="KeyNest logo" />
      </a>
      <p>&copy; 2024 KeyNest</p>
      <div className="language-selector">
        <button
          className={currentLanguage === 'en' ? 'active' : ''}
          onClick={() => dispatch(setLanguage('en'))}
        >
          EN
        </button>
        <button
          className={currentLanguage === 'fr' ? 'active' : ''}
          onClick={() => dispatch(setLanguage('fr'))}
        >
          FR
        </button>
        <button
          className={currentLanguage === 'sp' ? 'active' : ''}
          onClick={() => dispatch(setLanguage('sp'))}
        >
          ES
        </button>
      </div>
    </footer>
  );
};

export default Footer;
