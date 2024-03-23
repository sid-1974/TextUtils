
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutSection from './components/AboutSection';

function App() {
  const [mode, setMode] = useState('Light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'Light') {
      setMode('dark');
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('Light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Home';
    }
  };

  return (
    <Router>
      <Navbar title="Textutils" about="ABOUT" home="HOME" mode={mode} togglemode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<AboutSection  mode={mode} />}  />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils- Word Counter,Character Counter,Remove Exra Spaces. " mode={mode} />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
