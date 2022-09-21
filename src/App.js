// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import './App.css';

// KOMPONENTLER
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import Contactus from './components/Contactus';

function App() {
  return (

    <>
       <Navbar />
       <Header />
       <Services />
       <Contactus />
    </>


 
  );
}

export default App;
