import React from 'react';
import Homepage from './components/Homepage';
import About from './components/About';
import CPTAccuracySection from './components/CPTAccuracySection';
import Navbar from './components/Navbar';
import WhyGoCpt from './components/Whygocpt';
import HowCan from './components/Howcan';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-black text-white flex flex-col font-jura'>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Homepage />
              <About />
              <WhyGoCpt />
              <CPTAccuracySection />
              <HowCan />
              <ContactForm />
              <Footer />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
