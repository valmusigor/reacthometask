import React from 'react';
import '../style.css';
import Header from '../../components/Content';
import Content from '../../components/Header';
import Slayder from '../../components/Slayder';
import Footer from '../../components/Footer';

const App = () => (
  <div className="App">
    <Header />
    <Content />
    <Slayder />
    <Footer />
  </div>
);

export default App;
