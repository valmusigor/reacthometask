import React from 'react';
import '../style.css';
import Content from '../../components/Content';
import Header from '../../components/Header';
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
