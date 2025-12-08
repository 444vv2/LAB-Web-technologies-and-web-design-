import React from 'react';
import './App.css';
import Navigation from '../Layout/Navigation/Navigation';
import Footer from '../../components/Footer/footer';
import {Provider} from 'react-redux';
import { store } from '../../store/srore';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <Footer />
    </Provider>
  );
}

export default App;
