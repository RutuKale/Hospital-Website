import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HeartbeatLoader from './components/HeartbeatLoader';
import Home from './pages/home page/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import Specialities from './pages/Specialities';
import FindDoctor from './pages/FindDoctor';
import OPD from './pages/departments/OPD';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Pharmacy from './pages/departments/Pharmacy';
import Physiotherapy from './pages/departments/Physiotherapy';
import Pathology from './pages/departments/Pathology';
import Radiology from './pages/departments/Radiology';
import Gynaecology from './pages/Specialities/Gynaecology';
import Oncology from './pages/Specialities/Oncology';
import PlasticSurgery from './pages/Specialities/PlasticSurgery';
import Pulmonology from './pages/Specialities/Pulmonology';
import Gastroenterology from './pages/Specialities/Gastroenterology';
import Psychiatry from './pages/Specialities/Psychiatry';
import Nephrology from './pages/Specialities/Nephrology';
import Urology from './pages/Specialities/Urology';
import Orthopaedics from './pages/Specialities/Orthopaedics';
import PaediatricsSurgery from './pages/Specialities/PaediatricsSurgery';
import Cardiology from './pages/Specialities/Cardiology';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [location]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    if (!loading) {
      AOS.init({
        duration: 1000,
        once: false,
        offset: 120
      });

      AOS.refresh();
    }
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      AOS.refresh();
    }
  }, [location, loading]);

  return (
    <div className="min-h-screen bg-gray-50 overflow-y-hidden overflow-x-hidden">
      {loading && <HeartbeatLoader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/specialities" element={<Specialities />} />
        <Route path="/our-doctor" element={<FindDoctor />} />

        {/* Specialities pages */}
        <Route path="/gynaecology" element={<Gynaecology />} />
        <Route path="/oncology" element={<Oncology />} />
        <Route path="/plastic-surgery" element={<PlasticSurgery />} />
        <Route path="/pulmonology" element={<Pulmonology />} />
        <Route path="/gastroenterology" element={<Gastroenterology />} />
        <Route path="/psychiatry" element={<Psychiatry />} />
        <Route path="/nephrology" element={<Nephrology />} />
        <Route path="/urology" element={<Urology />} />
        <Route path="/orthopaedics" element={<Orthopaedics />} />
        <Route path="/paediatrics-surgery" element={<PaediatricsSurgery />} />
        <Route path="/cardiology" element={<Cardiology />} />

        {/* Departments pages */}
        <Route path="/departments/opd" element={<OPD />} />
        <Route path="/departments/pharmacy" element={<Pharmacy />} />
        <Route path="/departments/physiotherapy" element={<Physiotherapy />} />
        <Route path="/departments/pathology" element={<Pathology />} />
        <Route path="/departments/radiology" element={<Radiology />} />
        {/* https://pimscityhospital.com/ */}
      </Routes>
    </div>
  );
}

export default App;
