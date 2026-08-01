import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import StudentDashboard from './pages/StudentDashboard';
import InstitutionDashboard from './pages/InstitutionDashboard';
import VerificationPage from './pages/VerificationPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/institution" element={<InstitutionDashboard />} />
          <Route path="/verify" element={<VerificationPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
