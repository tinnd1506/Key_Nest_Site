import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import enAbout from '../../data/data.about.en.json';
import frAbout from '../../data/data.about.fr.json';
import spAbout from '../../data/data.about.sp.json';
import enHome from '../../data/data.home.en.json';
import frHome from '../../data/data.home.fr.json';
import spHome from '../../data/data.home.sp.json';

export const loadTranslations = createAsyncThunk(
  'language/loadTranslations',
  async (language) => {
    const translations = {
      about: language === 'en' ? enAbout : language === 'fr' ? frAbout : spAbout,
      home: language === 'en' ? enHome : language === 'fr' ? frHome : spHome
    };
    return translations;
  }
);

const initialState = {
  currentLanguage: 'en',
  translations: {
    about: enAbout,
    home: enHome
  },
  loading: false,
  error: null
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTranslations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadTranslations.fulfilled, (state, action) => {
        state.translations = action.payload;
        state.loading = false;
      })
      .addCase(loadTranslations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
